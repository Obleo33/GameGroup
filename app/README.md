## GameGroup
* GameGroup is board game/game group management tool.
    * Board game management
        * Build collection
        * Track game sessions
        * Rank games
        * Build a wish list
    * GameGroup management
        * Build groups
        * Create sessions
        * Email group
        * Compare games
        * Vote on games

## Project Status: In Development

GameGroup is currently in phase 1 of development. development schedule below.

* Phase 1:
  * Build out collection
    * Add
    * Remove
    * Update
  * Rank games
  * Search (using board-game-geek api)
* Phase 2:
  * Session tracking
  * Wish list
* Phase 3:
  * Backend implementation
  * Login functionality
* Phase 4:
  * Multi user login
  * Game groups
  * Game Sessions
* Phase 5:
  * Compare games
  * Sessions games
  * Vote on games
  * Email

## Project Screen Shot(s)
 ![](http://i.imgur.com/Zj9RYSy.png)
 ![](http://i.imgur.com/CUCkGWK.png)

## Installation and Setup Instructions
  * git clone
  * npm install
  * npm start

## Reflection
This project was started during the last week of module 3 at Turing School of Software and Design. My goal was to create an app that could be used by game groups to steam-line the process of organizing gaming sessions and managing your board game collection.
  * Learning goals:
    * Gain a better understanding of React, Redux and Router
    * Build out testing vocabulary
    * Use and external API
  * Obstacles:
    * The API was in XML and had to be translated into JSON
    * Once parsed the information needed extensive scrubbing
    * Multiple API calls were needed to get the needed information
    * Slow API response
    * Local storage was used in lieu of a backend
  * Tools:
    * React app boilerplate created by Brenna with express
    * Redux
    * Router
    * Redux

## Resources
  Links:
    * [BoardGameGeek API](https://boardgamegeek.com/wiki/page/BGG_XML_API2)
