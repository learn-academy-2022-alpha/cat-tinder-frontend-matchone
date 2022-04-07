import React, { Component } from 'react'

class CatShow extends Component {
  render () {
    console.log(this.props.cat)
    return (
      <>
      <h3>
        One Cat
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
