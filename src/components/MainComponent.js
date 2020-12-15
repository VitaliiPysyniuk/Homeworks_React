import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';
import '../styles/MainComponentStyle.css'
import UsersComponent from "./UsersComponent";

class MainComponent extends Component {
    render() {
        return (
            <div className={'body'}>
                <Router>
                    <div className={'header'}>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/users'}>Users</Link>
                    </div>
                    <div className={'all-info'}>
                        <Route path={'/users'} render={() => <UsersComponent/>}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default MainComponent;