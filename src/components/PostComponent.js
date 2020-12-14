import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../styles/PostsComents.css'

class PostComponent extends Component {
    render() {
        let {post, match:{url}} = this.props;

        return (
            <div>
                {post.id} -|- {post.title} -|- <Link to={`${url}/${post.id}`} className={'button'}>Details</Link>
            </div>
        );
    }
}

export default withRouter(PostComponent);