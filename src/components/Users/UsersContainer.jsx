import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, setCurrentPage, toggleIsFollowingProgress, requestUsers } from '../../redux/users-reducer'
import Preloader from '../common/Preloader/Preloader'
import Users from './Users'
import { compose } from 'redux'
import {getUsers, getUsersSuperSelector, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors'

class UsersContainer extends React.Component {

    componentDidMount() {
        let {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        let {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize);
        this.props.setCurrentPage(pageNumber);
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader/> : null}
            <Users 
            totalUsersCount={this.props.totalUsersCount} 
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
            />
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        //users : getUsersSuperSelector(state),
        users : getUsers(state),
        pageSize : getPageSize(state),
        totalUsersCount : getTotalUsersCount(state),
        currentPage : getCurrentPage(state),
        isFetching : getIsFetching(state),
        followingInProgress : getFollowingInProgress(state)
    }  
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleIsFollowingProgress, requestUsers})
)(UsersContainer)

