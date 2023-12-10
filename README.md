# Slot-machine 
I got recommendations from Emre and picked SLOT MACHINE. Because that's the only one I was familiar with. I think it's better to start the journey with something I have known a little.

link on Vercel:
https://slot-machine-eago323kt-shans-projects-620d094c.vercel.app/

# Technologies used: 
HTML, CSS(transition), Javascript(Promise)

# Workflow:
![image](./slot%20machine.png)

1. Input your name to start to play. If there's no input, the game will not start.

2. You can reset the game anytime with input name to restart the game.

3. Click the START button to PLAY. You will have three chances to win.

4. If all three icons are the same, you win. Otherwise you can keep playing.

5. If you have used up all three chances and not won, the game is over.

6. Click the reset button to restart.

7. When using a smaller screen, the screen size is fixed.

8. Every result generated will be stored to localStorage for score tracking and future data analysis purposes.

# External sources:
+ Transition logic: https://codepen.io/jcjms/pen/JjmajpW
+ How to add audio: https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984

# Daily plan
| Day        |   | Task                                    | Blockers |  Notes/ Thoughts |
|------------|---|-----------------------------------------|----------|------------------|
| Thursday   |   | Create and present proposal             |          |         Y        |
| Friday     |   | Create workflow, html, css, files       |          |         Y        |
| Saturday   |   | Create basic scaffolding                |          |         Y        |
| Sunday     |   | Add functionality                       |          |         Y        |
| Monday     |   | Add styling                             |          |         Y        |
| Tuesday    |   | Finaliza MVP                            |          |         Y        |
| Wednesday  |   | Work on stretch goals                   |          |         Y        |
| Thursday   |   | Work on icebox items if applicable      |          |         Y        |
| Friday     |   | Presentation Day!                       |          |                  |
|            |   |                                         |          |                  |

# THANKS
+ Technical support: Emre, Greg, Fritz
+ Inspirations, suggestions and encouragement: Aldiana, Joshua, Murad




# Pseudo code
1. Set variables for buttons: startBtn, resetBtn, submitBtn, reel, chances, icon(reel container), inputValue, emoji array ‘img’, state of the game.

2. Select all reels and append the img array to each of them.

3. Add an event listener to submitBtn to get the game started. When the button is clicked, the active function is called.

4. Define the active function. Start with checking if the inputValue is empty. If empty, the state of the game stays false. If not, set the state to true, chances to 3, submit button to red and pass a message to the player for the following step. Then add an event listener to startButton to call the init function.

5.Define the init function. If the state === 1, call the spin function. In the init function, we need to make the reel spin, get a result and compare the result.

6. Define the change function to spin the reel. Get a random index from the img array to decide where the reel stops. Then return the randomIndex as a result for the next function.

7. Add an event listener to each reel. Take the ‘transitionend’ as a parameter to make sure each reel only spins once.

8. Define the timeout function and take time as a parameter. Return a promise

9. Define the compareResult function that takes 3 parameters. In this function, we need to check if all the results are the same one. 
If yes, it’s a win. Check at which turn we get the ‘win’ and pass the result to the user object, display the message to the player, play the sound and end the function. 
If not, check how many chances are left for the player, display the message to the player, play the sound and pass the lost result to localStorage. When chances ===0, set the state of the game to false and change the color of the start button to let the player know the game is over.

10. Define the spin function to include all three functions above. 
Async and await keywords are not necessary here. 
Get the result from the change function and pass them as arguments to the compareResult functions. 
Save the user object to localStorage.
Remove the event listener of the submit button and change the color to gray.

11. To replay the game, click the reset button.
Set the state of the game to false and chances to 0 to clear all previous records.
Change the submit button color to gray and log a message to tell the play to restart the game by inputting their name. ( Bug potential: if they input the same name, the new record will overwrite the previous record.) 
Set inputValue and user object to empty.
Add the event listener to the submit button and change the color back to red.


# Next step:

1. Update the UI.



