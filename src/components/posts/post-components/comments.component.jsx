import React, { Component } from 'react';
import Comment from './comment.component';

class Comments extends Component {
    render() {
        const comments = this.props.comments;

        return (
            <>
                <div className="d-flex row-h1 flex-column">
                {
                    comments.map( comment => {
                        if( comment.parent_id === null ){
                            return <Comment
                                key = { comment.id }
                                id = { comment.id }
                                parent_id = { comment.parent_id }
                                name = { comment.name }
                                imgSrc = { comment.imgSrc }
                                comment = { comment.comment }
                                comments = { comments }
                            />
                        }
                    })
                }
                </div>
            </>
        );
    }
}

export default Comments;