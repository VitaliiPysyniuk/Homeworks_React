class PostsService {
    url = 'https://jsonplaceholder.typicode.com/users';

    getAllPost(id) {
        let {id: userId} = id
        return fetch(`${this.url}/${userId}/posts`)
            .then(value => value.json())
            .then(posts => posts);
    }
}

export default PostsService