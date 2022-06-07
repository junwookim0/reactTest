import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    const activeStyle = {
        color: "green",
        fontWeight: "bold",
    };
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <NavLink
                to={`/`}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}    
                >
                Home
                </NavLink> |
                <NavLink
                to={`/about`}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}    
                >
                About
                </NavLink> |
                <NavLink
                to={`/boardlist`}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}    
                >
                Board
                </NavLink>
        <main>
            <Outlet></Outlet>
        </main>
            <button onClick={goBack}>뒤로가기</button>
        
        </div>
    );
};

export default Layout;
