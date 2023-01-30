import React from "react";
import Header from "./Header";
import {authorization} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
       this.props.authorization()

    }

    render() {
       return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return (
        {
            isAuth: state.auth.isAuth,
            login: state.auth.login,
        }
    )
}

export default connect(mapStateToProps, {authorization})(HeaderContainer)