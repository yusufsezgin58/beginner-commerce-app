import './App.css';
import { ThemeProvider } from './Context/Context';
import Layout from './Layout/Layout.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Show from './Components/Show';
import Add from './Components/Add';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter >
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path='show' element={<Show />}/>
                    <Route path="add" element={<Add />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
