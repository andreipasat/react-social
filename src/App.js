import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import {initializeApp} from './redux/app-reducer'
import {connect} from 'react-redux'
import Preloader from './components/common/Preloader/Preloader';
import store from "./redux/redux-store";
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/users' render={ () => <UsersContainer/> }/>
    
                    <Route path='/profile/:userId?' render={ () => <ProfileContainer/>} />
                    <Route path='/dialogs' render={ () => <DialogsContainer /> }/>
                    <Route path='/news' render={ () => <News/> }/>
                    <Route path='/music' render={ () => <Music/> }/>
                    <Route path='/settings' render={ () => <Settings/> }/>
                    <Route path='/login' render={ () => <Login/> }/>
                    
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    initialized : state.app.initialized
})


let AppContainer = connect(mapStateToProps,{initializeApp})(App)

let MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default MainApp