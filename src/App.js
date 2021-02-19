import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import ProgramsPage from "./pages/programs";
import ResidentsPage from "./pages/residents";
import HomePage from "./pages/home";

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Link to="/" className="navbar-brand">
          Welbi
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/programs" className="nav-link">
              Programs
            </Link>
            <Link to="/residents" className="nav-link">
              Residents
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/residents">
          <ResidentsPage />
        </Route>
        <Route path="/programs">
          <ProgramsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
