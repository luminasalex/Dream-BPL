import Logo from "../assets/logo.png";

const Nav = () => {
    return (
        <nav className="navbar bg-base-100 shadow-sm px-10">
            <div className=" container mx-auto flex justify-between">
                <img src={Logo} alt="logo" />

                <ul className="flex gap-4 items-center">
                    <li><a>Home</a></li>
                    <li><a>Fixtures</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Schedules</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;