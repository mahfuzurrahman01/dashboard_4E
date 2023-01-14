import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';

function App() {
  return (
    <div className='bg-lime-300 bg-opacity-40' >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;