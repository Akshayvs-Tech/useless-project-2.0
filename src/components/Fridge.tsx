'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useKitchen } from '@/lib/kitchen-context';
import { X } from 'lucide-react';

export function Fridge() {
  const { state, dispatch } = useKitchen();

  const fridgeIngredients = state.inventory.filter(
    ingredient => ingredient.location === 'fridge' && ingredient.quantity > 0
  );

  const handleIngredientClick = (ingredientId: string) => {
    const ingredient = state.inventory.find(inv => inv.id === ingredientId);
    if (ingredient && ingredient.quantity > 0) {
      const amount = ingredient.unit === 'pieces' ? 1 : 
                   ingredient.unit === 'ml' ? 50 : 
                   ingredient.unit === 'g' ? 10 : 1;
      
      if (ingredient.quantity >= amount) {
        dispatch({ type: 'SELECT_INGREDIENT', ingredientId, quantity: amount });
      }
    }
  };

  return (
    <div className="relative">
      {/* Fridge */}
      <motion.div
        className="relative w-64 h-96 bg-gradient-to-b from-cyan-200 via-blue-100 to-cyan-200 rounded-2xl shadow-2xl border-4 border-cyan-300 cursor-pointer overflow-hidden"
        whileHover={{ scale: 1.05, rotate: 1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => dispatch({ type: 'TOGGLE_FRIDGE' })}
        animate={{ 
          boxShadow: [
            '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            '0 25px 50px -12px rgba(59, 130, 246, 0.5)',
            '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {/* Fridge Handle - More Fun */}
        <motion.div 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-20 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full shadow-lg border-2 border-yellow-600"
          whileHover={{ scale: 1.1 }}
          animate={{ rotate: [0, 2, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        ></motion.div>
        
        {/* Fridge Brand - More Playful */}
        <div className="absolute top-4 left-4 text-blue-700 font-bold text-sm flex items-center space-x-1">
          <span>🧊</span>
          <span>MEGA COOL</span>
        </div>

        {/* Door Split Line - More Visible */}
        <div className="absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400"></div>

        {/* LED Display - More Fun */}
        <motion.div 
          className="absolute top-8 right-8 w-12 h-6 bg-black rounded-lg text-green-400 text-xs flex items-center justify-center font-mono border-2 border-green-400"
          animate={{ 
            boxShadow: [
              '0 0 5px rgba(34, 197, 94, 0.5)',
              '0 0 20px rgba(34, 197, 94, 0.8)',
              '0 0 5px rgba(34, 197, 94, 0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ❄️ 4°C
        </motion.div>

        {/* Closed Door Effect */}
        <AnimatePresence>
          {!state.fridgeOpen && (
            <motion.div
              key="closed-door"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, x: -100, rotateY: -90 }}
              className="absolute inset-0 bg-gradient-to-b from-cyan-200 via-blue-100 to-cyan-200 rounded-2xl flex items-center justify-center"
              transition={{ duration: 0.5 }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-8xl"
              >
                ❄️
              </motion.div>
              <motion.div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-blue-600 font-bold text-sm"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ✨ MAGICAL FRIDGE ✨
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Open Fridge Interior */}
        <AnimatePresence>
          {state.fridgeOpen && (
            <motion.div
              key="open-fridge"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-2 bg-gradient-to-b from-blue-50 to-white rounded-xl border border-gray-200"
            >
              {/* Interior Light */}
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-yellow-200 rounded-full opacity-60"></div>
              
              {/* Shelves */}
              <div className="p-2 h-full overflow-y-auto">
                <div className="space-y-2">
                  {fridgeIngredients.map((ingredient, index) => (
                    <motion.div
                      key={ingredient.id}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-2 p-2 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 cursor-pointer border border-gray-100"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleIngredientClick(ingredient.id);
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="text-2xl">{ingredient.emoji}</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-gray-900 truncate">
                          {ingredient.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {ingredient.quantity} {ingredient.unit}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch({ type: 'TOGGLE_FRIDGE' });
                }}
                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                <X size={12} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Fridge Label */}
      <motion.div 
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-lg font-bold text-cyan-600 flex items-center space-x-2">
          <span>🧊</span>
          <span>Super Cool Fridge</span>
          <span>🧊</span>
        </div>
        <motion.div 
          className="text-sm text-cyan-500 mt-1"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ✨ Click for magical ingredients! ✨
        </motion.div>
      </motion.div>
    </div>
  );
}
