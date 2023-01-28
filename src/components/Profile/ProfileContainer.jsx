import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";


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
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/${profileId}`)
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

export default connect(mapStateToProps, {setProfile})(withRouter(ProfileContainer))
