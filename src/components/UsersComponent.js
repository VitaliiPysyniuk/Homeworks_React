import React, {Component} from 'react';
import UsersService from "../Services/UsersService";
import '../styles/UsersComponentStyles.css'
import UserComponent from "./UserComponent";
import {Route, withRouter} from 'react-router-dom';
import UserDetailsComponent from "./UserDetailsComponent";
import PostsComponent from "./PostsComponent";

class UsersComponent extends Component {

    usersService = new UsersService();
    state = {user: null, users: []}

    async componentDidMount() {
        await this.usersService.getAllUsers(3).then(users => this.setState({users}));
    }

    render() {
        let {match: {url}} = this.props;
        return (
            <div>
                <div className={'users-div'}>
                    <div className={'all-users'}>
                        <h2>All users</h2>
                        {this.state.users.map(user => <UserComponent user={user}/>)}
                    </div>
                    <div className={'user-details'}>
                        <h2>User details</h2>
                        <Route path={`${url}/:id`} render={(props) => {
                            let {match: {params: id}} = props;
                            return <UserDetailsComponent key={id.id}/>
                        }}/>
                    </div>
                </div>
                <div className={'user-posts'}>
                    <h2>User posts</h2>
                    <Route path={`${url}/:id/posts`} render={(props) => {
                        let {match: {params: id}} = props;
                        return <PostsComponent key={`${id.id}${id.id}`}/>
                    }}/>
                </div>
            </div>
        );
    }
}

export default withRouter(UsersComponent);