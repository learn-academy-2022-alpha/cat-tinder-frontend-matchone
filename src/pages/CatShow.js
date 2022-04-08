import React, { Component } from 'react'
import { Card, CardTitle, Col, CardText } from 'reactstrap'

class CatShow extends Component {
  constructor(props){
    super(props)
    }
      render () {
        let {cat}= this.props

          return (
            <>
              <h3>
              Meet the Cats!
              </h3>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Hi, my name is {this.props.cat.name}!</CardTitle>
                      <img src={this.props.cat.image} alt="adorable cat" />
                        <CardText>I am {this.props.cat.age} years old. I enjoy  {this.props.cat.enjoys}.</CardText>
                  </Card>
              </Col>
          </>
                  )
                  }
                  }
export default CatShow
