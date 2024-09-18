import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/HomeComponent/Home';
import HomePage from '../src/pages/HomePage';
import SearchPage from '../src/pages/SearchPage';
import LibraryPage from '../src/pages/LibraryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="library" element={<LibraryPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;