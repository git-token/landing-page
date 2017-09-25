import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { Pages, Layout, Presentation } from './components/index'
import { store, history } from './store'

const { Header, Footer, RouterRedirect } = Layout
const { Contribute, RoadMap, Default } = Pages


ReactDOM.render(
    <BrowserRouter history={history}>
      <Provider store={store}>
          <div>
            <Header history={history} />
						<RouterRedirect />
						{/* <Route exact path="/" component={Presentation} />
						<Route exact path="/roadmap" component={RoadMap} />
						<Footer /> */}
          </div>
      </Provider>
    </BrowserRouter>,
    document.getElementById('app')
  )
