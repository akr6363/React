
import './App.css';
import Header from './components/Header/Header';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                    <Route path='/users/*' element={<UsersContainer/>}/>
                    <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
