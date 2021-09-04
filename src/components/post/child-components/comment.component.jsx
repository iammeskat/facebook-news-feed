import React, { Component } from 'react';
import CreateComment from './create-comment.component';
import EditComment from './edit-comment.component';

class Comment extends Component {
    state = {
        showEditSection: false,
        showReplySection: false,
    }

    render() {
        
        const comments = this.props.comments;
        // comments.reverse();

        const nestedComments = comments.map( comment => {
            if( comment.parent_id === this.props.commentId ) {
                return <Comment
                    key = { 'comment-' + comment.id }
                    commentId = { comment.id }
                    parent_id = { comment.parent_id }
                    postIndex = { this.props.postIndex }
                    name = { comment.name }
                    imgSrc = { comment.imgSrc }
                    comment = { comment.comment }
                    commenterID = {comment.userID}
                    userID = { this.props.userID}
                    comments = { comments }
                    updateComment = { this.props.updateComment }
                    deleteComment = { this.props.deleteComment }
                    createComment = { this.props.createComment}
                    userImg = { this.props.userImg }
                />
            }
        });

        return (
            <>
               <div className="comments d-flex row-h1 flex-row" id={ this.props.commentId }>
                    <img className="d-flex mr-3" src={ this.props.imgSrc } alt={ this.props.imgSrc } />
                    <div className="comment-body d-block">
                        <div className="comment flex-row">
                            <div className="d-flex justify-content-between">
                                <b>{ this.props.name }</b>
                                {/* <div className="dropdown">
                                    <button className="com-option" data-toggle="dropdown">
                                        <i className="fa fa-ellipsis-h"></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <button className="dropdown-item" type="button">
                                            <i className="fa fa-pencil"></i> Edit
                                        </button>
                                        <button className="dropdown-item" type="button">
                                            <i className="fa fa-pencil"></i> Edit
                                        </button>
                                        <button className="dropdown-item" type="button">
                                            <i className="fa fa-pencil"></i> Edit
                                        </button>
                                    </div>
                                </div> */}
                                {
                                    this.props.commenterID===this.props.userID ? (
                                        <div className="options">

                                            <button
                                                onClick = {
                                                    () => this.props.deleteComment(this.props.postIndex, this.props.commentId)
                                                }
                                                className="com-option"
                                            ><i className="fa fa-trash"></i> Delete</button>

                                            <button
                                                onClick = { () => this.setState({ showEditSection: true }) }
                                                className="com-option"
                                            ><i className="fa fa-edit"></i> Edit </button>

                                            <button
                                                onClick = {
                                                    () => this.setState({ showReplySection: !this.state.showReplySection })
                                                }
                                                className="com-option"
                                            ><i className="fa fa-reply"></i> Reply</button>

                                        </div>
                                    ): (
                                        <button
                                            onClick = {
                                                () => this.setState({ showReplySection: !this.state.showReplySection})
                                            }
                                            className="com-option"
                                        ><i className="fa fa-reply"></i> Reply</button>
                                    )
                                }
                                
                            </div>

                            <p>{ !this.state.showEditSection && this.props.comment }</p>

                            { this.state.showEditSection && <EditComment
                                    updateComment = { this.props.updateComment }
                                    postIndex = { this.props.postIndex }
                                    commentId = { this.props.commentId }
                                    comment = { this.props.comment }
                                    cancelEdit = { () => this.setState({ showEditSection: false }) }
                                />
                            }
                            
                        </div>

                        { this.state.showReplySection && <CreateComment
                                postIndex = { this.props.postIndex }
                                parentId = { this.props.commentId }
                                createComment = { this.props.createComment }
                                userImg = { this.props.userImg }
                            />
                        }

                        { nestedComments }

                    </div>
                </div> 
            </>
        );
    }
}

export default Comment;