
//Stateless Functional Component
const Navbar = ({totalCouters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a style={{userSelect:'none'}} className="navbar-brand" href="/">
                Navbar{" "}
            
                <span style={{userSelect:'none'}} className="badge badge-secondary badge-pill">{totalCouters}</span>
            </a>
            
        </nav>
    );
}

export default Navbar;