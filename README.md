# game-suite
Suite of games that all run purely in the front end powered by React

# Architecture
This is primarily focused on front end stuff, so the back end will really just be meant to serve up the client.

The front end is built using React with React Router and Redux. The application is organized into an overall app container. Each game is a container within the application container and made up of multiple containers. Since Redux does not necessarily play nicely with React Router, the solution used here is to make each route a game container that is connected to the Redux store and the necessary states and actions. 

# Backlog
### Games to Implement:
- Tic tac toe
- Tetris
- Snake

