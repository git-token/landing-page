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
    dispatch({ type: 'UPDATE', id, value })
  }

  register() {
    const { dispatch, main: { email } } = this.props
    console.log('newsletterActions', newsletterActions)
    dispatch(newsletterActions.register({ email }))
  }

  render() {
    const { main: { email } } = this.props

    return (
      <div style={{
        // background: 'linear-gradient(135deg, #0c0019, #493f5b)',
        fontWeight: '100'
      }}>
        <Grid>
          <Row>
            <Col xs={12}>
              <form>
                <FormItem
                  type={'text'}
                  value={email ? email : ''}
                  placeholder={'Please enter your email'}
                  onChange={this.setValue.bind(this)}
                  validationState={() => { return null }}
                  label={'Sign Up for the GitToken Newsletter'}
                  controlId={'email'}
                  help={"Please enter your email (e.g. your@email.com)"}
                  onClick={this.register.bind(this)}
                  button={'Sign Up'}
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
    main: store.main
  }
}

const Newsletter = connect(mapStoreToProps)(NewsletterComponent)

export default Newsletter
