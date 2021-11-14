
//Stateless Functional Component
const Navbar = ({totalCouters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar{" "}
            
                <span className="badge badge-secondary badge-pill">{totalCouters}</span>
            </a>
            
        </nav>
    );
}

export default Navbar;