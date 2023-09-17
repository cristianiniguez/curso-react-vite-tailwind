import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom';
import { ShoppingCartProvider } from './context';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import MyOrders from './pages/MyOrders';
import MyOrder from './pages/MyOrder';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';
import CheckoutSideMenu from './components/CheckoutSideMenu';

const Routes = () =>
  useRoutes([
    { path: '/', element: <Navigate to='/home' /> },
    { path: '/home/:category?', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/:orderId', element: <MyOrder /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '*', element: <NotFound /> },
  ]);

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Routes />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
