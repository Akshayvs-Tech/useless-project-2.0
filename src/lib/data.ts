import { Ingredient, Recipe } from '@/types/kitchen';

export const INITIAL_INGREDIENTS: Ingredient[] = [
  // Fridge items
  {
    id: 'milk',
    name: 'Fresh Milk',
    quantity: 1000,
    unit: 'ml',
    location: 'fridge',
    emoji: '🥛',
    color: '#FFFFFF'
  },
  {
    id: 'eggs',
    name: 'Fresh Eggs',
    quantity: 12,
    unit: 'pieces',
    location: 'fridge',
    emoji: '🥚',
    color: '#FFF8DC'
  },
  {
    id: 'cheese',
    name: 'Cheddar Cheese',
    quantity: 200,
    unit: 'g',
    location: 'fridge',
    emoji: '🧀',
    color: '#FFD700'
  },
  {
    id: 'butter',
    name: 'Butter',
    quantity: 250,
    unit: 'g',
    location: 'fridge',
    emoji: '🧈',
    color: '#FFFFE0'
  },
  {
    id: 'tomatoes',
    name: 'Fresh Tomatoes',
    quantity: 5,
    unit: 'pieces',
    location: 'fridge',
    emoji: '🍅',
    color: '#FF6347'
  },
  {
    id: 'lettuce',
    name: 'Fresh Lettuce',
    quantity: 1,
    unit: 'head',
    location: 'fridge',
    emoji: '🥬',
    color: '#90EE90'
  },
  {
    id: 'orange-juice',
    name: 'Orange Juice',
    quantity: 500,
    unit: 'ml',
    location: 'fridge',
    emoji: '🍊',
    color: '#FFA500'
  },
  
  // Cabinet items
  {
    id: 'sugar',
    name: 'White Sugar',
    quantity: 500,
    unit: 'g',
    location: 'cabinet',
    emoji: '🍬',
    color: '#FFFFFF'
  },
  {
    id: 'salt',
    name: 'Table Salt',
    quantity: 300,
    unit: 'g',
    location: 'cabinet',
    emoji: '🧂',
    color: '#F8F8FF'
  },
  {
    id: 'flour',
    name: 'All-Purpose Flour',
    quantity: 1000,
    unit: 'g',
    location: 'cabinet',
    emoji: '🌾',
    color: '#F5F5DC'
  },
  {
    id: 'tea-leaves',
    name: 'Black Tea',
    quantity: 50,
    unit: 'g',
    location: 'cabinet',
    emoji: '🍃',
    color: '#8B4513'
  },
  {
    id: 'coffee',
    name: 'Ground Coffee',
    quantity: 200,
    unit: 'g',
    location: 'cabinet',
    emoji: '☕',
    color: '#A0522D'
  },
  {
    id: 'pasta',
    name: 'Spaghetti',
    quantity: 400,
    unit: 'g',
    location: 'cabinet',
    emoji: '🍝',
    color: '#F5DEB3'
  },
  {
    id: 'rice',
    name: 'Basmati Rice',
    quantity: 500,
    unit: 'g',
    location: 'cabinet',
    emoji: '🍚',
    color: '#FFFAF0'
  },
  {
    id: 'olive-oil',
    name: 'Olive Oil',
    quantity: 250,
    unit: 'ml',
    location: 'cabinet',
    emoji: '🫒',
    color: '#808000'
  }
];

export const RECIPES: Recipe[] = [
  {
    id: 'tea',
    name: 'Classic Tea',
    description: 'A perfectly brewed cup of tea with milk and sugar',
    ingredients: [
      { ingredientId: 'tea-leaves', quantity: 5 },
      { ingredientId: 'milk', quantity: 50 },
      { ingredientId: 'sugar', quantity: 10 }
    ],
    cookingTime: 5,
    emoji: '🍵',
    difficulty: 'easy'
  },
  {
    id: 'coffee',
    name: 'Morning Coffee',
    description: 'Rich and aromatic coffee to start your day',
    ingredients: [
      { ingredientId: 'coffee', quantity: 15 },
      { ingredientId: 'milk', quantity: 30 },
      { ingredientId: 'sugar', quantity: 5 }
    ],
    cookingTime: 4,
    emoji: '☕',
    difficulty: 'easy'
  },
  {
    id: 'scrambled-eggs',
    name: 'Scrambled Eggs',
    description: 'Fluffy and creamy scrambled eggs',
    ingredients: [
      { ingredientId: 'eggs', quantity: 2 },
      { ingredientId: 'butter', quantity: 10 },
      { ingredientId: 'salt', quantity: 2 }
    ],
    cookingTime: 8,
    emoji: '🍳',
    difficulty: 'easy'
  },
  {
    id: 'cheese-omelet',
    name: 'Cheese Omelet',
    description: 'Golden omelet filled with melted cheese',
    ingredients: [
      { ingredientId: 'eggs', quantity: 3 },
      { ingredientId: 'cheese', quantity: 50 },
      { ingredientId: 'butter', quantity: 15 },
      { ingredientId: 'salt', quantity: 2 }
    ],
    cookingTime: 12,
    emoji: '🧀',
    difficulty: 'medium'
  },
  {
    id: 'pasta',
    name: 'Simple Pasta',
    description: 'Al dente pasta with olive oil and cheese',
    ingredients: [
      { ingredientId: 'pasta', quantity: 100 },
      { ingredientId: 'olive-oil', quantity: 20 },
      { ingredientId: 'cheese', quantity: 30 },
      { ingredientId: 'salt', quantity: 3 }
    ],
    cookingTime: 15,
    emoji: '🍝',
    difficulty: 'medium'
  },
  {
    id: 'fried-rice',
    name: 'Fried Rice',
    description: 'Delicious fried rice with eggs and vegetables',
    ingredients: [
      { ingredientId: 'rice', quantity: 100 },
      { ingredientId: 'eggs', quantity: 1 },
      { ingredientId: 'olive-oil', quantity: 15 },
      { ingredientId: 'salt', quantity: 3 }
    ],
    cookingTime: 20,
    emoji: '🍚',
    difficulty: 'medium'
  },
  {
    id: 'fresh-salad',
    name: 'Garden Salad',
    description: 'Fresh and crispy garden salad',
    ingredients: [
      { ingredientId: 'lettuce', quantity: 1 },
      { ingredientId: 'tomatoes', quantity: 2 },
      { ingredientId: 'olive-oil', quantity: 10 },
      { ingredientId: 'salt', quantity: 2 }
    ],
    cookingTime: 5,
    emoji: '🥗',
    difficulty: 'easy'
  }
];
