import React from 'react'
import { shallow } from 'enzyme'
import { browserHistory } from 'react-router'
import fetchMock from 'fetch-mock'
import MyCollection from '../../components/MyCollection/MyCollection.js'

describe('MyCollection', () => {

  let mockCollection = []
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

  xit('should display a message if there are no games in your collection', () => {
    const wrapper = shallow(<MyCollection collection={ mockCollection } removeFromCollection={ jest.fn() }/>)

    const message = wrapper.find('.no-collection-msg')

    expect(message.value).toBe('Please use the search tab to locate and add games')
  })

  xit('should display games in your collection', () => {
    const wrapper = shallow(<MyCollection collection={ mockCollection } removeFromCollection={ jest.fn() }/>)

    expect(wrapper.find('.collection-card').length).toBe(1)
  })

  xit('should link to the individual game page', () => {
    const wrapper = shallow(<MyCollection collection={ mockCollection } removeFromCollection={ jest.fn() }/>)

    spyOn(browserHistory, 'push')

    let gameLink = wrapper.find('.game-image-collection')

    gameLink.simulate('click')

    expect(browserHistory.push).toHaveBeenCalledWith('/game/13')
  })

  xit('should remove a game from your collection when you click the remove button', () => {
    const wrapper = shallow(<MyCollection collection={ mockCollection } removeFromCollection={ jest.fn() }/>)

    expect(wrapper.find('.collection-card').length).toBe(1)

    const removeButton = wrapper.find('.remove-button')

    removebutton.simulate('click')

    expect(wrapper.find('.collection-card').length).toBe(0)
  })

  xit('should have a grid view', () => {

  })

  xit('should have a detail view', () => {

  })

  xit('should arange the games based on ranking', () => {

  })

})
