import React from 'react'
import { shallow, mount } from 'enzyme'
import { browserHistory } from 'react-router'
import fetchMock from 'fetch-mock'
import Search from '../../components/Search/Search.js'

describe('Search', () => {

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([])
    fetchMock.restore()
  })

  const mockIds = [1,2,3,4,5,6,7,8,9,10,11]
  const mockDisplay = [1,2,3]
  const mockCollection = [1,2,3]
  const mockDisplayPage = {1:[1,2,3]}

  xit('should have a disabled search button when the search field is empty', () => {
    const wrapper = shallow(<Search collection={mockCollection}
                                    displayPages={mockDisplayPage}
                                    displaySearchedGames={mockDisplay}
                                    searchIds={mockIds}
                                    history={browserHistory}
                                    clearSearch={jest.fn()}
                                    searchGames={jest.fn()}
                                    addCollection={jest.fn()}
                                    showGames={jest.fn()}/>)

    const searchField = wrapper.find('.search-input')
    const submitButton = wrapper.find('.submit-button')

    expect(searchField.value).toBe(undefined)
    expect(submitButton.props().disabled).toBe(true)

    searchField.simulate('change', {target: { value: 'a'}})

    // expect(searchField.value).toBe('a')
    expect(submitButton.props().disabled).toBe(false)
  })

  xit('Displays the number of results when you perform a search', () => {

  })

  xit('Displays a page for every 10 results', () => {

  })

  xit('changes the display games when you click one of the page buttons', () => {

  })

  xit('Displays game details at the bottom of the screen when you click on a game', () => {

  })


})
