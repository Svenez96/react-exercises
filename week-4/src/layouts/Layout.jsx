import { Outlet, Link } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <div>
                <nav>
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/about">About</Link>
                </nav>
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default Layout