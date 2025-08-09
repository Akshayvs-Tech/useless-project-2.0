'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useKitchen } from '@/lib/kitchen-context';
import { useRouter } from 'next/navigation';
import { Flame, CheckCircle } from 'lucide-react';

export function Stove() {
  const { state, dispatch } = useKitchen();
  const router = useRouter();
  const [cookingProgress, setCookingProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (state.currentCooking) {
      const startTime = state.currentCooking.startTime;
      const duration = state.currentCooking.duration;
      
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min((elapsed / duration) * 100, 100);
        setCookingProgress(progress);
        
        if (progress >= 100) {
          setIsFinished(true);
          clearInterval(interval);
          
          // Save completed dish to localStorage
          if (typeof window !== 'undefined') {
            const completedDishes = JSON.parse(localStorage.getItem('completedDishes') || '[]');
            const newDish = {
              id: Date.now(),
              name: state.currentCooking!.recipeName,
              emoji: state.currentCooking!.emoji,
              completedAt: new Date().toISOString(),
              uselessness: 'Maximum'
            };
            completedDishes.push(newDish);
            localStorage.setItem('completedDishes', JSON.stringify(completedDishes));
          }
          
          setTimeout(() => {
            dispatch({ type: 'FINISH_COOKING' });
            setIsFinished(false);
            setCookingProgress(0);
            // Redirect to completed dishes page
            router.push('/completed-dishes');
          }, 2000);
        }
      }, 100);

      return () => clearInterval(interval);
    } else {
      setCookingProgress(0);
      setIsFinished(false);
    }
  }, [state.currentCooking, dispatch, router]);

  return (
    <div className="relative">
      {/* Stove */}
      <motion.div
        className="relative w-80 h-64 bg-gradient-to-b from-red-400 via-orange-300 to-yellow-400 rounded-2xl shadow-2xl border-4 border-red-500"
        whileHover={{ scale: 1.02, rotate: 1 }}
        animate={{
          boxShadow: [
            '0 25px 50px -12px rgba(239, 68, 68, 0.3)',
            '0 25px 50px -12px rgba(251, 146, 60, 0.5)',
            '0 25px 50px -12px rgba(239, 68, 68, 0.3)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* Stove Top */}
        <div className="absolute top-4 left-4 right-4 h-48 bg-gradient-to-b from-gray-900 via-black to-gray-800 rounded-xl border-4 border-orange-400 shadow-inner">
          
          {/* Burner (Main Cooking Area) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Burner Ring - More Colorful */}
            <motion.div 
              className="relative w-32 h-32 rounded-full border-4 border-orange-500 bg-gradient-radial from-yellow-600 to-red-800"
              animate={{
                borderColor: ['#f97316', '#ef4444', '#eab308', '#f97316']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {/* Inner Burner Rings */}
              <div className="absolute top-2 left-2 right-2 bottom-2 rounded-full border-3 border-yellow-400"></div>
              <div className="absolute top-4 left-4 right-4 bottom-4 rounded-full border-2 border-orange-300"></div>
              
              {/* Flames when cooking */}
              <AnimatePresence>
                {state.stoveOccupied && !isFinished && (
                  <motion.div
                    key="flames"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-orange-500"
                        style={{
                          transform: `rotate(${i * 45}deg) translateY(-20px)`,
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      >
                        <Flame size={16} />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Cooking Item */}
              <AnimatePresence>
                {state.currentCooking && (
                  <motion.div
                    key="cooking-item"
                    initial={{ scale: 0, y: -20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0, y: -20 }}
                    className="absolute -top-16 left-1/2 transform -translate-x-1/2"
                  >
                    <div className="relative">
                      {/* Pan */}
                      <div className="w-24 h-4 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full border-2 border-gray-500"></div>
                      
                      {/* Food Item */}
                      <motion.div
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-4xl"
                        animate={isFinished ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : {}}
                        transition={{ duration: 0.5, repeat: isFinished ? 3 : 0 }}
                      >
                        {state.currentCooking.emoji}
                      </motion.div>

                      {/* Steam Effect */}
                      {!isFinished && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute text-gray-300 opacity-60"
                              style={{ left: `${i * 8 - 8}px` }}
                              animate={{
                                y: [-10, -30],
                                opacity: [0.6, 0],
                                scale: [0.5, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.5,
                              }}
                            >
                              💨
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {/* Finished Checkmark */}
                      <AnimatePresence>
                        {isFinished && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-green-500"
                          >
                            <CheckCircle size={32} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Control Knobs */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-b from-gray-600 to-gray-800 border-2 border-gray-500 relative"
              >
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-white rounded-full"></div>
              </div>
            ))}
          </div>

          {/* Digital Display */}
          <div className="absolute top-4 right-4 w-16 h-8 bg-black rounded border border-gray-500 flex items-center justify-center">
            <div className="text-green-400 text-sm font-mono">
              {state.stoveOccupied ? (
                isFinished ? 'DONE' : `${Math.ceil((100 - cookingProgress) / 100 * (state.currentCooking?.duration || 0) / 1000)}s`
              ) : 'OFF'}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <AnimatePresence>
          {state.stoveOccupied && !isFinished && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${cookingProgress}%` }}
              className="absolute bottom-2 left-4 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
            >
              <div className="absolute inset-0 bg-white opacity-30 rounded-full animate-pulse"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Brand Label - More Fun */}
        <motion.div 
          className="absolute top-2 left-4 text-yellow-300 text-sm font-bold flex items-center space-x-1"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>🔥</span>
          <span>MEGA CHEF 9000</span>
          <span>🔥</span>
        </motion.div>
      </motion.div>

      {/* Stove Label - More Fun */}
      <motion.div 
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="text-lg font-bold text-red-600 flex items-center space-x-2">
          <span>🔥</span>
          <span>Ultimate Cooking Machine</span>
          <span>🔥</span>
        </div>
        <motion.div 
          className="text-sm text-orange-600 mt-1"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {state.stoveOccupied ? 
            (isFinished ? '🎉 MASTERPIECE READY! 🎉' : `🔥 Creating ${state.currentCooking?.recipeName} Magic! 🔥`) : 
            '✨ Ready for culinary adventures! ✨'
          }
        </motion.div>
      </motion.div>
    </div>
  );
}
