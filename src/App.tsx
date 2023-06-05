import { BrowserRouter, useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import MyOrders from './pages/MyOrders';
import MyOrder from './pages/MyOrder';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';

const Routes = () =>
  useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '*', element: <NotFound /> },
  ]);

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
