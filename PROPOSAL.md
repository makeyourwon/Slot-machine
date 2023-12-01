# Project Proposal - Slot machine


## Project Description 

My app is called Slot machine. The player will have 3 chances to play. Only when 3 icons are the same, the player wins. If player doesn't get the jackpot in the first time, the player can continue pressing the play button until the chances used up. Then the game stop working unless the game is reset.

## Wire Frames

**Initial Landing View**

<img width="659" alt="Screenshot 2023-11-30 at 10 11 28 PM" src="https://github.com/makeyourwon/Slot-machine/assets/149891853/ad3abe1f-9e56-45fc-99b6-820d4bf07ac3">

**Results View**

<img width="540" alt="Screenshot 2023-11-30 at 10 12 45 PM" src="https://github.com/makeyourwon/Slot-machine/assets/149891853/6159c309-8f8f-4003-9150-1e0e195c533f">

## User Stories

#### MVP Goals

- As a player, I would like to have 3 chances to play.
- As a player, I would like to be informed when the game is over or I win.
- As a player, I would like to know when the three icons are the same, I win.
- As a player, I would like to have sound effect everytime when the result is generated.
- As a player, I don't want the game to continue when I use up three chances without resetting the game.
- As a player I would like to see three reels start and stop asynchronously.
- As a player, I want to use the icons rather than numbers on each reel.\*\*

#### Stretch Goals



#### Notionboard Template
Notionboard template for building projects ( You can use this for any project )
https://www.notion.so/GA-Unit-3-Tunr-Lab-da2c82fafd4e4a7aa654676732db9ee3

#### Timeline - Daily Accountability
Example of a Timeline to keep organized and on task for hitting goals every single day you’re on the sprint for your project.

Create your own table using this markdown table generator website:
https://www.tablesgenerator.com/markdown_tables

Do not neglect to plan, you will thank yourself later for being proactive!
| Day        |   | Task                                    | Blockers | Notes/ Thoughts |
|------------|---|-----------------------------------------|----------|-----------------|
| Thursday   |   | Create and present proposal             |          |                 |
| Friday     |   | Create workflow, html, css, files       |          |                 |
| Saturday   |   | Create basic scaffolding                |          |                 |
| Sunday     |   | Add functionality                       |          |                 |
| Monday     |   | Add styling                             |          |                 |
| Tuesday    |   | Finaliza MVP                            |          |                 |
| Wedenesday |   | Work on stretch goals                   |          |                 |
| Thursday   |   | Work on icebox items if applicable      |          |                 |
| Friday     |   | Presentation Day!                       |          |                 |
|            |   |                                         |          |                 |



Psudeo code
1. Set variables for buttons: startBtn, resetBtn, reel, winPattern, chance

2. When startBtn is clicked, init function to start the game. Set 3 chances for player by default and reels start to roll ASYNCHRONOUSLY, complex part.

3. Result of each reel should be displayed ASYNCHRONOUSLY.

4. Check the result with winPattern. If match, log message " You won!" and stop the game.
    If not match, minus 1 chance and log message "TRY AGAIN".

5. When all 3 chances are used up without a win, log message "Hope to see you next time."

6. Reset button to call the init function to replay.