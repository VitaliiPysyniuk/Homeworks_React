import React, {Component} from 'react';

class PostComponent extends Component {
    render() {
        let {post} = this.props;
        return (
            <div className={'post-div'}>
                <p><b>User id: </b>{post.userId}</p>
                <p><b>Post id: </b>{post.id}</p>
                <p><b>Post title: </b>{post.title}</p>
                <p><b>Post body: </b>{post.body}</p>
            </div>
        );
    }
}

export default PostComponent;