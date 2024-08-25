import 'bootstrap/dist/css/bootstrap.min.css'
import CarList from '../components/CarList';
import { Link } from 'react-router-dom';
import CarCard from '../components/CarCard';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <Link className="dashboard btn btn-light" to="/">Dashboard</Link>
      </div>
    </nav>
  )
}
function HighlightedPage({ highlightedCars }) {
  const brandMapping = highlightedCars.reduce((acc, item) => {
    acc[item.mkID] = item.Name;
    return acc
  }, {});
  return (
    <>
      <div>
        <Navbar />
        <div className="d-flex flex-wrap justify-content-start">
          {highlightedCars.map((car) => (
            <CarCard key={car.Cid} car={car} brandName={brandMapping[car.MkID]} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HighlightedPage