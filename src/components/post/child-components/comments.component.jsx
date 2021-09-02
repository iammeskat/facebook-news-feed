import React, { Component } from 'react';
import Comment from './comment.component';
import CreateComment from './create-comment.component';

class Comments extends Component {
    render() {
        const comments = this.props.comments;
        // comments.reverse();

        return (
            <div class="comment-section" id = { "commentSection" + this.props.postIndex }>
                <div className="d-flex row-h1 flex-column comments">
                {
                    comments.map( comment => {
                        if( comment.parent_id === null ){
                            return <Comment
                                key = { comment.id+'-'+Math.random() }
                                commentId = { comment.id }
                                parent_id = { comment.parent_id }
                                commenterID = { comment.userID }
                                postIndex = { this.props.postIndex }
                                name = { comment.name }
                                imgSrc = { comment.imgSrc }
                                comment = { comment.comment }
                                comments = { comments }
                                userID = { this.props.userID }
                                updateComment = { this.props.updateComment }
                                deleteComment = { this.props.deleteComment }
                                createComment = { this.props.createComment}
                                userImg = { this.props.userImg }
                            />
                        }
                    })
                }
                </div>
                
                <CreateComment
                    postIndex = { this.props.postIndex }
                    createComment = { this.props.createComment}
                    userImg = { this.props.userImg }
                />
            </div>
        );
    }
}

export default Comments;