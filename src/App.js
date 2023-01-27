import './App.css';
import { ThemeProvider } from './Context/Context';
import Layout from './Layout/Layout.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Show from './Components/Show';
import Add from './Components/Add';
import Box from './Components/Box'
import Card from './Components/Card'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter >
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path='show' element={<Show />}/>
                    <Route path="add" element={<Add />} />
                    <Route path='box' element={<Box />} />
                    <Route path='creditcard' element={<Card />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
