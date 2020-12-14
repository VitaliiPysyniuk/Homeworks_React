import React, {Component} from 'react';
import PostService from "../services/PostService";
import PostComponent from "./PostComponent";
import PostDetailsComponent from "./PostDetailsComponent";
import '../styles/PostsComents.css'
import {Switch, Route, withRouter} from "react-router-dom";

class PostsComponent extends Component {

    postService = new PostService();
    state={posts: []}

    async componentDidMount() {
        await this.postService.getAllPosts()
            .then(posts => this.setState({posts}))
    }

    render() {
        let {posts} = this.state;
        return (
            <div>
                <div className={'all'}>
                    <h2>All posts</h2>
                    {
                        posts.map(value => <PostComponent post={value} key={value.id}/>)
                    }
                </div>
                <div className={'details'}>
                    <Switch>
                        <Route path={`/posts/:id`} exact={true} render={(props) => {
                            let {match : {params : {id}}} = props;
                            console.log("\n\n\nPostDetailsComponent execute ", id);

                            return <PostDetailsComponent key={id}/>
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(PostsComponent);