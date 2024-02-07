Three Screens with Stack Navigation:
The app consists of three screens: GameStartScreen, GameScreen, and GameOverScreen.
Navigation between these screens is managed using stack navigation.

GameStartScreen:
On this screen, the player guesses a number between 1 to 99.
After entering the guess, the player confirms their choice.
Upon confirmation, the app navigates to the GameScreen.

GameScreen:
In this screen, the opponent guesses a number.
The player compares their guess with the opponent's.
When either the opponent's guess or the player's guess matches, the GameOverScreen is displayed.

GameOverScreen:
This screen indicates the end of the game.
It includes a button to restart the game.

Custom Fonts:
The app utilizes custom fonts.

Linear Gradient:
Linear gradient is applied to the screens to add a visually appealing background effect.

Back Handler:
The app implements a back handler to prevent accidental app exits.
If the user attempts to navigate back, an alert prompts them to confirm if they want to exit the app or cancel the action.
