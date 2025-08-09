"use client";
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useKitchen } from "@/lib/kitchen-context";
import { RECIPES } from "@/lib/data";
import { Recipe } from "@/types/kitchen";
import { X, Clock, ChefHat, AlertCircle } from "lucide-react";

export function RecipeBook() {
  const { state, dispatch } = useKitchen();

  const canCookRecipe = (recipe: Recipe) => {
    return recipe.ingredients.every((required) => {
      const availableIngredient = state.inventory.find(
        (inv) => inv.id === required.ingredientId
      );
      return (
        availableIngredient && availableIngredient.quantity >= required.quantity
      );
    });
  };

  const handleCookRecipe = (recipe: Recipe) => {
    if (!state.stoveOccupied && canCookRecipe(recipe)) {
      dispatch({ type: "START_COOKING", recipe });
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "text-green-600 bg-green-100";
      case "medium":
        return "text-orange-600 bg-orange-100";
      case "hard":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="relative">
      {/* Recipe Book */}
      <motion.div
        className="relative w-64 h-80 bg-gradient-to-b from-purple-800 via-indigo-700 to-blue-900 rounded-2xl shadow-2xl border-4 border-purple-500 cursor-pointer overflow-hidden"
        whileHover={{ scale: 1.05, rotate: 1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => dispatch({ type: "TOGGLE_RECIPE_BOOK" })}
        animate={{
          boxShadow: [
            "0 25px 50px -12px rgba(147, 51, 234, 0.3)",
            "0 25px 50px -12px rgba(79, 70, 229, 0.5)",
            "0 25px 50px -12px rgba(147, 51, 234, 0.3)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {/* Book Cover (when closed) */}
        <AnimatePresence>
          {!state.recipeBookOpen && (
            <motion.div
              key="book-cover"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-gradient-to-b from-purple-800 via-indigo-700 to-blue-900 rounded-2xl"
              style={{ transformOrigin: "left center" }}
            >
              {/* Magical sparkles */}
              <div className="absolute inset-0">
                <motion.div
                  className="absolute top-4 right-4 text-yellow-300 text-lg"
                  animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  ✨
                </motion.div>
                <motion.div
                  className="absolute bottom-6 left-6 text-pink-300 text-sm"
                  animate={{ y: [0, -5, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  💫
                </motion.div>
                <motion.div
                  className="absolute top-1/3 left-4 text-cyan-300 text-base"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  🌟
                </motion.div>
              </div>

              {/* Book Title */}
              <div className="absolute top-8 left-4 right-4 text-center">
                <motion.div
                  className="text-3xl font-bold text-yellow-300 mb-3"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  📚✨
                </motion.div>
                <motion.div
                  className="text-xl font-bold text-purple-100 leading-tight mb-2"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  GRANDMA'S
                  <br />
                  SECRET
                  <br />
                  RECIPES
                </motion.div>
                <motion.div
                  className="text-sm text-indigo-200 font-semibold"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨ DISASTER-PROOF EDITION ✨
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-4 right-4 flex justify-center">
                <motion.div
                  className="text-7xl opacity-40"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  👨‍🍳
                </motion.div>
              </div>

              {/* Book Spine Details */}
              <div className="absolute bottom-8 left-4 right-4 text-center">
                <motion.div
                  className="text-xs text-purple-200 font-medium"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  � KITCHEN CHAOS APPROVED 🍳
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Open Book Interior */}
        <AnimatePresence>
          {state.recipeBookOpen && (
            <motion.div
              key="book-pages"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-2 bg-gradient-to-b from-amber-50 to-cream rounded-xl border border-amber-200 overflow-hidden"
            >
              {/* Page Header */}
              <div className="bg-amber-100 p-3 border-b border-amber-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-amber-800">
                    Chef's Recipe Collection
                  </h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch({ type: "TOGGLE_RECIPE_BOOK" });
                    }}
                    className="p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>

              {/* Recipes List */}
              <div className="p-2 h-full overflow-y-auto">
                <div className="space-y-3">
                  {RECIPES.map((recipe, index) => {
                    const canCook = canCookRecipe(recipe);
                    const isStoveOccupied = state.stoveOccupied;

                    return (
                      <motion.div
                        key={recipe.id}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-3 rounded-lg border transition-all cursor-pointer ${
                          canCook && !isStoveOccupied
                            ? "bg-white border-amber-200 hover:border-amber-300 hover:shadow-md"
                            : "bg-gray-50 border-gray-200 opacity-60"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (canCook && !isStoveOccupied) {
                            handleCookRecipe(recipe);
                          }
                        }}
                        whileHover={
                          canCook && !isStoveOccupied ? { scale: 1.02 } : {}
                        }
                        whileTap={
                          canCook && !isStoveOccupied ? { scale: 0.98 } : {}
                        }
                      >
                        <div className="flex items-start space-x-3">
                          <div className="text-2xl">{recipe.emoji}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-medium text-gray-900 text-sm truncate">
                                {recipe.name}
                              </h4>
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                                  recipe.difficulty
                                )}`}
                              >
                                {recipe.difficulty}
                              </span>
                            </div>

                            <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                              {recipe.description}
                            </p>

                            <div className="flex items-center justify-between text-xs">
                              <div className="flex items-center space-x-3">
                                <span className="flex items-center text-gray-500">
                                  <Clock size={12} className="mr-1" />
                                  {recipe.cookingTime}s
                                </span>
                                <span className="flex items-center text-gray-500">
                                  <ChefHat size={12} className="mr-1" />
                                  {recipe.ingredients.length} items
                                </span>
                              </div>

                              {!canCook && (
                                <span className="flex items-center text-red-500">
                                  <AlertCircle size={12} className="mr-1" />
                                  Missing items
                                </span>
                              )}

                              {isStoveOccupied && canCook && (
                                <span className="text-orange-500 text-xs">
                                  Stove busy
                                </span>
                              )}
                            </div>

                            {/* Required Ingredients Preview */}
                            <div className="mt-2 flex flex-wrap gap-1">
                              {recipe.ingredients
                                .slice(0, 4)
                                .map((ingredient) => {
                                  const item = state.inventory.find(
                                    (inv) => inv.id === ingredient.ingredientId
                                  );
                                  const hasEnough =
                                    item &&
                                    item.quantity >= ingredient.quantity;

                                  return (
                                    <span
                                      key={ingredient.ingredientId}
                                      className={`px-1 py-0.5 rounded text-xs ${
                                        hasEnough
                                          ? "bg-green-100 text-green-700"
                                          : "bg-red-100 text-red-700"
                                      }`}
                                    >
                                      {item?.emoji} {ingredient.quantity}
                                    </span>
                                  );
                                })}
                              {recipe.ingredients.length > 4 && (
                                <span className="text-xs text-gray-400">
                                  +{recipe.ingredients.length - 4} more
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Recipe Book Label - More Fun */}
      <motion.div
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2.7, repeat: Infinity }}
      >
        <div className="text-lg font-bold text-purple-600 flex items-center space-x-2">
          <span>�</span>
          <span>Chef's Secret Recipe Book</span>
          <span>�</span>
        </div>
        <motion.div
          className="text-sm text-indigo-600 mt-1"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ✨ Click to unlock culinary disasters! ✨
        </motion.div>
      </motion.div>
    </div>
  );
}
