'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { KitchenProvider } from '@/lib/kitchen-context';
import { Fridge } from './Fridge';
import { Cabinet } from './Cabinet';
import { Stove } from './Stove';
import { RecipeBook } from './RecipeBook';
import { IngredientSelector } from './IngredientSelector';

export function Kitchen() {
  return (
    <KitchenProvider>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 via-blue-100 to-green-100 relative overflow-hidden">
        {/* Background Pattern - More Chaotic and Fun */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-6xl animate-bounce">🏠</div>
          <div className="absolute top-20 right-20 text-4xl animate-pulse">✨</div>
          <div className="absolute bottom-20 left-20 text-5xl animate-spin" style={{ animationDuration: '3s' }}>🌟</div>
          <div className="absolute bottom-10 right-10 text-4xl animate-ping">💫</div>
          <div className="absolute top-1/3 left-1/4 text-3xl animate-bounce" style={{ animationDelay: '0.5s' }}>🍔</div>
          <div className="absolute top-2/3 right-1/4 text-3xl animate-pulse" style={{ animationDelay: '1s' }}>🍕</div>
          <div className="absolute top-1/2 left-1/6 text-2xl animate-bounce" style={{ animationDelay: '1.5s' }}>🌮</div>
          <div className="absolute bottom-1/3 right-1/6 text-2xl animate-pulse" style={{ animationDelay: '2s' }}>🍰</div>
          <div className="absolute top-1/4 right-1/3 text-4xl animate-spin" style={{ animationDuration: '4s' }}>🎂</div>
          <div className="absolute bottom-1/4 left-1/3 text-3xl animate-bounce" style={{ animationDelay: '0.8s' }}>🧁</div>
        </div>

        {/* Header */}
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative z-10 text-center py-8"
        >
          <motion.h1
            className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-green-500 bg-clip-text text-transparent mb-2"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              scale: [1, 1.05, 1],
              rotate: [0, 1, -1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            🍳 SUPER DUPER MEGA KITCHEN 🍳
          </motion.h1>
          <motion.p 
            className="text-purple-700 text-xl font-semibold"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            The most hilariously useless but AMAZINGLY beautiful cooking experience! 🎉✨🤪
          </motion.p>
          <div className="mt-6 flex justify-center space-x-8 text-lg text-purple-600 font-medium">
            <motion.span 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <span>🥛</span><span>Super Fresh Ingredients</span>
            </motion.span>
            <motion.span 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.2, rotate: -10 }}
            >
              <span>📚</span><span>Magical Recipe Collection</span>
            </motion.span>
            <motion.span 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <span>🔥</span><span>Professional Useless Cooking</span>
            </motion.span>
          </div>
        </motion.header>

        {/* Kitchen Layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
          {/* Top Row - Storage */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center items-end space-x-12 mb-16"
          >
            <Fridge />
            <Cabinet />
          </motion.div>

          {/* Bottom Row - Cooking & Recipes */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center items-end space-x-12"
          >
            <RecipeBook />
            <Stove />
          </motion.div>

          {/* Instructions */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-purple-800 mb-6 flex items-center justify-center space-x-3">
              <span className="animate-bounce">🎮</span>
              <span>How to Master This Hilariously Useless Kitchen</span>
              <span className="animate-bounce">🎮</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
              <motion.div 
                className="bg-gradient-to-br from-pink-100 to-purple-100 backdrop-blur-sm rounded-2xl p-6 border-4 border-pink-300 shadow-xl transform hover:scale-105 transition-transform"
                whileHover={{ rotate: 2 }}
              >
                <div className="text-4xl mb-3 animate-pulse">1️⃣🧊</div>
                <h3 className="font-bold text-purple-700 mb-3 text-xl">Raid the Magical Storage!</h3>
                <p className="text-purple-600">Click on the fridge and cabinet like you're opening treasure chests! Grab ingredients with the enthusiasm of a squirrel collecting nuts! 🐿️✨</p>
              </motion.div>
              <motion.div 
                className="bg-gradient-to-br from-blue-100 to-green-100 backdrop-blur-sm rounded-2xl p-6 border-4 border-blue-300 shadow-xl transform hover:scale-105 transition-transform"
                whileHover={{ rotate: -2 }}
              >
                <div className="text-4xl mb-3 animate-spin">2️⃣📖</div>
                <h3 className="font-bold text-blue-700 mb-3 text-xl">Consult the Ancient Recipe Scrolls!</h3>
                <p className="text-blue-600">Open the mystical recipe book and choose your culinary destiny! Remember: you can only cook what the kitchen gods have blessed you with! 🧙‍♂️📜</p>
              </motion.div>
              <motion.div 
                className="bg-gradient-to-br from-orange-100 to-red-100 backdrop-blur-sm rounded-2xl p-6 border-4 border-orange-300 shadow-xl transform hover:scale-105 transition-transform"
                whileHover={{ rotate: 2 }}
              >
                <div className="text-4xl mb-3 animate-bounce">3️⃣🔥</div>
                <h3 className="font-bold text-red-700 mb-3 text-xl">Ignite the Flames of Uselessness!</h3>
                <p className="text-red-600">Watch in awe as your virtual stove comes alive with digital flames! Marvel at the completely unnecessary but absolutely beautiful timer! 🔥⏰</p>
              </motion.div>
              <motion.div 
                className="bg-gradient-to-br from-yellow-100 to-green-100 backdrop-blur-sm rounded-2xl p-6 border-4 border-yellow-300 shadow-xl transform hover:scale-105 transition-transform"
                whileHover={{ rotate: -2 }}
              >
                <div className="text-4xl mb-3 animate-pulse">4️⃣🎉</div>
                <h3 className="font-bold text-green-700 mb-3 text-xl">Celebrate Maximum Uselessness!</h3>
                <p className="text-green-600">Congratulations! You've created something completely useless but undeniably magnificent! Time to do the happy dance! 💃�🎊</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Floating Ingredient Selector */}
        <IngredientSelector />

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="relative z-10 text-center py-8 mt-8"
        >
          <motion.div 
            className="text-purple-600 text-lg font-semibold flex items-center justify-center space-x-2"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span>Made with</span>
            <motion.span 
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ❤️
            </motion.span>
            <span>and</span>
            <motion.span 
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🤪
            </motion.span>
            <span>for the love of hilariously useless but gorgeous things!</span>
          </motion.div>
          <div className="text-purple-400 text-sm mt-3 flex items-center justify-center space-x-2">
            <span>⚠️ Warning: No real food was harmed in the making of this virtual kitchen ⚠️</span>
          </div>
          <div className="text-purple-300 text-xs mt-2 flex items-center justify-center space-x-2">
            <span>🎉 Side effects may include: Extreme joy, uncontrollable laughter, and sudden urge to cook for real! 🎉</span>
          </div>
        </motion.footer>
      </div>
    </KitchenProvider>
  );
}
