import React from "react";
import {connect} from "react-redux";
import {
    deleteFollow,
    follow, getUsers, postFollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    unfollow,

} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthNavigate} from "../HOC/withAuthNavigate";
import Dialogs from "../Dialogs/Dialogs";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.getUsers(page, this.props.pageSize)

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   isFollowingProgress={this.props.isFollowingProgress}
                   deleteFollow = {this.props.deleteFollow}
                   postFollow = {this.props.postFollow}/>

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPages.users,
        pageSize: state.usersPages.pageSize,
        totalUsersCount: state.usersPages.totalUsersCount,
        currentPage: state.usersPages.currentPage,
        isFetching: state.usersPages.isFetching,
        isFollowingProgress: state.usersPages.isFollowingProgress,

    }
}

let action = {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowingProgress,

    getUsers,
    deleteFollow,
    postFollow
}

let AuthNavigateComponent = withAuthNavigate(UsersContainer)

export default connect(mapStateToProps, action)(AuthNavigateComponent)
