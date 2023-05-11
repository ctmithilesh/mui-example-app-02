import logo from './logo.svg';
import './App.css';
import Business from './Components/Business';
import BusinessContainer from './Containers/BusinessContainer';
import { Route, Routes } from 'react-router-dom';
import TechContainer from './Containers/TechContainer';
import FeedbackContainer from './Containers/FeedbackContainer';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<BusinessContainer />}/>
        <Route exact path='/tech' element={<TechContainer />}/>
        <Route exact path='/feedback-form' element={<FeedbackContainer />}/>
      </Routes>
    </>
  );
}

export default App;
