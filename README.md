# _Pizza Order Site_


#### By **Alex Francois**


## Description

_This website will be a site for a user to order pizza._
* The user will be able to create a custom order based on what they desire!
* The user can order a small, medium, or large size pizza
* The user will be able to choose from a selection of veggie and meat toppings
* The user will be able to submit the pizza order on the website


## Specifications
| Behavior        | Input           | Outcome  |
| ------------- |:-------------:| -----:|
| Create a randomizer (i.e Math.floor(Math.random()* 6)+1); | click | a number between 1-6|
| If player rolls a 2-6 | 2 | 2|
| If player rolls a 1 | roll 1 | push 0 to players total score array (if else statement)|
| Add current roll score  | roll1(2) roll2(2) | 4|
| Until player clicks hold button or rolls a 1 (if statement) |hold or 1| switch player|
| Create an array for each player's turn | each click | number added to array (i.e. player 1 array player 2 array)|
| Create function for each player that adds the score for each turn to the player's running total | turn 1=6, turn 2=5, turn 3=5 | turn 1 + turn 2 + turn 3 = round total (6+5+5=16)|
| Create a display for current roll array | click | Display current roll for each player|
| Create a display for total score array | click | Display current total score for each player|
| Create a play button | click | runs the game until 1 or user choses hold|
| Create a hold | click | hold the game, passes to player 2|
| Button to switch players (i.e clicking hold or rolling 1 will toggle/show/hide to the other player) | click player 1 or player 2 | switched between players|
| Create an if statement that stops game when a player reaches 100 or more | player reaches 100 or more | You win!|


## Setup/Installation Requirements

* Clone this repository
* Open a HTML file
* Open web browser of choice
* visit the site here:


## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _Git_

### License

Copyright (c) 2016 Alex Francois
