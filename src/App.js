import './App.css';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import CreateModule from './components/CrudModule';
function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/crud' element={<CreateModule/>}/>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
