import CarTable from "../components/CarTable";

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <a className="dashboard btn btn-light" href="/">Dashboard</a>
      </div>
    </nav>
    )
  }

function QueryPage() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <CarTable />
            </div>
        </>
    );
}

export default QueryPage