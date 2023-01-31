
import './App.css';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/LoginPage/Login";

function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                    <Route path='/users/*' element={<UsersContainer/>}/>
                    <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                    <Route path='/login/*' element={<Login/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
