import { Route, Routes, Link } from "react-router-dom"
import './nav.css' 

export default function Nav() {
    return(
        <nav>
            <Link className="nav-link" to="/angel">Angel</Link>
            <Link className="nav-link" to="/michael">Michael</Link>
            <Link className="nav-link" to="/shavon">Shavon</Link>
            <Link className="nav-link" to="/kai">Kai</Link>
        </nav>
    )
}