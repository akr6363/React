import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {usersAPI} from "../../api/api";


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let params = useParams();
        return (
            <Component
                {...props}
                router={{params}}
            />
        );
    }
    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let profileId = this.props.router.params.userId;
        if (!profileId) {
            profileId = 2
        }
        usersAPI.getProfile(profileId)
            .then(data => {
                this.props.setProfile(data)
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

export default connect(mapStateToProps, {setProfile})(withRouter(ProfileContainer))
