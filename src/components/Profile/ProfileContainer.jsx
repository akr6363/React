import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {withAuthNavigate} from "../HOC/withAuthNavigate";

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
        this.props.getProfile(profileId)

    }
    render() {
        return <Profile {...this.props}/>
    }
}

let AuthNavigateComponent = withAuthNavigate(ProfileContainer)


let mapStateToProps = (state) => ({
            profile: state.profilePages.profile,
        })


export default connect(mapStateToProps, {getProfile})(withRouter(AuthNavigateComponent))
