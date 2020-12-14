export default class PostService {
    url = 'http://jsonplaceholder.typicode.com/posts';

    getAllPosts() {
        return fetch(this.url)
            .then(value => value.json())
            .then(posts => posts.slice(0, 10));
    }

    getPostById(id) {
        return fetch(this.url)
            .then(value => value.json())
            .then(posts => { return posts.find(value => value.id === id)});
    }
}