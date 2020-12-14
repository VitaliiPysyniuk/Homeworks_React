import React, {Component} from 'react';
import '../styles/MainComp.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import PostsComponent from "./PostsComponent";

class MainComponent extends Component {
    render() {
        return (
            <Router>
                <div className={'links'}>
                    <h2>All links</h2>
                    <Link to={'/posts'}>All posts</Link>
                    <Link to={'/comments'}>All comments</Link>
                </div>

                <Switch>
                    <Route path={'/posts'} render={() => {
                        return (<div className={'all-posts'}><PostsComponent/></div>);
                    }}/>
                    {/*<Route/>*/}
                    {/*<Route path={'/comments'} exact={true} render={() => {*/}
                    {/*    return (<div className={'all-comments'}><PostsComponent/></div>);*/}
                    {/*}}/>*/}
                    {/*<Route/>*/}

                </Switch>
            </Router>


        );
    }
}

export default MainComponent;