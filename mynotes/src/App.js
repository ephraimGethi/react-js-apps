import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import NoteListPage from './pages/NoteListPage';
import NotePage from './pages/NotePage';

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className='app'>
        <Header />
        <Routes>
          <Route path='/' exact element={<NoteListPage />} />
          <Route path='/note/:id' element={<NotePage/>}/>
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;