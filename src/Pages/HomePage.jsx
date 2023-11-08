import { Link } from 'react-router-dom'

export function Header()
{
    return(
        <>
            <nav className="nav">
                <Link className="nav-item" to="/">HomePage</Link>

                <Link className="nav-item" to="./Page1">Page1</Link>

                <Link className="nav-item" to="./Page2">Page2</Link>
                
                <Link className="nav-item" to="./Page3">Page3</Link>
            </nav>

            
        </>
    )
}