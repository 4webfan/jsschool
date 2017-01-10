import React, {Component, PropTypes} from 'react';

export default class Comment extends Component {
    static protTypes = {
        comment: PropTypes.object.isRequired
    };

    constructor(){
        super();
    };

    render(){
        const {name, message, timestamp} = this.props.comment;
        const time = (new Date(timestamp)).toLocaleDateString() +' '+ (new Date(timestamp)).toLocaleTimeString();

        return (
            <li className="comments-list__item">
                <div className="comments-list__row">
                    <div className="comments-list__col"><span className="comments-list__name">{name}</span></div>
                    <div className="comments-list__col"><span className="comments-list__date">{time}</span></div>
                </div>
                <div className="comments-list__body">
                    {message}
                </div>
            </li>
        )

    }
}