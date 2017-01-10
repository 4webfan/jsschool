import React, {Component, PropTypes} from 'react';
import Menu from "../../components/Menu";

import CommentsForm from "./components/CommentsForm";
import CommentsList from "./components/CommentsList"
import comments from "../../store/comments";

class Comments extends Component {

    constructor() {
        super();
        this.state = {
            comments: comments || []
        };

    };

    addComment = (comment) => {
        this.setState({
            comments: this.state.comments.concat( comment )
        });

    };


    render(){

        return (
            <div className = "mainContainer">
                <Menu />
                <div className="mainContent Comment">
                    <h1>Comments list</h1>

                    <CommentsForm addComment = {this.addComment} />
                    <CommentsList comments = {this.state.comments}/>
                </div>
            </div>
        )
    }
}

export default Comments;