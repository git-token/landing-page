import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { Pages, Layout, Presentation } from './components/index'
import { store, history } from './store'

const { Header, Body, Footer, RouterRedirect } = Layout
const { Contribute, RoadMap, Default } = Pages


ReactDOM.render(
    <BrowserRouter history={history}>
      <Provider store={store}>
          <div style={{ position: 'relative' }}>
            <Header />
            <Body />
            <Footer />
          </div>
      </Provider>
    </BrowserRouter>,
    document.getElementById('app')
  )
