import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem,NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap'

  class Header extends Component {
    render () {
      return (
        <header>
          <div class="clearfix">
            <h2>MatchOne</h2>
            <div class="img1">
                <img src="https://3ncb884ou5e49t9eb3fpeur1-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/Samoas-800x500.jpg" height="100" width="auto"  />
              </div>
              <div>
                <Nav>
                  <NavItem>
                    <NavLink
                      active
                      href="/catindex">
                      Stoners in your area!
                    </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/catnew">
                      Join a Smoke Sesh!
                      </NavLink>
                  </NavItem>
                </Nav>
              </div>
              </div>
        </header>
      )
    }
  }
export default Header
