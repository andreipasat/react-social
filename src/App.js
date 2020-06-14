import React, {Suspense, lazy} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings"
import HeaderContainer from './components/Header/HeaderContainer'
import {initializeApp} from './redux/app-reducer'
import {connect} from 'react-redux'
import Preloader from './components/common/Preloader/Preloader';
import store from "./redux/redux-store";
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'))
const Login = lazy(() => import('./components/Login/Login'))

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
                    <Suspense fallback={<Preloader />}>
                        <Route path='/users' render={ () => <UsersContainer/> }/>
                        <Route path='/profile/:userId?' render={ () => <ProfileContainer/>} />
                        <Route path='/dialogs' render={ () => <DialogsContainer /> }/>
                        <Route path='/news' render={ () => <News/> }/>
                        <Route path='/music' render={ () => <Music/> }/>
                        <Route path='/settings' render={ () => <Settings/> }/>
                        <Route path='/login' render={ () => <Login/> }/>
                    </Suspense>
                    
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