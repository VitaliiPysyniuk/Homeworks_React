import React, {Component} from 'react';
import '../styles/style.css'

class PostComponent extends Component {
    render() {
        let {user, onClick} = this.props;
        return (
            <div>
                {user.id} - {user.title}
                <button onClick={() => onClick(user.id)}>Check post</button>
            </div>
        );
    }
}

export default PostComponent;