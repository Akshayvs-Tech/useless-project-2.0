"use client";

import React from "react";
import { motion } from "framer-motion";
import { KitchenProvider } from "@/lib/kitchen-context";
import { Fridge } from "./Fridge";
import { Cabinet } from "./Cabinet";
import { Stove } from "./Stove";
import { RecipeBook } from "./RecipeBook";
import { IngredientSelector } from "./IngredientSelector";

export function Kitchen() {
  return (
    <KitchenProvider>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 via-blue-100 to-green-100 relative overflow-hidden">
        {/* Background Pattern - ULTRA Chaotic and Hilariously Fun Food Wonderland */}
        <div className="absolute inset-0 opacity-25">
          {/* Main Kitchen Elements */}
          <div className="absolute top-10 left-10 text-6xl animate-bounce">
            🏠
          </div>
          <div className="absolute top-20 right-20 text-4xl animate-pulse">
            ✨
          </div>
          <div
            className="absolute bottom-20 left-20 text-5xl animate-spin"
            style={{ animationDuration: "3s" }}
          >
            🌟
          </div>
          <div className="absolute bottom-10 right-10 text-4xl animate-ping">
            💫
          </div>

          {/* Food Army - Level 1: The Classics */}
          <div
            className="absolute top-1/3 left-1/4 text-3xl animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            🍔
          </div>
          <div
            className="absolute top-2/3 right-1/4 text-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            🍕
          </div>
          <div
            className="absolute top-1/2 left-1/6 text-2xl animate-bounce"
            style={{ animationDelay: "1.5s" }}
          >
            🌮
          </div>
          <div
            className="absolute bottom-1/3 right-1/6 text-2xl animate-pulse"
            style={{ animationDelay: "2s" }}
          >
            🍰
          </div>
          <div
            className="absolute top-1/4 right-1/3 text-4xl animate-spin"
            style={{ animationDuration: "4s" }}
          >
            🎂
          </div>
          <div
            className="absolute bottom-1/4 left-1/3 text-3xl animate-bounce"
            style={{ animationDelay: "0.8s" }}
          >
            🧁
          </div>

          {/* Food Army - Level 2: The Absurd Additions */}
          <div
            className="absolute top-12 left-1/2 text-2xl animate-spin"
            style={{ animationDuration: "2s", animationDelay: "0.3s" }}
          >
            🍌
          </div>
          <div
            className="absolute top-1/6 right-1/5 text-3xl animate-bounce"
            style={{ animationDelay: "1.2s" }}
          >
            🍉
          </div>
          <div
            className="absolute top-3/4 left-1/5 text-2xl animate-pulse"
            style={{ animationDelay: "2.5s" }}
          >
            🥑
          </div>
          <div
            className="absolute bottom-1/6 right-2/5 text-2xl animate-spin"
            style={{ animationDuration: "5s" }}
          >
            🍍
          </div>
          <div
            className="absolute top-2/5 left-3/4 text-2xl animate-bounce"
            style={{ animationDelay: "0.7s" }}
          >
            🍓
          </div>

          {/* Food Army - Level 3: The International Brigade */}
          <div
            className="absolute top-1/8 left-2/3 text-2xl animate-pulse"
            style={{ animationDelay: "3s" }}
          >
            🍜
          </div>
          <div
            className="absolute bottom-1/8 right-1/8 text-2xl animate-bounce"
            style={{ animationDelay: "1.8s" }}
          >
            🍣
          </div>
          <div
            className="absolute top-5/6 left-1/8 text-2xl animate-spin"
            style={{ animationDuration: "6s" }}
          >
            🥟
          </div>
          <div
            className="absolute top-1/5 right-1/2 text-2xl animate-pulse"
            style={{ animationDelay: "2.2s" }}
          >
            🌯
          </div>
          <div
            className="absolute bottom-2/5 left-2/5 text-2xl animate-bounce"
            style={{ animationDelay: "1.3s" }}
          >
            🥪
          </div>

          {/* Food Army - Level 4: The Sweet Chaos */}
          <div
            className="absolute top-3/5 right-1/7 text-2xl animate-spin"
            style={{ animationDuration: "4s", animationDelay: "0.9s" }}
          >
            🍦
          </div>
          <div
            className="absolute bottom-3/5 left-1/7 text-2xl animate-pulse"
            style={{ animationDelay: "2.8s" }}
          >
            🍩
          </div>
          <div
            className="absolute top-1/7 left-4/5 text-2xl animate-bounce"
            style={{ animationDelay: "1.6s" }}
          >
            🍪
          </div>
          <div
            className="absolute bottom-1/7 right-3/5 text-2xl animate-spin"
            style={{ animationDuration: "3s" }}
          >
            🧇
          </div>
          <div
            className="absolute top-4/5 right-1/10 text-2xl animate-pulse"
            style={{ animationDelay: "3.5s" }}
          >
            🥧
          </div>

          {/* Food Army - Level 5: The Breakfast Battalion */}
          <div
            className="absolute top-1/10 right-4/5 text-2xl animate-bounce"
            style={{ animationDelay: "2.1s" }}
          >
            🥐
          </div>
          <div
            className="absolute bottom-1/10 left-3/5 text-2xl animate-spin"
            style={{ animationDuration: "7s" }}
          >
            🥞
          </div>
          <div
            className="absolute top-2/3 left-1/10 text-2xl animate-pulse"
            style={{ animationDelay: "1.4s" }}
          >
            🧈
          </div>
          <div
            className="absolute bottom-2/3 right-1/9 text-2xl animate-bounce"
            style={{ animationDelay: "3.2s" }}
          >
            🥓
          </div>

          {/* Food Army - Level 6: The Chaotic Extras */}
          <div
            className="absolute top-1/3 right-1/8 text-1xl animate-spin"
            style={{ animationDuration: "8s", animationDelay: "4s" }}
          >
            🍄
          </div>
          <div
            className="absolute bottom-1/3 left-4/5 text-1xl animate-pulse"
            style={{ animationDelay: "2.9s" }}
          >
            🌶️
          </div>
          <div
            className="absolute top-4/5 left-1/2 text-1xl animate-bounce"
            style={{ animationDelay: "1.1s" }}
          >
            🥕
          </div>
          <div
            className="absolute bottom-4/5 right-1/2 text-1xl animate-spin"
            style={{ animationDuration: "9s" }}
          >
            🌽
          </div>
          <div
            className="absolute top-1/2 right-4/5 text-1xl animate-pulse"
            style={{ animationDelay: "3.8s" }}
          >
            🥒
          </div>

          {/* Food Army - Level 7: The Protein Party */}
          <div
            className="absolute top-7/8 left-2/3 text-2xl animate-bounce"
            style={{ animationDelay: "4.2s" }}
          >
            🍖
          </div>
          <div
            className="absolute bottom-7/8 right-2/3 text-2xl animate-spin"
            style={{ animationDuration: "10s" }}
          >
            🍗
          </div>
          <div
            className="absolute top-1/12 left-1/3 text-2xl animate-pulse"
            style={{ animationDelay: "3.6s" }}
          >
            🥩
          </div>
          <div
            className="absolute bottom-1/12 right-1/3 text-2xl animate-bounce"
            style={{ animationDelay: "2.4s" }}
          >
            🐟
          </div>

          {/* Floating Chef Emojis for Extra Chaos */}
          <div
            className="absolute top-1/2 left-1/2 text-3xl animate-spin"
            style={{ animationDuration: "15s", animationDelay: "5s" }}
          >
            👨‍🍳
          </div>
          <div
            className="absolute top-1/4 left-3/4 text-2xl animate-bounce"
            style={{ animationDelay: "6s" }}
          >
            👩‍🍳
          </div>
          <div
            className="absolute bottom-1/4 right-3/4 text-2xl animate-pulse"
            style={{ animationDelay: "4.5s" }}
          >
            🍽️
          </div>

          {/* Random Kitchen Utensils Flying Around */}
          <div
            className="absolute top-5/8 left-1/12 text-1xl animate-spin"
            style={{ animationDuration: "12s", animationDelay: "7s" }}
          >
            🍴
          </div>
          <div
            className="absolute bottom-5/8 right-1/12 text-1xl animate-bounce"
            style={{ animationDelay: "5.5s" }}
          >
            🥄
          </div>
          <div
            className="absolute top-3/8 right-5/6 text-1xl animate-pulse"
            style={{ animationDelay: "8s" }}
          >
            🔪
          </div>
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
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              scale: [1, 1.05, 1],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🍳 CHEF CATASTROPHE'S CHAOS KITCHEN 🍳
          </motion.h1>
          <motion.p
            className="text-purple-700 text-xl font-semibold"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Where Gordon Ramsay would cry... but also secretly laugh! 😭😂🔥
          </motion.p>
          <motion.p
            className="text-pink-600 text-lg font-medium mt-2"
            animate={{
              scale: [1, 1.05, 1],
              color: ["#db2777", "#ec4899", "#f97316", "#db2777"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ⚠️ Warning: No actual food will be produced, but satisfaction
            guaranteed! 🍽️✨
          </motion.p>
          <div className="mt-6 flex justify-center space-x-8 text-lg text-purple-600 font-medium">
            <motion.span
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <span>�</span>
              <span>Ice Cold Ingredients</span>
            </motion.span>
            <motion.span
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.2, rotate: -10 }}
            >
              <span>�</span>
              <span>Recipes from Grandma's Dreams</span>
            </motion.span>
            <motion.span
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <span>🔥</span>
              <span>Gourmet Disaster Making</span>
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
              <span className="animate-bounce">👨‍�</span>
              <span>How to Become a Virtual Kitchen Disaster Master</span>
              <span className="animate-bounce">👩‍�</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
              <motion.div
                className="bg-gradient-to-br from-pink-100 to-purple-100 backdrop-blur-sm rounded-2xl p-6 border-4 border-pink-300 shadow-xl transform hover:scale-105 transition-transform"
                whileHover={{ rotate: 2 }}
              >
                <div className="text-4xl mb-3 animate-pulse">1️⃣�</div>
                <h3 className="font-bold text-purple-700 mb-3 text-xl">
                  Raid the Food Fortress!
                </h3>
                <p className="text-purple-600">
                  Open the fridge like you're Indiana Jones searching for
                  treasure! Grab ingredients faster than a contestant on a
                  cooking show! 🏃‍♂️💨
                </p>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-blue-100 to-green-100 backdrop-blur-sm rounded-2xl p-6 border-4 border-blue-300 shadow-xl transform hover:scale-105 transition-transform"
                whileHover={{ rotate: -2 }}
              >
                <div className="text-4xl mb-3 animate-spin">2️⃣�</div>
                <h3 className="font-bold text-blue-700 mb-3 text-xl">
                  Decode the Secret Recipe Scrolls!
                </h3>
                <p className="text-blue-600">
                  Consult the ancient cookbook! Pro tip: You can't cook pasta if
                  you only have marshmallows! �‍♂️🍝
                </p>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-orange-100 to-red-100 backdrop-blur-sm rounded-2xl p-6 border-4 border-orange-300 shadow-xl transform hover:scale-105 transition-transform"
                whileHover={{ rotate: 2 }}
              >
                <div className="text-4xl mb-3 animate-bounce">3️⃣🔥</div>
                <h3 className="font-bold text-red-700 mb-3 text-xl">
                  Fire Up the Dragon Stove!
                </h3>
                <p className="text-red-600">
                  Watch your virtual stove light up like a Christmas tree! Don't
                  worry, no smoke alarms will go off... hopefully! 🚨🔥
                </p>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-yellow-100 to-green-100 backdrop-blur-sm rounded-2xl p-6 border-4 border-yellow-300 shadow-xl transform hover:scale-105 transition-transform"
                whileHover={{ rotate: -2 }}
              >
                <div className="text-4xl mb-3 animate-pulse">4️⃣🎉</div>
                <h3 className="font-bold text-green-700 mb-3 text-xl">
                  Celebrate Your Culinary Disaster!
                </h3>
                <p className="text-green-600">
                  Congrats! You've cooked virtually with zero calories and zero
                  cleanup! Time for the victory dance! 💃🕺�
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Floating Ingredient Selector */}
        <IngredientSelector />

        {/* Super Funny Floating Random Food Items */}
        <motion.div
          className="fixed top-20 left-10 text-4xl pointer-events-none z-50"
          animate={{
            x: [0, 100, 0, -50, 0],
            y: [0, -50, 100, 50, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 0.8, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🥨
        </motion.div>

        <motion.div
          className="fixed bottom-20 right-10 text-3xl pointer-events-none z-50"
          animate={{
            x: [0, -120, 50, 0],
            y: [0, 80, -60, 0],
            rotate: [0, -180, 180, 0],
            scale: [1, 0.7, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          🍭
        </motion.div>

        <motion.div
          className="fixed top-1/2 right-20 text-2xl pointer-events-none z-50"
          animate={{
            x: [0, -80, 80, 0],
            y: [0, -100, 100, 0],
            rotate: [0, 360, -360, 0],
            scale: [1, 1.5, 0.5, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          🥡
        </motion.div>

        <motion.div
          className="fixed top-1/3 left-1/4 text-3xl pointer-events-none z-50"
          animate={{
            x: [0, 150, -100, 0],
            y: [0, 120, -80, 0],
            rotate: [0, 720, 0],
            scale: [1, 0.8, 1.4, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        >
          🧀
        </motion.div>

        <motion.div
          className="fixed bottom-1/3 left-1/3 text-2xl pointer-events-none z-50"
          animate={{
            x: [0, -90, 90, -45, 0],
            y: [0, 90, -90, 45, 0],
            rotate: [0, -270, 270, 0],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
          }}
        >
          🍿
        </motion.div>

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
            <span>Cooked with</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ❤️
            </motion.span>
            <span>and zero actual cooking skills!</span>
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              👨‍🍳
            </motion.span>
          </motion.div>
          <div className="text-purple-400 text-sm mt-3 flex items-center justify-center space-x-2">
            <span>
              ⚠️ Warning: No real ingredients were wasted in this virtual
              kitchen ⚠️
            </span>
          </div>
          <div className="text-purple-300 text-xs mt-2 flex items-center justify-center space-x-2">
            <span>
              � Side effects may include: Actual hunger and desire to cook for
              real! �
            </span>
          </div>
          <motion.div
            className="text-pink-400 text-xs mt-2 flex items-center justify-center space-x-1"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <span>�</span>
            <span>
              Certified by the International Association of Pretend Chefs
            </span>
            <span>🥇</span>
          </motion.div>
          <motion.div
            className="text-orange-400 text-xs mt-1 flex items-center justify-center space-x-1"
            animate={{
              color: ["#fb923c", "#f97316", "#ea580c", "#fb923c"],
              rotate: [0, 1, -1, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span>�</span>
            <span>
              Disclaimer: This kitchen is 90% fun, 10% confusion, and 100%
              calorie-free
            </span>
            <span>�</span>
          </motion.div>
        </motion.footer>
      </div>
    </KitchenProvider>
  );
}
