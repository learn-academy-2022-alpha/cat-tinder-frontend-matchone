import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import CatIndex from './CatIndex'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})


describe("When CatIndex renders", () => {
  it("displays a heading", () => {
    const catindex = shallow(<CatIndex />)
    const catIndexHeading = catindex.find("h3").text()
    expect(catIndexHeading).toEqual("Meet the Cats!")
  })
})
