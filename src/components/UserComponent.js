import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../styles/UserComponentStyle.css'

class UserComponent extends Component {
    render() {
        let {user, match: {url}} = this.props

        return (
            <div className={'user-div'}>
                <span>User id: </span>  {user.id} <span>Name: </span> {user.name} <span>Username: </span>{user.username}
                <Link to={`${url}/${user.id}`} className={'link-1'} >Details</Link>
                <Link to={`${url}/${user.id}/posts`} className={'link-2'}>Posts</Link>
            </div>
        );
    }
}

export default withRouter(UserComponent);