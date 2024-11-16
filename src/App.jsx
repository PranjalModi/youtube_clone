import React, { useState } from 'react'; // Import useState
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';

const App = () => {
  // Correcting the hook name from userState to useState
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      {/* Passing setSidebar as a prop to Navbar */}
      <Navbar setSidebar={setSidebar} />
      <Routes>
        {/* Passing sidebar state as a prop to Home */}
        <Route path='/' element={<Home sidebar={sidebar} />} />
        {/* Route for Video component */}
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
