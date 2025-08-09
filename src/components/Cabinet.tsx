"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useKitchen } from "@/lib/kitchen-context";
import { X } from "lucide-react";

export function Cabinet() {
  const { state, dispatch } = useKitchen();

  const cabinetIngredients = state.inventory.filter(
    (ingredient) => ingredient.location === "cabinet" && ingredient.quantity > 0
  );

  const handleIngredientClick = (ingredientId: string) => {
    const ingredient = state.inventory.find((inv) => inv.id === ingredientId);
    if (ingredient && ingredient.quantity > 0) {
      const amount =
        ingredient.unit === "pieces"
          ? 1
          : ingredient.unit === "ml"
          ? 50
          : ingredient.unit === "g"
          ? 10
          : 1;

      if (ingredient.quantity >= amount) {
        dispatch({ type: "SELECT_INGREDIENT", ingredientId, quantity: amount });
      }
    }
  };

  return (
    <div className="relative">
      {/* Cabinet */}
      <motion.div
        className="relative w-64 h-64 bg-gradient-to-b from-yellow-200 via-orange-100 to-red-200 rounded-xl shadow-2xl border-4 border-yellow-400 cursor-pointer overflow-hidden"
        whileHover={{ scale: 1.05, rotate: 1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => dispatch({ type: "TOGGLE_CABINET" })}
        animate={{
          boxShadow: [
            "0 25px 50px -12px rgba(251, 191, 36, 0.3)",
            "0 25px 50px -12px rgba(249, 115, 22, 0.5)",
            "0 25px 50px -12px rgba(251, 191, 36, 0.3)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {/* Cabinet Doors (when closed) */}
        <AnimatePresence>
          {!state.cabinetOpen && (
            <>
              {/* Left Door */}
              <motion.div
                key="left-door"
                initial={{ rotateY: 0 }}
                exit={{ rotateY: -90 }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-orange-200 to-yellow-100 border-r-2 border-orange-300 rounded-l-xl"
                style={{ transformOrigin: "left center" }}
              >
                {/* Left Handle */}
                <motion.div
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-8 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full border border-orange-600 shadow-lg"
                  whileHover={{ scale: 1.2 }}
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>

                {/* Fun Pattern */}
                <div className="absolute inset-2 opacity-30">
                  <div className="absolute top-4 left-4 text-orange-600 text-xl">
                    🌟
                  </div>
                  <div className="absolute bottom-4 right-4 text-yellow-600 text-lg">
                    ✨
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-orange-500 text-sm">
                    🏺
                  </div>
                </div>
              </motion.div>

              {/* Right Door */}
              <motion.div
                key="right-door"
                initial={{ rotateY: 0 }}
                exit={{ rotateY: 90 }}
                transition={{ duration: 0.5 }}
                className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-orange-200 to-yellow-100 border-l-2 border-orange-300 rounded-r-xl"
                style={{ transformOrigin: "right center" }}
              >
                {/* Right Handle */}
                <motion.div
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-8 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full border border-orange-600 shadow-lg"
                  whileHover={{ scale: 1.2 }}
                  animate={{ rotate: [0, -2, 2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                ></motion.div>

                {/* Fun Pattern */}
                <div className="absolute inset-2 opacity-30">
                  <div className="absolute top-4 right-4 text-orange-600 text-xl">
                    🌟
                  </div>
                  <div className="absolute bottom-4 left-4 text-yellow-600 text-lg">
                    ✨
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-orange-500 text-sm">
                    🍯
                  </div>
                </div>
              </motion.div>

              {/* Cabinet Center Icon */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-5xl opacity-80">🏺</div>
              </motion.div>

              {/* Cabinet Label When Closed */}
              <motion.div
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-orange-700 font-bold text-xs flex items-center space-x-1"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span>🥫</span>
                <span>SPICE BUNKER</span>
                <span>🥫</span>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Open Cabinet Interior */}
        <AnimatePresence>
          {state.cabinetOpen && (
            <motion.div
              key="open-cabinet"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-2 bg-gradient-to-b from-amber-25 to-white rounded-lg border border-amber-200"
            >
              {/* Interior Shelves */}
              <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-amber-200"></div>
              <div className="absolute top-2/3 left-0 right-0 h-0.5 bg-amber-200"></div>

              {/* Items */}
              <div className="p-2 h-full overflow-y-auto">
                <div className="grid grid-cols-2 gap-2">
                  {cabinetIngredients.map((ingredient, index) => (
                    <motion.div
                      key={ingredient.id}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col items-center p-2 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-amber-50 cursor-pointer border border-amber-100"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleIngredientClick(ingredient.id);
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="text-lg mb-1">{ingredient.emoji}</div>
                      <div className="text-xs font-medium text-gray-900 text-center leading-tight">
                        {ingredient.name.split(" ")[0]}
                      </div>
                      <div className="text-xs text-gray-500">
                        {ingredient.quantity} {ingredient.unit}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch({ type: "TOGGLE_CABINET" });
                }}
                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                <X size={12} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Cabinet Label - More Fun */}
      <motion.div
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <div className="text-lg font-bold text-orange-600 flex items-center space-x-2">
          <span>🥫</span>
          <span>Pantry of Wonders</span>
          <span>🥫</span>
        </div>
        <motion.div
          className="text-sm text-yellow-600 mt-1"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          🌶️ Click to unlock the flavor vault! 🌶️
        </motion.div>
      </motion.div>
    </div>
  );
}
