import React, {Component, PropTypes} from 'react';

export default class CommentsForm extends Component {

    static propsTypes = {};

    constructor() {
        super();
        this.state = {
            name: '',
            message: ''
        };
    };

    changeHandler = ( key ) => ( event ) => {
        this.setState({
            [key]:  event.currentTarget.value
        });
    }

    resetForm = () => {
        this.setState({
            name: '',
            message: ''
        })
    };

    submitHandler =  (event) => {
        event.preventDefault();
        const {name, message} = this.state;
        const time = Date.now();
        this.props.addComment({name, message, timestamp:time});
        this.resetForm();
    };

    render() {
    return (
            <div className="form" onSubmit = {this.submitHandler}>
                <form action="" >
                    <div className="form__row">
                        <input type="text"
                            placeholder="name..."
                            className="form__area"
                            value = {this.state.name}
                            onChange = {this.changeHandler('name')}
                        />
                    </div>
                    <div className="form__row">
                        <textarea
                            placeholder="message..."
                            className="form__txt"
                            value = {this.state.message}
                            onChange = {this.changeHandler('message')}
                         ></textarea>
                    </div>
                    <div className="form__row">
                        <input type="submit" className="form__button" />
                    </div>
                </form>
            </div>
        )
    }
}