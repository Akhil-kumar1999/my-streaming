
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Children } from 'react';
import MianContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchTest from './components/SearchTest';


const appRouter = createBrowserRouter([{

  path:'/',
  element:<Body/>,
  children:[
    {
      path:'/',
      element:<MianContainer/>
    },
    {
      path:'watch',
      element:<WatchPage/>
    },
    {
      path:'search',
      element:<SearchTest/>
    }
  ]

}])

function App() {
  return (
    <div>
      <Provider store={store}>
        <Head/>
        <RouterProvider router={appRouter} />
      </Provider>
       { /*
        Head 
        Body
         -Sidbar
            - MenuItems
         -MianComponet
            -ButtonList
            -VideoContainer
               -videocard
  */} 
       
    </div>
   
  );
}

export default App;
