import React from 'react'
import { shallow } from 'enzyme'
import { browserHistory } from 'react-router'
import fetchMock from 'fetch-mock'
import App from '../components/App/App.js'

describe('App', () => {

  it('should have three routes', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find('Route').length).toBe(3)
  })

  it('redirects to collection page when you click on the My Collection link', () => {
    const wrapper = shallow(<App/>)

    spyOn(history, 'push')

    let myCollection = wrapper.find('.my-collection-link')
    console.log(history );
    myCollection.simulate('click')
    console.log(history);
    expect(history.pushState).toHaveBeenCalledWith('/mycollection')
  })

})
