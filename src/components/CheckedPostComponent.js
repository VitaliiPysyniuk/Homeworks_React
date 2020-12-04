import React, {Component} from 'react';

class CheckedPostComponent extends Component {
    render() {
        let {user, remEvent, retEvent} = this.props;
        return (
            <div>
                {user.id} - {user.title}
                <button onClick={() => retEvent(user.id)}>Return post</button>
                <button onClick={() => remEvent(user.id)}>Remove post</button>
            </div>
        );
    }
}

export default CheckedPostComponent;