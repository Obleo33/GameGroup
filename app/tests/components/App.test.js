import React from 'react'
import { shallow } from 'enzyme'
import { browserHistory } from 'react-router'
import fetchMock from 'fetch-mock'
import App from '../../components/App/App.js'

describe('App', () => {

  xit('should have three routes', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find('Route').length).toBe(3)
  })

  xit('redirects to My Collection page when you click on the My Collection link', () => {
    const wrapper = shallow(<App />)

    spyOn(browserHistory, 'push')

    let myCollection = wrapper.find('.my-collection-link')

    myCollection.simulate('click')

    expect(browserHistory.push).toHaveBeenCalledWith('/mycollection')
  })

  xit('redirects to Search page when you click on the Search link', () => {
    const wrapper = shallow(<App />)

    spyOn(browserHistory, 'push')

    let search = wrapper.find('.search')

    search.simulate('click')

    expect(browserHistory.push).toHaveBeenCalledWith('/search')
  })

})
