import React, {Component} from 'react';
import UsersServices from "../UsersServices";

class UserComponent extends Component {

    state = {user: null}
    usersServices = new UsersServices();

    async componentDidMount() {
        let {userId} = this.props;
        await this.usersServices.getUserById(userId).then(user => this.setState({user}));
    }

    render() {
        return (
            <div>
                {this.state.user && <div className={'user-div'}>
                    <h3>Searched user</h3>
                    <b>User id:</b> {this.state.user.id} <br/>
                    <b>Name:</b> {this.state.user.name} <br/>
                    <b>Username:</b> {this.state.user.username} <br/>
                    <b>E-mail:</b> {this.state.user.email}
                </div>}
            </div>
        );
    }
}

export default UserComponent;