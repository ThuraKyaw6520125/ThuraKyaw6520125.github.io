import React from 'react';
import carData from '../carData/taladrod-cars.min.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarTable = () => {
  // Mapping brand IDs to brand names
  const brandMapping = carData.MMList.reduce((acc, item) => {
    acc[item.mkID] = item.Name;
    return acc;
  }, {});

  // Aggregating car data by brand and model
  const brandModelCount = carData.Cars.reduce((acc, car) => {
    const brandName = brandMapping[car.MkID];
    const modelName = car.Model;

    if (!acc[brandName]) {
      acc[brandName] = { total: 0, models: {} };
    }

    acc[brandName].total += 1;

    if (!acc[brandName].models[modelName]) {
      acc[brandName].models[modelName] = 0;
    }

    acc[brandName].models[modelName] += 1;

    return acc;
  }, {});

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Car List</h2>
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th scope="col">Brand</th>
            <th scope="col">Model</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(brandModelCount).map((brandName) => (
            <React.Fragment key={brandName}>
              {/* Row showing the total number of cars in this brand */}
              <tr>
                <td colSpan="3"><strong>{brandName} = {brandModelCount[brandName].total}</strong></td>
              </tr>
              {/* Rows showing the number of each model in this brand */}
              {Object.keys(brandModelCount[brandName].models).map((modelName) => (
                carData.Cars.filter(car => brandMapping[car.MkID] === brandName && car.Model === modelName).map((car, index) => (
                  <tr key={`${car.Cid}-${index}`}>
                    <td>{index === 0 ? `${brandName} / ${modelName} = ${brandModelCount[brandName].models[modelName]}` : ''}</td>
                    <td>{car.Model}</td>
                    <td>{car.Prc} Baht</td>
                  </tr>
                ))
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarTable;

