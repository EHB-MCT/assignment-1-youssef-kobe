# Color Picker App (challenge-1)


## Overview

The Color Picker App allows users to select colors from a list and displays the selected color. 
Additionally, users can reset the color selection to its default value using the Reset Color button.


## Features

Select colors from a predefined list.
Visualize the selected color in real-time.
New Feature: Reset the selected color to white using the Reset Color button.


## Installation

1. Clone the repository:  
   `git clone <https://github.com/EHB-MCT/assignment-1-youssef-kobe.git>`
2. Navigate to the project directory:  
   `cd challenge-1`
3. Install the dependencies:  
   `npm install`
4. Start the development server:  
   `npm run dev`


## Usage

Once the app is running, select a color by clicking on one of the buttons.
The selected color will be displayed in the viewer.
Click the Reset Color button to reset the selected color to white.


## Structure

- **components/**: Contains UI components such as `ColorPicker` and `ColorDisplay`.
- **hooks/**: Custom hooks like `useColor` for managing color selection state.
- **pages/**: Main application pages, including the `HomePage`.
- **styles/**: CSS files for styling the application.


## Commit Guidelines

This project follows a consistent commit message format to ensure clarity and maintainability:

- chore: tasks such as dependency updates or changes to folders or project configuration that don’t add features or fix bugs. This is used for non-functional updates.
- feat: Implementation of new features like the reset button.
- docs: Documentation updates, including README improvements.


## Sources 

- [handsonreact.com](https://handsonreact.com/docs/code-organization-conventions) 
- [www.linkedin.com](https://www.linkedin.com/pulse/react-js-naming-convention-kristiyan-velkov/) 
- [github.com](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) 
