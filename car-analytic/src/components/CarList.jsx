import React from "react";
import carData from "../carData/taladrod-cars.min.json";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import CarCard from "./CarCard";


const CarList = ({updateHighlightedCars}) => {
    const brandMapping = carData.MMList.reduce((acc,item) => {
        acc[item.mkID] = item.Name;
        return acc
    }, {});

    return (
        <div className="container-fluid mt-5 bg-light">
            <h2 className="mb-4">Available Cars</h2>
            <div className="d-flex flex-wrap justify-content-start">
                {carData.Cars.map((car) => (
                    <CarCard key={car.Cid} car={car} brandName={brandMapping[car.MkID]} updateHighlightedCars={updateHighlightedCars} />
                ))}
            </div>
        </div>
    )
};

export default CarList;