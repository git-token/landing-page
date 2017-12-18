import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Grid,
  Row,
  Col,
  Panel,
  ButtonGroup,
  Button
} from 'react-bootstrap'

import { FormItem } from '../Forms/index'
import { newsletterActions } from '../../actions/index'

class NewsletterComponent extends Component {
  constructor() {
    super()
  }

  setValue(evt) {
    const { id, value } = evt.target
    const { dispatch } = this.props

    dispatch({ type: 'SET_ACCOUNT_DETAILS', id, value })
  }

  register() {
    const { dispatch, Account: { email } } = this.props
    dispatch(newsletterActions.register({ email }))
  }

  render() {
    const { Account: { email } } = this.props

    return (
      <div style={{
        background: '#210a3a',
        fontWeight: '400',
        paddingBottom: '100px',
        paddingTop: '100px',
        marginTop: '-150px',
        zIndex: '1',
        position: 'relative'
      }}>
        <Grid>
          <Row>
            <Col xs={12}>
              <p style={{ fontSize: '36px' }}>Subscribe to the Newsletter</p>
              <br/>
              <br/>
              <form>
                <FormItem
                  type={'email'}
                  value={email ? email : ''}
                  placeholder={'Please enter your email'}
                  onChange={this.setValue.bind(this)}
                  validationState={() => { return null }}
                  label={null}
                  controlId={'email'}
                  help={"Please enter your email (e.g. your@email.com)"}
                  onClick={this.register.bind(this)}
                  bsStyle={'warning'}
                  button={'Subscribe'}
                />
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStoreToProps = (store, props) => {
  return {
    Account: store.Account
  }
}

const Newsletter = connect(mapStoreToProps)(NewsletterComponent)

export default Newsletter
