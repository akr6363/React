import StoreContext from "../../storeContext";
import Navbar from "./Navbar";

const NavbarContainer = (props) => {
    return (
        <StoreContext.Consumer>
            { store => {
                return <Navbar navBar = {store.getState().navBar}/>
            }
        }
        </StoreContext.Consumer>
    );
}

export default NavbarContainer