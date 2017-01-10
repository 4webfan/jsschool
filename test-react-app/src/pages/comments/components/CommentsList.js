import React, {Component, PropTypes} from 'react';
import Comment from './Comment';

export default class CommentsList extends Component {
    static propTypes = {

    };

    constructor(){
        super();

    };

    render(){

        const comments = this.props.comments;

        return (
            <div className="comments">
                <h3 className="comments__title">Comments</h3>
                <ul className="comments-list">
                    {comments.map((item, i ) => <Comment comment = {item} key={i} />)}
                </ul>
            </div>
        )
    };
}