import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {withAuthNavigate} from "../HOC/withAuthNavigate";
import {compose} from "redux";

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

export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    withAuthNavigate
)(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.profilePages.profile,
})


