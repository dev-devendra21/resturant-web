import {Switch, Route, withRouter} from 'react-router-dom'
import {CartContextProvider} from './context/CartContext'
import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => (
  <CartContextProvider>
    <Switch>
      <Route path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute path="/cart" component={Cart} />
    </Switch>
  </CartContextProvider>
)

export default withRouter(App)
