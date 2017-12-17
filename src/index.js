import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { Grid } from 'react-bootstrap'


import { Pages, Layout, Presentation } from './components/index'
import { store, history } from './store'

import Header from 'gittoken-react-components/dist/components/Layout/Header'

const { Body, Footer, RouterRedirect } = Layout
const { Contribute, RoadMap, Default } = Pages



ReactDOM.render(
    <BrowserRouter history={history}>
      <Provider store={store}>
          <div style={{ position: 'relative' }}>
            <Grid style={{ zIndex: '2', position: 'relative' }}><Header /></Grid>
            {/* <Header /> */}
            <Body />
            <Footer />
          </div>
      </Provider>
    </BrowserRouter>,
    document.getElementById('app')
  )
