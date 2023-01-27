import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/2`)
            .then(response => {
                this.props.setProfile(response.data)
            })
    }
    render() {
        return <Profile {...this.props}/>
    }
}
let mapStateToProps = (state) => {
    return (
        {
            profile: state.profilePages.profile
        }
    )
}



export default connect(mapStateToProps, {setProfile})(ProfileContainer)