'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useKitchen } from '@/lib/kitchen-context';
import { Trash2, Plus } from 'lucide-react';

export function IngredientSelector() {
  const { state, dispatch } = useKitchen();

  const getIngredientById = (id: string) => {
    return state.inventory.find(ingredient => ingredient.id === id);
  };

  const getTotalSelectedItems = () => {
    return state.selectedIngredients.reduce((total, item) => total + item.quantity, 0);
  };

  const clearSelection = () => {
    dispatch({ type: 'CLEAR_SELECTION' });
  };

  if (state.selectedIngredients.length === 0) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 max-w-md w-full mx-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="text-lg">🛒</div>
              <h3 className="font-semibold text-gray-800">Selected Ingredients</h3>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                {getTotalSelectedItems()} items
              </span>
            </div>
            <button
              onClick={clearSelection}
              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
              title="Clear all"
            >
              <Trash2 size={16} />
            </button>
          </div>

          {/* Selected Items */}
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {state.selectedIngredients.map((selectedItem, index) => {
              const ingredient = getIngredientById(selectedItem.ingredientId);
              if (!ingredient) return null;

              return (
                <motion.div
                  key={`${selectedItem.ingredientId}-${index}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-xl">{ingredient.emoji}</div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">
                        {ingredient.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {selectedItem.quantity} {ingredient.unit}
                      </div>
                    </div>
                  </div>
                  
                  {/* Quantity Badge */}
                  <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                    ×{selectedItem.quantity}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Helper Text */}
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <Plus size={12} />
              <span>Click ingredients in fridge/cabinet to add more</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
              <span>📖</span>
              <span>Check recipe book to start cooking</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
