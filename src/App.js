import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/main/Main';
import Topics from './components/topics/Topics';
import Statistics from './components/statistics/Statistics';
import Blog from './components/blog/Blog';
import Quizes from './components/quizes/Quizes';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Topics></Topics>,
          loader:() => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/topics',
          element: <Topics></Topics>,
          loader:() => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/topics/:topicsId',
          element: <Quizes></Quizes>,
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicsId}`)
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
  ])
  return (
      <div className="">
          <RouterProvider router={router}></RouterProvider>
       </div>

  );
}

export default App;
