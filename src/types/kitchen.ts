export interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  location: 'fridge' | 'cabinet';
  emoji: string;
  color: string;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: Array<{
    ingredientId: string;
    quantity: number;
  }>;
  cookingTime: number; // in seconds
  emoji: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface CookingItem {
  id: string;
  recipeId: string;
  recipeName: string;
  startTime: number;
  duration: number;
  emoji: string;
}

export interface KitchenState {
  fridgeOpen: boolean;
  cabinetOpen: boolean;
  stoveOccupied: boolean;
  currentCooking: CookingItem | null;
  inventory: Ingredient[];
  selectedIngredients: Array<{
    ingredientId: string;
    quantity: number;
  }>;
  recipeBookOpen: boolean;
}
