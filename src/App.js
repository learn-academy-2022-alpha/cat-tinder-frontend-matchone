import React, { Component } from 'react'
import './App.css'
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import CatEdit from './pages/CatEdit.js'
import CatIndex from './pages/CatIndex.js'
import CatNew from './pages/CatNew.js'
import CatShow from './pages/CatShow.js'
import Home from './pages/Home.js'
import NotFound from './pages/NotFound.js'
import mockCats from './mockCats.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

  class App extends Component {
      constructor(props){
        super(props)
          this.state = {
            cats: mockCats
    }
  }
  createCat = (cat) => {
    console.log(cat)
  }
              render() {
                return (
                  <>
                  <h1>Welcome to Our App!</h1>
                  <Router>
                    <Header />
                      <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/catindex" render={(props) => <CatIndex cats={this.state.cats} />} />
                        <Route path="/catshow/:id" render={(props) => {
                          let id = props.match.params.id
                          let cat = this.state.cats.find(cat => cat.id === +id)
                          return <CatShow cat={cat} />
                          }} />
                        <Route path="/catnew" render={(props) => <CatNew createCat={this.createCat} />} />
                        <Route path="/catedit" component={CatEdit} />
                        <Route component={NotFound}/>
                    </Switch>
                    <Footer />
                </Router>
                  </>
                  )
                }
              }

export default App;
