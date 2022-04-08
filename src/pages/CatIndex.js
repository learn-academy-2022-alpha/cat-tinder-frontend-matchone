import React, { Component } from 'react'
import { Card, CardTitle, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component {
  constructor(props){
    super(props)
    }
      render () {
        let {cat}= this.props
          return (
      <>
        <h3>Meet the Cats!</h3>
        <br />
        <Col sm="6">
          {this.props.cats && this.props.cats.map(cat => {
            return (
              <Card body key={cat.id}>
                <CardTitle>
                  <h4>{cat.name}</h4>
                    <NavLink to={`/catshow/${cat.id}`} key={cat.id}>
                    {cat.name}
                    </NavLink>
                </CardTitle>
              </Card>
            )
          })
        }
       </Col>


      </>
    )
  }
}




export default CatIndex
