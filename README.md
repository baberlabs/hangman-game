# Hangman Game

Welcome to the Hangman Game! This React-based web application offers a fun and interactive way to play the classic word-guessing game.

## Features

-   **Home Page**: Start a new game or view high scores.
-   **Game Page**: Play the Hangman game with a visually updating hangman image.
-   **High Scores**: Keep track of your best performances.
-   **Responsive Keyboard**: On-screen keyboard for letter input.
-   **Score Tracking**: Real-time score updates during gameplay.

## How to Play

1. Start a new game from the home page.
2. Guess letters using the on-screen keyboard.
3. Try to guess the word before the hangman is fully drawn!
4. Your score increases for correct guesses and decreases for incorrect ones.
5. Win by guessing the word or lose if the hangman is completed.

## Installation

To run this project locally:

1. Clone the repository:
    ```
    git clone https://github.com/baberlabs/hangman-game.git
    ```
2. Navigate to the project directory:
    ```
    cd hangman-game
    ```
3. Install dependencies:
    ```
    npm install
    ```
4. Start the development server:
    ```
    npm run dev
    ```

## Technologies Used

-   React
-   CSS
-   Vite

## Project Structure

-   `App.jsx`: Main component handling page routing and state management.
-   `components/`:
    -   `Home.jsx`: Home page component.
    -   `Game.jsx`: Main game logic and display.
    -   `Hangman.jsx`: Displays the hangman image.
    -   `Word.jsx`: Renders the word being guessed.
    -   `Keyboard.jsx`: On-screen keyboard component.
    -   `Header.jsx`: Game header with score and home button.
    -   `GameOver.jsx`: Game over screen.
    -   `GameWon.jsx`: Victory screen.
    -   `HighScores.jsx`: High scores display.

## Contributing

We welcome contributions to improve the Hangman Game! Please feel free to submit pull requests or open issues for any bugs or feature suggestions.

## License

This project is open source and available under the [MIT License](LICENSE).

Enjoy playing Hangman!
