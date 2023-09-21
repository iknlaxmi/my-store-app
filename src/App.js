import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import TheEdit from './components/TheEdit';
import Shoes from './components/Shoes';
import Bags from './components/Bags';
import Jewelry from './components/Jewelry';
import Beauty from './components/Beauty';
import Home from './components/Home';
import Clothing from './components/Clothing';
import Designers from './components/Designers';
import NewArrivals from './components/NewArrivals';
import Accessories from './components/Aceessories';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
const AppClient = () => {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppClient />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/theEdit',
        element: <TheEdit />,
      },
      {
        path: '/newArrivals',
        element: <NewArrivals />,
      },
      {
        path: '/designers',
        element: <Designers />,
      },
      {
        path: '/clothing',
        element: <Clothing />,
      },
      {
        path: '/shoes',
        element: <Shoes />,
      },
      {
        path: '/bags',
        element: <Bags />,
      },
      {
        path: '/accessories',
        element: <Accessories />,
      },
      {
        path: '/jewelry',
        element: <Jewelry />,
      },
      {
        path: '/beauty',
        element: <Beauty />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default App;
