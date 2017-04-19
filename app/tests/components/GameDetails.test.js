import React from 'react'
import { shallow } from 'enzyme'
import { browserHistory } from 'react-router'
import fetchMock from 'fetch-mock'
import GameDetails from '../../components/GameDetails/GameDetails.js'

describe('GameDetails', () => {

  let mockGame = {
    desctiption: "In Catan (formerly The Settlers of Catan)...",
    details: {
      boardgameartist: [],
      boardgamecategory: [],
      boardgamecompilation: [],
      boardgamedesigner: [],
      boardgameexpansion: [],
      boardgamefamily: [],
      boardgameimplementation: [],
      boardgamemechanic: [],
      boardgamepublisher: []
    },
    id: "13",
    image: "//cf.geekdo-images.com/images/pic2419375.jpg",
    maxPlayTime: "120",
    maxPlayers: "4",
    minPlayTime: "60",
    minPlayers: "3",
    name: "Catan",
    playTime: "120",
    type: "boardgame",
    yearPublished: "1995"
  }

  xit('should render a game', () => {
    const wrapper = shallow(<GameDetails game={ mockGame }/>)
    expect(wrapper.find('Route').length).toBe(1)
  })

  xit('should allow you to add a game log', () => {
    const wrapper = shallow(<GameDetails game={ mockGame }/>)
  })

  xit('should show a list of all logs when you click the view all button', () => {
    const wrapper = shallow(<GameDetails game={ mockGame }/>)
  })

  xit('should remove the game from your collection when you click the remove button and redirect you to /mycollection', () => {
    const wrapper = shallow(<GameDetails game={ mockGame }/>)
  })

  xit('should increase the ranking when you click the up vote button', () => {
    const wrapper = shallow(<GameDetails game={ mockGame }/>)
  })

  xit('should decrease the ranking when you click on the down vote button', () => {
    const wrapper = shallow(<GameDetails game={ mockGame }/>)
  })

  xit('should go to the next game in the collection when you click the next button', () => {
    const wrapper = shallow(<GameDetails game={ mockGame }/>)
  })

  xit('should go to the previous game in the collection when you click the back button', () => {
    const wrapper = shallow(<GameDetails game={ mockGame }/>)
  })

})
