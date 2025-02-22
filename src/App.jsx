import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Statistics from './Components/Statistics';
<<<<<<< HEAD

import Cards from './Components/cards';  
import Profile from './Components/Profile';
import Scanner from './Components/Scanner';

=======
import Cards from './Components/cards';  
import Profile from './Components/Profile';
import Scanner from './Components/Scanner';
>>>>>>> 168b440 (created a scanner page)

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}  />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/cards" element={<Cards />} />
<<<<<<< HEAD

        <Route path="/Profile" element={<Profile />} />
        <Route path="/scanner" element={<Scanner />} />
        
=======
        <Route path="/Profile" element={<Profile />} />
        <Route path="/scanner" element={<Scanner />} />
>>>>>>> 168b440 (created a scanner page)
      </Routes>
    </Router>
  );
};

export default App;
