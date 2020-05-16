import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import * as axios from 'axios';
import {setAuthUserData} from './../../redux/auth-reducer';
import { usersAPI } from '../../api/api';

class HeaderContainer extends React.Component {
    
    componentDidMount() {
        usersAPI.authMe().then(response => {
            let { id, email, login} = response.data;
            if (response.resultCode === 0) {
                this.props.setAuthUserData(id, email, login);
            }
        })
        
    }

    render() {
        return <>
            <Header {...this.props} />
        </>
    }
}

const mapStateToProps  = (state) => {
    return {
        isAuth : state.auth.isAuth,
        login : state.auth.login
    }
    
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);