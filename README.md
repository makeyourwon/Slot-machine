# Slot-machine

1. Set variables for buttons: startBtn, resetBtn, reel, winPattern, chance

2. When startBtn is clicked, init function to start the game. Set 3 chances for player by default and reels start to roll ASYNCHRONOUSLY, complex part.

3. Result of each reel should be displayed ASYNCHRONOUSLY.

4. Check the result with winPattern. If match, log message " You won!" and stop the game.
    If not match, minus 1 chance and log message "TRY AGAIN".

5. When all 3 chances are used up without a win, log message "Hope to see you next time."

6. Reset button to call the init function to replay.