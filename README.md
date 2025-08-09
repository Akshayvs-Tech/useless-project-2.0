# Virtual Kitchen Pro 🍳✨

The most useless but beautifully designed virtual kitchen where you can cook gorgeous virtual food that you'll never be able to eat!


## Features 🌟

### Interactive Kitchen Components

- **Smart Fridge** ❄️ - Click to open and browse fresh ingredients with realistic animations
- **Pantry Cabinet** 🏺 - Store dry goods and cooking essentials with beautiful door animations
- **Professional Stove** 🔥 - Cook recipes with realistic flames, steam effects, and progress tracking
- **Recipe Collection** 📚 - Browse curated recipes with difficulty levels and ingredient requirements

### World-Class UI/UX

- Stunning animations with Framer Motion
- Professional gradient backgrounds and lighting effects
- Responsive design that works on all devices
- Real-time cooking simulation with timers and visual feedback
- Interactive ingredient selection and management

### Available Recipes

- Classic Tea ☕ (Easy)
- Morning Coffee ☕ (Easy)
- Scrambled Eggs 🍳 (Easy)
- Cheese Omelet 🧀 (Medium)
- Simple Pasta 🍝 (Medium)
- Fried Rice 🍚 (Medium)
- Garden Salad 🥗 (Easy)

## How to Use Your Virtual Kitchen

1. **Gather Ingredients** 🛒

   - Click on the fridge or cabinet to open them
   - Click on ingredients to select them for cooking
   - Watch your selection appear in the ingredient basket

2. **Choose a Recipe** 📖

   - Open the recipe book to browse available recipes
   - Only recipes with available ingredients can be cooked
   - Check difficulty levels and cooking times

3. **Start Cooking** 👨‍🍳

   - Click on a recipe to start cooking on the stove
   - Watch realistic flames, steam, and cooking animations
   - Monitor the progress timer

4. **Enjoy the Uselessness** 🎉
   - Your delicious virtual food is complete!
   - It's completely useless but beautifully made 😄

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Context + useReducer

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd useless_gokul
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to start cooking!

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and custom animations
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── Kitchen.tsx        # Main kitchen container
│   ├── Fridge.tsx         # Interactive refrigerator
│   ├── Cabinet.tsx        # Pantry cabinet
│   ├── Stove.tsx          # Cooking stove with animations
│   ├── RecipeBook.tsx     # Recipe collection
│   └── IngredientSelector.tsx # Selected ingredients display
├── lib/                   # Utilities and data
│   ├── kitchen-context.tsx # Global state management
│   └── data.ts            # Ingredients and recipes data
└── types/                 # TypeScript type definitions
    └── kitchen.ts         # Kitchen-related types
```

## Features Implemented

### ✅ Interactive Fridge

- Realistic door opening/closing animations
- Temperature display
- Organized ingredient storage
- Click-to-select ingredients

### ✅ Smart Cabinet

- Double-door opening animations
- Organized dry goods storage
- Wood grain textures and details
- Interactive ingredient selection

### ✅ Professional Stove

- Realistic burner flames when cooking
- Steam effects during cooking
- Progress bar and timer
- Digital temperature display
- Professional brand styling

### ✅ Recipe Collection

- Beautiful book-style interface
- Recipe difficulty indicators
- Ingredient requirement checking
- Cooking time estimates
- Real-time availability status

### ✅ State Management

- Persistent ingredient inventory
- Real-time cooking progress
- Ingredient consumption tracking
- Recipe validation system

## The Philosophy of Uselessness

This project embodies the beautiful art of creating something completely useless but extraordinarily well-crafted. While you can't eat the virtual food, you can appreciate:

- The meticulous attention to UI/UX details
- Smooth animations that bring life to static elements
- Professional-grade visual design
- Interactive experiences that feel real
- The joy of creating something beautiful for its own sake

## Contributing

Feel free to contribute more useless but beautiful features:

- New animated kitchen appliances
- Additional recipes and ingredients
- Enhanced visual effects
- More realistic cooking simulations
- Sound effects (for extra uselessness!)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Made with ❤️ for the love of useless but beautiful things.

_No real food was harmed in the making of this virtual kitchen._
