import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PostsService from "../Services/PostsService";
import PostComponent from "./PostComponent";
import '../styles/postsComponentStyle.css'

class PostsComponent extends Component {

    state = {posts: []};
    postsService = new PostsService()

    async componentDidMount() {
        let {match: {params: id}} = this.props;
        await this.postsService.getAllPost(id).then(posts => this.setState({posts}));
    }

    render() {
        return (
            <div className={'posts-div'}>
                {this.state.posts.map(post => <PostComponent post={post}/>)}
            </div>
        );
    }
}

export default withRouter(PostsComponent);