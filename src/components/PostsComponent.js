import React, {Component} from 'react';
import PostComponent from "./PostComponent";
import '../styles/style.css'
import CheckedPostComponent from "./CheckedPostComponent";

class PostsComponent extends Component {

    constructor() {
        super();
        this.state = {posts: [], checkedPosts: []};
    }

    checkPost = (id) => {
        let {posts, checkedPosts} = this.state;
        let postIndex = posts.findIndex(value => value.id === id);
        checkedPosts.push(posts.splice(postIndex, 1));

        checkedPosts.sort((a, b) => a.id - b.id);

        this.setState({posts: posts, checkedPosts: checkedPosts});
    }

    returnPost = (id) => {
        let {posts, checkedPosts} = this.state;
        let postIndex = checkedPosts.findIndex(value => value.id === id);
        posts.push(checkedPosts.splice(postIndex, 1));

        posts.sort((a, b) => a.id - b.id);
        checkedPosts.splice(postIndex, 1);

        this.setState({posts: posts, checkedPosts: checkedPosts});
    }

    removePost = (id) => {
        let {checkedPosts} = this.state;
        let removeIndex = checkedPosts.findIndex(value => value.id === id)

        checkedPosts.splice(removeIndex, 1);

        this.setState(checkedPosts);
    }


    render() {
        let {posts, checkedPosts} = this.state;
        return (
            <div className={"main"}>
                <div className={"main-child"}>
                    <h2>All posts</h2>
                    {
                        posts
                            .map(value => <PostComponent user={value} onClick={this.checkPost} key={value.id}/>)
                    }
                </div>
                <div className={"main-child"}>
                    <h2>Checked posts</h2>
                    {
                        checkedPosts
                            .map(value => <CheckedPostComponent user={value} remEvent={this.removePost} retEvent={this.returnPost} key={value.id}/>)
                    }
                </div>
            </div>
        );
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => this.setState({posts: posts.slice(0, 15)}));
    }
}

export default PostsComponent;