# React Number Grid Game

## Overview

This is an interactive number grid game where players click on squares to fill them with sequential numbers from 1 to 9. The game challenges players to strategically select grid cells while following a progressive numbering system.

## Features

- 3x3 interactive grid
- Sequential number placement
- Color-changing grid cells
- Animated cell transition
- Responsive design

## Screenshots

[You can add a screenshot of the game here]

## Game Rules

1. The goal is to click on grid cells in a way that allows you to place numbers from 1 to 9 sequentially.
2. Each cell turns green when clicked and shows its number.
3. After all 9 cells are selected, the grid animates to orange.

## Technical Details

### Component Structure

The game is built as a React functional component with the following key state variables:

- grid: Tracks the color state of each cell
- numbers: Stores the numbers placed in each cell
- clickOrder: Keeps track of the order of cell selections
- counter: Manages the current number to be placed

### Key Functions

#### handleClick(index)
- Handles cell selection logic
- Checks if the cell is available
- Updates grid color
- Places sequential numbers
- Triggers animation when all cells are selected

#### animateToOrange(order)
- Applies a sequential orange animation to all selected cells
- Uses setTimeout to create a cascading effect

## Technologies Used

- React
- JavaScript
- CSS Grid for layout

## Installation

1. Clone the repository
bash
git clone https://your-repository-url.git


2. Install dependencies
bash
npm install


3. Start the development server
bash
npm start


## How to Play

1. Open the application
2. Click on grid cells
3. Try to place numbers from 1 to 9 strategically
4. Complete the grid to see the orange animation

## Customization

You can easily modify:
- Grid size
- Animation speed
- Cell colors
- Number placement rules

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

- React Community
- Create React App











# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
