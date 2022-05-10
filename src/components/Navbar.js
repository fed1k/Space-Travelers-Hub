import react from "react";
import planet  from '../img/planet.png'

const Navbar = () => {
    return (
        <nav>
            <div>
                <img className="logo-img" src={planet} alt="logo" />
                <h1>Space Travellers' Hub</h1>
            </div>
            <div>
                <ul>
                    <li>Rockets</li>
                    <li>Missions</li>
                    <li>My Profile</li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;