import React, { Component } from 'react'
import { Card, CardTitle, Col } from 'reactstrap'

class CatIndex extends Component {
  render () {
    return (
      <>
        <h3>Meet the Cats!</h3>
        <br />
        <Col sm="6">
          {this.props.cats.map(cat => {
            return(
              <Card body key={cat.id}>
                <CardTitle>
                  <h4>{cat.name}</h4>
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
