import './App.css';
import {Button} from '@mui/material';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Components/Home";
import Panel from "./Components/Panel";
import MasProximo from "./Components/MasProximo";
import Themas from "./Components/Themas";

function App() {

  const router = createBrowserRouter(
    [
      {path: '/', element: <Home/>},
      {path: '/panel', element: <Panel/>},
      {path: '/masProximo', element: <MasProximo/>},
      {path: '/themas', element: <Themas/>},
    ]
  );

  return (
    <div className="App">
      <header className="App-header">
          <h1>El Frenesí Familiar</h1>
      </header>
      <div className="navbar">
        <Button variant="contained" href="panel">Panel</Button>
        <Button variant="contained" href="masProximo">Más Próximo</Button>
        <Button variant="contained" href="themas">Themas</Button>
      </div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
