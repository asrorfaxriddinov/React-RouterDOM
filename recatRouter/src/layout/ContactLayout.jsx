import { NavLink,Outlet } from "react-router-dom";
import Faq from "../pages/help/Faq";

function ContactLayout(){
    return(
        <div>
            <h1 className="colors">Contact</h1>
            <p className="colors">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ab provident eum, exercitationem et eveniet ducimus ipsa magnam adipisci consequuntur repudiandae veniam officia deserunt sunt expedita fugit? Quas perferendis facilis inventore laboriosam esse animi ut at placeat incidunt voluptatibus totam vero amet, odit repellat blanditiis porro rerum aliquam ipsum ducimus.</p>
            <nav>
              <NavLink to="faq">Faq</NavLink>
              <NavLink to="form">Form</NavLink>
            </nav>

            <Outlet/>
        </div>
    )
}
export default ContactLayout;