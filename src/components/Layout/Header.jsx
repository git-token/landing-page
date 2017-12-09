import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Grid,
  Row,
  Col,
  ButtonGroup,
  Button
} from 'react-bootstrap'

import FaBars from 'react-icons/lib/fa/bars'
import MainLogo from 'gittoken-svg-icons/dist/MainLogo'

import { MenuModal } from './index'

class HeaderComponent extends Component {
  constructor(opts) {
    super(opts)
  }

  NavBarLogo() {
    return (
      <svg width={"50%"} viewBox="0 0 2500 1500" >
				<path d="M 350 250 L 550 350 L 350 450 L 150 350 L 150 150 L 350 50 L 550 150 "
					fill="transparent"
					strokeLinejoin={"round"}
					stroke="#cc5333"
					strokeWidth="48"
				/>

				<circle cx="550" cy="150" r="48" fill="#cc5333"/>
				<circle cx="550" cy="150" r="26" fill="#320551"/>
				<circle cx="350" cy="250" r="48" fill="#cc5333"/>
				<circle cx="350" cy="250" r="26" fill="#320551"/>
        <text x="600" y="450" fontSize="400px" fill="#fff">GitToken</text>

				{/* <path className={"path"} d="M 300 150 L 200 100 L 100 150 L 100 250 L 200 300 L 300 250 L 300 150 L 200 100 "
					fill="transparent"
					strokeLinejoin={"round"}
					stroke="#cc5333"
					strokeWidth="12"
					// strokeDasharray={"5, 5"}
					// strokeDashoffset={"200"}
				/> */}
			</svg>
    )
  }

  render() {
    const { dispatch } = this.props

    return (
      <div style={{ height: '125px', marginTop: '50px', zIndex: '2', position: 'relative' }}>
        <Grid>
          <Row>
            <Col xs={10} sm={4} md={4} lg={4}>
              {this.NavBarLogo()}
            </Col>

            <Col lgHidden mdHidden xs={2} sm={8}>
              <div style={{ textAlign: 'right' }}>
                <ButtonGroup>
                  <Button bsSize={'lg'} bsStyle={'link'} onClick={() => {
                    dispatch({ type: 'UPDATE', id: 'menuModal', value: true })
                  }}><FaBars /></Button>
                </ButtonGroup>
                <MenuModal />
              </div>
            </Col>

            <Col xsHidden smHidden md={8}>
              <div style={{ textAlign: 'right', marginRight: '50px', marginLeft: '100px' }}>
                <ButtonGroup>
                  <Button bsStyle={'link'}><a href="https://github.com/git-token" target="_blank">What is GitToken?</a></Button>
                  <Button bsStyle={'link'}><a href="https://github.com/git-token" target="_blank">GitHub</a></Button>
                  {/* <Button bsStyle={'link'}><a href="https://github.com/git-token" target="_blank">Road Map</a></Button> */}
                  {/* <Button bsStyle={'link'}><a href="https://medium.com/gittoken" target="_blank">Publications</a></Button> */}
                  {/* <Button bsStyle={'link'}><a href="https://gitter.im/git-token/Lobby" target="_blank">Contact</a></Button> */}
                  {/* <Button bsStyle={'link'}><a href="https://github.com/git-token/documentation/wiki/Motivation" target="_blank">Wiki</a></Button> */}
                </ButtonGroup>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>

    );
  }
}

const mapStoreToProps = (store, props) => {
  return {
    main: store.main
  }
}

const Header = connect(mapStoreToProps)(HeaderComponent)

export default Header


//
// return (
//   <div style={{ background: 'linear-gradient(135deg, #0c0019, #493f5b)', color: 'white' }}>
//     <div style={{ position: 'fixed', width: "100%", zIndex: '3', backgroundColor: 'rgba(0,0,0,0.2)', height: '75px' }}>
//       <Row>
//         <Navbar style={{ backgroundColor: 'rgba(0,0,0,0.2)', height: '75px' }}>
//           <Navbar.Header>
//             <Navbar.Brand>
//               <a href="#"><MainLogo height={"75px"} style={{ marginTop: '-20px' }} /> GitToken</a>
//             </Navbar.Brand>
//           </Navbar.Header>
//           <Nav>
//             <NavItem eventKey={1} href="https://github.com/git-token">Software</NavItem>
//             <NavItem eventKey={2} href="#">Link</NavItem>
//             <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//               <MenuItem eventKey={3.1}>Action</MenuItem>
//               <MenuItem eventKey={3.2}>Another action</MenuItem>
//               <MenuItem eventKey={3.3}>Something else here</MenuItem>
//               <MenuItem divider />
//               <MenuItem eventKey={3.4}>Separated link</MenuItem>
//             </NavDropdown>
//           </Nav>
//         </Navbar>
//         {/*<Col sm={4}>
//           <MainLogo height={"100px"} style={{ marginTop: '-50px' }} />
//         </Col>
//         <Col sm={8} />*/}
//       </Row>
      // <Row>
      //   <Col sm={4}/>
      //   <Col sm={8}>
      //     <div style={{ textAlign: 'right', marginRight: '50px', marginLeft: '100px' }}>
      //       <ButtonGroup>
      //         {/* <Button onClick={this.selectRoute.bind(this, 'roadmap')} bsStyle={'link'}>Road Map</Button> */}
      //         <Button bsStyle={'link'}><a href="https://github.com/git-token" target="_blank">GitHub</a></Button>
      //         <Button bsStyle={'link'}><a href="https://gitter.im/git-token/Lobby" target="_blank">Gitter</a></Button>
      //         <Button bsStyle={'link'}><a href="https://medium.com/gittoken" target="_blank">Publications</a></Button>
      //         <Button bsStyle={'link'}><a href="https://github.com/git-token/documentation/wiki/Motivation" target="_blank">Wiki</a></Button>
      //       </ButtonGroup>
      //     </div>
      //   </Col>
      // </Row>
//     </div>
//     <Row>
//       <Col sm={12}>
//         <div style={{ marginTop: "200px", textAlign: 'center', marginBottom: '500px' }}>
//           <MainLogo height={"350px"} />
//           <h1 style={{ fontSize: '72px', marginTop: '-50px' }}>GitToken</h1>
//           <h2 >Issue and Earn Ethereum ERC20 Tokens for your GitHub Contributions</h2>
//         </div>
//       </Col>
//     </Row>
//   </div>
// )

//
// <div style={{ marginBottom: '-25px',  }}>
//   <Navbar collapseOnSelect style={{ height: '65px' }}>
//     <Navbar.Header>
//       <Navbar.Brand>
//         <a href="#" style={{ fontWeight: '100' }}>GitToken</a>
//       </Navbar.Brand>
//       <Navbar.Toggle />
//     </Navbar.Header>
//     <Navbar.Collapse>
//       <Nav> </Nav>
//       <Nav pullRight>
//         <NavItem eventKey={1} href="#">Link</NavItem>
//         <NavItem eventKey={2} href="#">Link</NavItem>
//         <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//           <MenuItem eventKey={3.1}>Action</MenuItem>
//           <MenuItem eventKey={3.2}>Another action</MenuItem>
//           <MenuItem eventKey={3.3}>Something else here</MenuItem>
//           <MenuItem divider />
//           <MenuItem eventKey={3.3}>Separated link</MenuItem>
//         </NavDropdown>
//       </Nav>
//       <Nav pullRight>
//         <NavItem eventKey={1} href="#">Link Right</NavItem>
//         <NavItem eventKey={2} href="#">Link Right</NavItem>
//       </Nav>
//     </Navbar.Collapse>
//   </Navbar>
// </div>
