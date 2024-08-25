import React , {useState} from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import carData from "../carData/taladrod-cars.min.json";
import CarList from "../components/CarList.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" >Dashboard</a>
      <Link className="highlight btn btn-light" to="/highlight">Highlight</Link>
      <a className="queryPage btn btn-light" href="/queryPage">Query</a>
    </div>
  </nav>
  )
}

const createBrandMapping = (MMList) => {
    return MMList.reduce((acc, item) => {
      acc[item.mkID] = item.Name;
      return acc;
    }, {});
  };

const countCarsByBrand = (cars, brandMapping) => {
  return cars.reduce((acc,car) => {
    const brandName = brandMapping[car.MkID];
    acc[brandName] = (acc[brandName] || 0) +1;
    return acc;
  }, {});
}

const CarBrandButtons = () => {
  const cars = carData.Cars;
  const brandMapping = createBrandMapping(carData.MMList);
  const carCounts = countCarsByBrand(cars, brandMapping);

  return (
    <div className="d-flex overflow-auto">
      {Object.keys(carCounts).map((brand) => (
        <Link to={`/cars/${brand}`} key={brand} className="rounded-pill btn btn-secondary m-1">
          <div>
            <p className="fs-8" style={{ fontSize: '10px' }}>{brand} ({carCounts[brand]})</p> {/* Font size set to 20px */}
          </div>
        </Link>
      ))}
    </div>
    
  );
};

// const CarList = () => {
//   const {mkID} = useParams();
//   const filteredCars = carData.Cars.filter(car => {
//     const brandName = carData.MMList.find(brand => brand.mkID === parseInt(mkID, 10))?.Name;
//     return brandName === mkID;
//   });

//   return (
//     <div>
//       <ul>
//         {filteredCars.map(car => (
//           <li key={car.Cid}>
//             {car.Model} - {car.NameMMT} - {car.Prc} Baht
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

function MyDashboardPage({updateHighlightedCars}) {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Routes>
        {/* <Route path="/" element={<CarBrandButtons />} /> */}
      </Routes>
      <div>
        <CarList updateHighlightedCars={updateHighlightedCars}/>
        
      </div>
      <p>Created and designed by Thura Kyaw- 6520125</p>
    </>
  );
}
  

export default MyDashboardPage