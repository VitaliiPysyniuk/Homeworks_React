import React, {Component} from 'react';
import './FormComponentStyle.css'
import UsersServices from "../UsersServices";
import UserComponent from "./UserComponent";

class FormComponent extends Component {

    state = {submitted: false, userId: ''}

    inputRef = React.createRef();
    buttonRef = React.createRef();

    onSubmitAction = (e) => {
        e.preventDefault();
        this.setState({submitted: true})
    }

    onInputAction = () => {
        let userId = +this.inputRef.current.value;
        this.setState({submitted: false})
        1 <= userId && userId <= 10 ?
            this.buttonRef.current.removeAttribute('disabled')
            : this.buttonRef.current.setAttribute('disabled', true)
        this.setState({userId});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitAction}>
                    Enter user id:
                    <input ref={this.inputRef} onInput={this.onInputAction} type={'number'} value={this.state.userId}/>
                    <button ref={this.buttonRef}>Find user</button>
                </form>
                {this.state.submitted && <UserComponent userId={this.state.userId} key={this.state.userId}/>}
            </div>
        );
    }
}

export default FormComponent;