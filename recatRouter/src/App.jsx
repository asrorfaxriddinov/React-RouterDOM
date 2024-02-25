import './App.css'

//recat-router-dom 

//layout
import RootLayout from './layout/RootLayout'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  NavLink
} from 'react-router-dom'
//pages
import Home from './pages/home'
import Abaut from './pages/Abaut'
import Faq from './pages/help/Faq';
import Form from './pages/help/form'
import ContactLayout from './layout/ContactLayout'
import PageNotFound from './pages/PageNotFound'
import ArticlsLayoul from './layout/ArticlsLayoul'
import Articles from './pages/Articles/Articles'
import ArticlesDetail from './pages/Articles/ArticlesDetail'
// ES Module
import Snowflakes from 'magic-snowflakes';
// For browser
<script src="/dist/snowflakes.js"></script>
function App() {
  const snowflakes = new Snowflakes();
  const routes = createBrowserRouter(
   [  {
    path : '/',
    element : <RootLayout/>,
    errorElement:<PageNotFound/>,
    children:[
      {
        index : true,
        element : <Home />
      },
      {
        path: '/About',
        element:<Abaut />
      },
      {
        path: '/contact',
        element:<ContactLayout />,
        children:[
           {
            path: 'Faq',
            element:<Faq/>, 
           },
           {
            path: 'Form',
            element:<Form/>, 
           }
        ]
      },
      {
        path: 'articls',
        element:<ArticlsLayoul/>,
        children:[
          {
              index:true,
              element:<Articles/>,   
          },
          {
            path:':id',
            element:<ArticlesDetail/>,   
        },

        ]
      },

    ]
   }]
      
  )
  return (
    <div className='App'>

      <RouterProvider router={routes} />
    </div>
  )
}

export default App
