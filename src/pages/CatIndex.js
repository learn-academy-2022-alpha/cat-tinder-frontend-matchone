import React, { Component } from 'react'
import { Card, CardTitle, Col, CardImg, CardBody, CardSubtitle, CardText, CardGroup, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

    class CatIndex extends Component {
      constructor(props){
        super(props)
        }
          render () {
            let {cats}= this.props
              console.log("catindex.cats", cats);
                return (
                  <>
                    <h3>Meet the Stoners!</h3>
                    <br />
                    <Col sm="6">
                      {cats && cats.map(cat => {
                        return (

                          // <Card body key={cat.id}>
                          //   <CardTitle>
                          //     <h4>{cat.name}</h4>
                          //       <NavLink to={`/catshow/${cat.id}`} key={cat.id}>
                          //       {cat.name}
                          //       </NavLink>
                          //   </CardTitle>
                          // </Card>
                          <div>
                          <CardGroup>
                            <Card>
                              <CardImg
                                alt="Card image cap"
                                src={cat.image}
                                top
                                width="300 px"
                                height="300 px"
                              />
                                <CardBody key={cat.id}>
                                  <CardTitle tag="h5">
                                    {cat.name}
                                  </CardTitle>
                                    <CardSubtitle
                                      className="mb-2 text-muted"
                                      tag="h6">
                                      Age:  {cat.age}
                                    </CardSubtitle>
                                      <CardText>
                                        Enjoys: {cat.enjoys}
                                      </CardText>
                                        <NavLink to={`/catshow/${cat.id}`} key={cat.id}>
                                          <Button name="submit" onClick={`/catshow/${cat.id}`}>
                                            View Profile
                                          </Button>
                                        </NavLink>
                                    </CardBody>
                              </Card>
                            </CardGroup>
                          </div>
                        )
                      })
                    }
               </Col>


            </>
          )
        }
      }




export default CatIndex
