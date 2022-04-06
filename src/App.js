import React, { Component } from 'react'
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import CatEdit from './pages/CatEdit.js'
import CatIndex from './pages/CatIndex.js'
import CatNew from './pages/CatNew.js'
import CatShow from './pages/CatShow.js'
import Home from './pages/Home.js'
import NotFound from './pages/NotFound.js'
import mockCats from './mockCats.js'
import {  
  BrowserRouter as Router,
  Route,
  Switch
  }
  from 'react-router-dom'
  class App extends Component {
    constructor(props){
      super(props)
        this.state = {
        cats: mockCats
        }
      }


  
render() {
return (
  <>
  <Header />
  <Router>
<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/catindex" component={CatIndex} />
  <Route path="/catshow" component={CatShow} />
  <Route path="/catnew" component={CatNew} />
  <Route path="/catedit" component={CatEdit} />
  <Route component={NotFound}/>
</Switch>
</Router>
<Footer />
</>
)
}
}

export default App;
