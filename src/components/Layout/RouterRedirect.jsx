import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'

import {
  Row, Col, ButtonGroup, Button
} from 'react-bootstrap'

class RouterRedirectComponent extends Component {
  constructor(opts) {
    super(opts)
  }


  render() {
    const { main: { route } } = this.props;
		
		if (route == 'roadmap') {
			return (<Redirect to={"/roadmap"} push={true} />);
		} else if (route == 'documentation') {
			return (<Redirect to={"/documentation"} push={true} />);
		} else {
			return null;
		}
	
  }
}

const mapStoreToProps = (store, props) => {
  return {
    main: store.main
  }
}

const RouterRedirect = withRouter(connect(mapStoreToProps)(RouterRedirectComponent));

export default RouterRedirect
