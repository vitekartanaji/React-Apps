
const NavBar = () => {
  return (
    <>
    <div className="container-fluid">
    <div className="row">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="https://getbootstrap.com/">
                <img src="" alt="Bootstrap" width="30" height="30"></img>React App
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link">Products</a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link">Users</a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link">Topic</a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link">React Layout</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown link</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                </ul>
            </div>
            <div className="col-lg-3 col-sm-12 mt-sm-2">
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
            </div>
        </nav>
    </div>
    </div>
    </>
  );
};

export default NavBar;
