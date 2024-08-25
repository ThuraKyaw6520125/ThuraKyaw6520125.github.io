import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyDashboardPage from './pages/DashboardPage.jsx'
import HighlightedPage from './pages/HighligtedPage.jsx'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarTable from './components/CarTable.jsx'
import QueryPage from './pages/QueryPage.jsx'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: MyDashboardPage(),
//   },
//   {
//     path: "/highlight",
//     element: HighlightedPage(),
//   },
//   {
//     path: "/querypage",
//     element: QueryPage(),
//   }
// ]);

export default function Main() {

  const [highlightedCars, setHighlightedCars] = useState([]);

  let updateHighlightedCars = (car) => {
    let currentCars = highlightedCars;
    let updatedCars = [...currentCars, car]
    setHighlightedCars(updatedCars)
  }

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<MyDashboardPage setValue={setValue} />} />
        <Route path="/highlight" element={<HighlightedPage value={value} />} /> */}
        <Route path="*" element={<MyDashboardPage updateHighlightedCars={updateHighlightedCars}/>} />
        <Route path="/highlight" element={<HighlightedPage highlightedCars={highlightedCars}/>} />
        <Route path="/querypage" element={<QueryPage/>} />

      </Routes>
    </Router>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
    {/* <RouterProvider router={router} /> */}
  </StrictMode>,
)
