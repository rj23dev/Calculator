# Calculator App

A clean, fully functional calculator built with vanilla HTML, CSS, and JavaScript as the final project for The Odin Project's Foundations course.

Live Demo: [Calculator](https://rj23dev.github.io/Calculator/)  

## Features

- Basic arithmetic operations: addition (+), subtraction (-), multiplication (×), division (÷)
- Single pair operations
- Decimal point support with proper handling (no duplicate decimals, starts with 0.)
- Negative numbers (including starting with - or -.5)
- Divide by zero protection with clear error message and recovery
- Clean result formatting: whole numbers stay as integers, decimals rounded to 4 places only when needed
- Backspace (DEL) functionality:
  - Deletes last digit/operator
  - Removes operator to return to previous number
  - Clears everything after pressing = or after error
- Responsive button press animation with soft shadows
- Does not use responsive design

## Screenshot

![Calculator Screenshot](/screenshot/screenshot.png)

## How to Use

1. Click the digit buttons (0–9) to enter numbers
2. Use the operator buttons (+, -, ×, ÷) to select operations
3. Press = to calculate the result
4. AC clears everything
5. DEL acts as backspace
6. . adds a decimal point

## Technologies Used

- HTML5
- CSS3 (Flexbox for layout)
- Vanilla JavaScript (DOM manipulation, event listeners)

## What I Learned

- Managing complex application state with multiple variables
- Handling edge cases in user input (decimals, negatives, errors)
- Creating responsive and visually appealing UI with pure CSS
- Implementing tactile button feedback with shadows and transforms
- Debugging tricky logic flows iteratively

## Future Improvements (Planned)

- Add keyboard support
- Dark mode toggle

## Credits

Built by rj23dev while as a part of The Odin Project curriculum.

