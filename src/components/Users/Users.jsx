import React from 'react';
import { Paginate } from '../common/Paginate/Paginate';
import User from './User';

const Users = ({
    users, 
    totalUsersCount, 
    currentPage, 
    pageSize, 
    onPageChanged, 
    followingInProgress, 
    follow, 
    unfollow
}) => {

    return (
        <div>
            <Paginate
            totalCount={totalUsersCount} 
            currentPage={currentPage}
            pageSize={pageSize} 
            onPageChanged={onPageChanged} 
            />
            
            {
                users.map(user => <div key={user.id}>
                    <User user={user} follow={follow} unfollow={unfollow} followingInProgress={followingInProgress} />
                </div>)
            }
        </div>
    );
}

export default Users;