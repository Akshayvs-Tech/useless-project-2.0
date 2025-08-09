"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, Utensils, Trophy, Sparkles } from "lucide-react";

interface CompletedDish {
  id: number;
  name: string;
  emoji: string;
  completedAt: string;
  uselessness: string;
}

export default function CompletedDishesPage() {
  const [completedDishes, setCompletedDishes] = useState<CompletedDish[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Ensure we're on the client side before accessing localStorage
    if (typeof window !== "undefined") {
      const dishes = JSON.parse(
        localStorage.getItem("completedDishes") || "[]"
      );
      setCompletedDishes(dishes);
    }
  }, []);

  const formatTime = (isoString: string) => {
    return new Date(isoString).toLocaleTimeString();
  };

  const getTotalUselessness = () => {
    return completedDishes.length * 100; // Each dish adds 100% uselessness
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-8xl animate-float">🍽️</div>
        <div
          className="absolute top-40 right-20 text-6xl animate-float"
          style={{ animationDelay: "1s" }}
        >
          🎭
        </div>
        <div
          className="absolute bottom-20 left-20 text-7xl animate-float"
          style={{ animationDelay: "2s" }}
        >
          ✨
        </div>
        <div
          className="absolute bottom-40 right-20 text-5xl animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          🎪
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            �️ Bon Appétit! �️
          </motion.h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Your Virtual Kitchen Masterpieces
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Now try taking a bite... we dare you! 😂
          </p>
          <p className="text-lg text-gray-500">
            (Plot twist: These pixels taste surprisingly like... nothing!)
          </p>
        </motion.div>

        {/* Stats Panel */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200 text-center">
            <div className="text-4xl mb-2">🧑‍�</div>
            <div className="text-2xl font-bold text-purple-600">
              {completedDishes.length}
            </div>
            <div className="text-gray-600">Dishes Cooked</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-pink-200 text-center">
            <div className="text-4xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-pink-600">
              {getTotalUselessness()}%
            </div>
            <div className="text-gray-600">Chef Satisfaction</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-red-200 text-center">
            <div className="text-4xl mb-2">�️</div>
            <div className="text-2xl font-bold text-red-600">0</div>
            <div className="text-gray-600">Calories Consumed</div>
          </div>
        </motion.div>

        {/* Dishes Gallery */}
        {completedDishes.length > 0 ? (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8 flex items-center justify-center">
              <Trophy className="mr-2 text-yellow-500" />
              Your Digital Food Gallery
              <Trophy className="ml-2 text-yellow-500" />
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedDishes.map((dish, index) => (
                <motion.div
                  key={dish.id}
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    bounce: 0.4,
                  }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-gradient-to-r from-purple-200 to-pink-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-bounce">
                      {dish.emoji}
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {dish.name}
                    </h4>
                    <div className="text-sm text-gray-500 mb-3">
                      Completed at {formatTime(dish.completedAt)}
                    </div>
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-3 py-1 text-sm font-medium text-purple-700">
                      Edibility: Impossible
                    </div>
                    <div className="mt-4 flex justify-center">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-2xl"
                      >
                        ✨
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center py-16"
          >
            <div className="text-8xl mb-4">🤷‍♀️</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">
              Your kitchen is empty!
            </h3>
            <p className="text-gray-500">
              Time to get cooking! Head back and create some delicious digital
              disasters!
            </p>
          </motion.div>
        )}

        {/* Fun Messages */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center space-y-6"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Sparkles className="mr-2 text-yellow-500" />
              The Art of Digital Cooking
              <Sparkles className="ml-2 text-yellow-500" />
            </h3>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                👨‍� <strong>Congratulations, Master Chef!</strong> You've just
                cooked with zero ingredients, zero heat, and zero reality!
              </p>
              <p>
                � Your dishes exist only in the magical realm of pixels and
                imagination.
              </p>
              <p>
                🍽️ Feel free to serve them to your hungriest friends - they'll
                be perfectly not-satisfied!
              </p>
              <p className="text-xl font-semibold text-purple-600">
                🥇 Achievement Unlocked: Virtual Gordon Ramsay!
              </p>
            </div>
          </div>

          <div className="text-sm text-gray-400 space-y-1">
            <p>No vegetables were harmed in the making of these dishes</p>
            <p>No real cooking skills were required for this masterpiece</p>
            <p className="font-semibold">100% virtual, 100% satisfying ✨</p>
          </div>
        </motion.div>

        {/* Back to Kitchen Button */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <ArrowLeft size={20} />
            <span>Back to Kitchen</span>
            <Utensils size={20} />
          </button>
          <p className="text-gray-500 text-sm mt-3">
            Ready to create more culinary chaos?
          </p>
        </motion.div>
      </div>
    </div>
  );
}
