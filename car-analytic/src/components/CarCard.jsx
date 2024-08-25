const CarCard = ({car, brandName, updateHighlightedCars}) => {
    return (
        <div className="card" style={{maxWidth:'20%', minWidth: '10rem' , margin: '10px'}}>
            <img src={car.Img300} className="card-img-top" alt={car.Model} style={{height: '150px', objectFit: 'cover'}} />
            <div className="card-body">
                <h5 className="card-title">{car.Model}</h5>
                <p className="card-text"><strong>Brand:</strong> {brandName}</p>
                <p className="card-text"><strong>Price:</strong>{car.Prc} Baht</p>
                <button className="btn btn-primary" onClick={() => updateHighlightedCars(car)}>
                    Highlight
                </button>
            </div>
        </div>
    );
};

export default CarCard;