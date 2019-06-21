# Install dependencies

`npm install`

# Run the app

`npm run start`

## Valid commands

### `PLACE <n>,<n>,<face>`

Put the bot in an area within the 5x5 tile board.

`n` can be any number between 0 and 4.

`face` can be any of the ff:

- `NORTH`
- `EAST`
- `SOUTH`
- `WEST`

### `MOVE`

Move the bot forward by 1 tile in the direction it is facing. This will be ignored if resulting position is beyond the 5x5 tile board.

### `LEFT`

Make the bot face the direction to its left.

### `RIGHT`

Make the bot face the direction to its right.

### `REPORT`

End the program and display the output. No output will be displayed if the bot was not placed.

# Run tests

`npm run test`
