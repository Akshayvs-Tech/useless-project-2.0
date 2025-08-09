'use client';
/* eslint-disable react/no-unescaped-entities */

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { KitchenState, Ingredient, Recipe, CookingItem } from '@/types/kitchen';
import { INITIAL_INGREDIENTS } from '@/lib/data';

type KitchenAction =
  | { type: 'TOGGLE_FRIDGE' }
  | { type: 'TOGGLE_CABINET' }
  | { type: 'TOGGLE_RECIPE_BOOK' }
  | { type: 'ADD_INGREDIENT'; ingredient: Ingredient; quantity: number }
  | { type: 'REMOVE_INGREDIENT'; ingredientId: string; quantity: number }
  | { type: 'SELECT_INGREDIENT'; ingredientId: string; quantity: number }
  | { type: 'CLEAR_SELECTION' }
  | { type: 'START_COOKING'; recipe: Recipe }
  | { type: 'FINISH_COOKING' }
  | { type: 'UPDATE_COOKING_PROGRESS' };

const initialState: KitchenState = {
  fridgeOpen: false,
  cabinetOpen: false,
  stoveOccupied: false,
  currentCooking: null,
  inventory: INITIAL_INGREDIENTS,
  selectedIngredients: [],
  recipeBookOpen: false,
};

function kitchenReducer(state: KitchenState, action: KitchenAction): KitchenState {
  switch (action.type) {
    case 'TOGGLE_FRIDGE':
      return {
        ...state,
        fridgeOpen: !state.fridgeOpen,
        cabinetOpen: false,
        recipeBookOpen: false,
      };

    case 'TOGGLE_CABINET':
      return {
        ...state,
        cabinetOpen: !state.cabinetOpen,
        fridgeOpen: false,
        recipeBookOpen: false,
      };

    case 'TOGGLE_RECIPE_BOOK':
      return {
        ...state,
        recipeBookOpen: !state.recipeBookOpen,
        fridgeOpen: false,
        cabinetOpen: false,
      };

    case 'SELECT_INGREDIENT':
      const existingSelection = state.selectedIngredients.find(
        item => item.ingredientId === action.ingredientId
      );
      
      if (existingSelection) {
        return {
          ...state,
          selectedIngredients: state.selectedIngredients.map(item =>
            item.ingredientId === action.ingredientId
              ? { ...item, quantity: item.quantity + action.quantity }
              : item
          ),
        };
      } else {
        return {
          ...state,
          selectedIngredients: [
            ...state.selectedIngredients,
            { ingredientId: action.ingredientId, quantity: action.quantity }
          ],
        };
      }

    case 'CLEAR_SELECTION':
      return {
        ...state,
        selectedIngredients: [],
      };

    case 'START_COOKING':
      if (state.stoveOccupied) return state;

      // Check if we have enough ingredients
      const hasEnoughIngredients = action.recipe.ingredients.every(required => {
        const availableIngredient = state.inventory.find(inv => inv.id === required.ingredientId);
        return availableIngredient && availableIngredient.quantity >= required.quantity;
      });

      if (!hasEnoughIngredients) return state;

      // Consume ingredients
      const updatedInventory = state.inventory.map(ingredient => {
        const requiredIngredient = action.recipe.ingredients.find(
          req => req.ingredientId === ingredient.id
        );
        if (requiredIngredient) {
          return {
            ...ingredient,
            quantity: ingredient.quantity - requiredIngredient.quantity,
          };
        }
        return ingredient;
      });

      const cookingItem: CookingItem = {
        id: Date.now().toString(),
        recipeId: action.recipe.id,
        recipeName: action.recipe.name,
        startTime: Date.now(),
        duration: action.recipe.cookingTime * 1000, // Convert to milliseconds
        emoji: action.recipe.emoji,
      };

      return {
        ...state,
        stoveOccupied: true,
        currentCooking: cookingItem,
        inventory: updatedInventory,
        selectedIngredients: [],
        recipeBookOpen: false,
      };

    case 'FINISH_COOKING':
      return {
        ...state,
        stoveOccupied: false,
        currentCooking: null,
      };

    default:
      return state;
  }
}

const KitchenContext = createContext<{
  state: KitchenState;
  dispatch: React.Dispatch<KitchenAction>;
} | null>(null);

export function KitchenProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(kitchenReducer, initialState);

  return (
    <KitchenContext.Provider value={{ state, dispatch }}>
      {children}
    </KitchenContext.Provider>
  );
}

export function useKitchen() {
  const context = useContext(KitchenContext);
  if (!context) {
    throw new Error('useKitchen must be used within a KitchenProvider');
  }
  return context;
}
