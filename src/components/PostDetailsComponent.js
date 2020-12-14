import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import PostService from "../services/PostService";

class PostDetailsComponent extends Component {

    postService = new PostService()
    state = {post: null};

    render() {
        let {match : {params : {id}}} = this.props;

        let {post} = this.state;


        console.log("-------Render");
        console.log("Render", id, post);
        return (
            <div>
                <h2>Post {id} details</h2>
                {(post !== null) && <div>
                    UserId: {post.userId} <br/>
                    Id: {post.id} <br/>
                    Title: {post.title}
                </div>}
                </div>

        );
    }

    async componentDidMount() {
        console.log("\n-------DidMount");
        let {match : {params : {id}}} = this.props;
        id = parseInt(id);
        let post1
        await this.postService.getPostById(id).then(post => post1 = post);
        console.log("DidMount", post1);
        this.setState({post: post1});

    }


}

export default withRouter(PostDetailsComponent);