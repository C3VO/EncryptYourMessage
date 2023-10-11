import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="flex bg-blue-500 font-bold justify-center">
            <nav className="flex justify-around">
                <ul className="inline-flex items-center ">
                    <li className="flex " >
                        <NavLink exact="true" className="link" to="/">Home</NavLink>
                    </li>
                    <li className="" >
                        <NavLink className="link" to="/create">Create</NavLink>
                    </li>
                    <li className="" >
                        <NavLink className="link" to="/note">Note</NavLink>
                    </li>
                    <li className="">
                        <NavLink className="link" to="/about">About</NavLink>
                    </li>
                </ul >
            </nav >
        </div >
    );
}

export default Header;
