
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/user" element={<Details />}>
            <Route path=":userId" element={<Details />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
