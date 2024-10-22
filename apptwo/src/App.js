
import './App.css';
import { Route,Routes } from 'react-router-dom';

const Home = ()=><h1>Home page</h1>;
const AboutUs = ()=><h1>About Us page</h1>;
function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='about' element={<AboutUs/>}/>
      </Routes>
  );
}

export default App;
