export default class UsersServices {
    url = 'https://jsonplaceholder.typicode.com/users';

    async getUserById(id) {
        return await fetch(this.url)
            .then(value => value.json())
            .then(users => {
                return users.find(value => value.id == id);
            });
    }
}