import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Modal,
  ButtonGroup,
  Button
} from 'react-bootstrap'

import MainLogo from 'gittoken-svg-icons/dist/MainLogo'

class MenuModalComponent extends Component {
  constructor(opts) {
    super(opts)
  }

  close() {
    const { dispatch } = this.props
    dispatch({ type: 'UPDATE', id: 'menuModal', value: false })
  }

  render() {
    const { main: { menuModal } } = this.props

    return (
      <div style={{ fontWeight: '100' }}>
        <Modal bsSize={'lg'} show={menuModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>(Products|Features|Options|Settings)</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ButtonGroup>
              <Button bsStyle={'link'}><a href="https://github.com/git-token" target="_blank">What is GitToken?</a></Button>
              <Button bsStyle={'link'}><a href="https://github.com/git-token" target="_blank">Road Map</a></Button>
              <Button bsStyle={'link'}><a href="https://github.com/git-token" target="_blank">Software</a></Button>
              <Button bsStyle={'link'}><a href="https://medium.com/gittoken" target="_blank">Publications</a></Button>
              <Button bsStyle={'link'}><a href="https://gitter.im/git-token/Lobby" target="_blank">Contact</a></Button>
              {/* <Button bsStyle={'link'}><a href="https://github.com/git-token/documentation/wiki/Motivation" target="_blank">Wiki</a></Button> */}
            </ButtonGroup>
          </Modal.Body>

          <Modal.Footer>
            <div style={{ textAlign: 'center' }}>
              <MainLogo width={"20%"} />
              <h4>GitToken</h4>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStoreToProps = (store, props) => {
  return {
    main: store.main
  }
}

const MenuModal = connect(mapStoreToProps)(MenuModalComponent)

export default MenuModal
