class UsersService {
    url = 'https://jsonplaceholder.typicode.com/users';

    getAllUsers() {
        return fetch(this.url)
            .then(value => value.json())
            .then(users => users);
    }

    getUserById(userId) {
        return fetch(this.url)
            .then(value => value.json())
            .then(users => users.find(value => value.id == userId));
    }
}

export default UsersService