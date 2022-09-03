# memory-game

Given a set of images, render them at random in some kind of grid

COMPONENTS

Image
1. Props
  a. src
  b. caption, string
2. State
  a. isClicked, boolean


Grid
1. Props
  a. imgList, array
  b. theme
2. State
  a. isGameActive, boolean
    -> init to true
    -> set to false if an Image is clicked that has state of isClicked=true
  b. gameLevel
3. functions
  a. re-render randomized layout after a click and isGameActive=true
  b. shuffle to randomize imgList array

Scoreboard
  1. Props
  2. State
    a. score, number
      -> init to 0
      -> increment by 1 if an Image is clicked that had a state of isClicked=false
  3. Elements
    a. reset button
    b. change game mode
      -> easy, medium, hard etc. to increase number of Image components
      -> change theme of Images
