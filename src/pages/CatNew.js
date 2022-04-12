import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

  class CatNew extends Component {
    constructor(props){
      super(props)
        this.state = {
          newCat: {
            name: "",
            age: "",
            enjoys: "",
            image: ""
          },
          submited: false
        }
        }
        handleChange = (e) => {
          let { newCat } = this.state
          newCat[e.target.name] = e.target.value
          this.setState({newCat: newCat})
        }
        handleSubmit = () => {
          this.props.createCat(this.state.newCat)
          this.setState({submitted: true})
        }

          render () {
            return (
              <>
              <h2>Light one up!</h2>
                <FormGroup>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.newCat.name}
                  />
                  </FormGroup>
                  <FormGroup>
                    <Label>Age</Label>
                    <Input
                      type="text"
                      name="age"
                      onChange={this.handleChange}
                      value={this.state.newCat.age}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Enjoys</Label>
                    <Input
                      type="text"
                      name="enjoys"
                      onChange={this.handleChange}
                      value={this.state.newCat.enjoys}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Image Url</Label>
                    <Input
                      type="text"
                      name="image"
                      onChange={this.handleChange}
                      value={this.state.newCat.image}
                    />
                  </FormGroup>
                </Form>
                  <Button name="submit" onClick={this.handleSubmit}>
                    Create a New Profile
                  </Button>
                    {this.state.submitted && <Redirect to="/catindex" />}
                </>
            )
          }
        }
  export default CatNew
