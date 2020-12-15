import React, {Component} from 'react';
import UsersService from "../Services/UsersService";
import '../styles/UserDetailsStyle.css'
import {withRouter} from 'react-router-dom';

class UserDetailsComponent extends Component {

    state = {user: null};
    usersServices = new UsersService();


    async componentDidMount() {
        let {match: {params: {id}}} = this.props;
        await this.usersServices.getUserById(id).then(user => this.setState({user: user}));
    }

    render() {
        return (

            <div>
                { this.state.user && <div>
                    <p><b>User id:</b> {this.state.user.id}</p>
                    <p><b>Name: </b> {this.state.user.name}</p>
                    <p><b>Username: </b> {this.state.user.username}</p>
                    <p><b>E-mail: </b> {this.state.user.email}</p>
                    <p><b>Phone: </b> {this.state.user.phone}</p>
                    <p><b>Website: </b> {this.state.user.website}</p>
                </div>}
            </div>
        );
    }
}

export default withRouter(UserDetailsComponent);