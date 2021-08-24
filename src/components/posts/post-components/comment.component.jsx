import React, { Component } from 'react';

class Comment extends Component {

    render() {
        
        const comments = this.props.comments;
        const nestedComments = comments.map( comment => {
            if( comment.parent_id === this.props.id ) {
                return <Comment
                    key = { 'comment-' + comment.id }
                    id = { comment.id }
                    parent_id = { comment.parent_id }
                    name = { comment.name }
                    imgSrc = { comment.imgSrc }
                    comment = { comment.comment }
                    comments = { comments }
                />
            }
        });

        return (
            <>
               <div className="comment d-flex row-h1 flex-row" id={ this.props.id }>
                    <img className="d-flex mr-3" src={ this.props.imgSrc } alt={ this.props.imgSrc } />
                    <div className="comment-body d-block">
                        <div className="comment-text">
                            <b>{ this.props.name }</b>
                            <p className="" >{ this.props.comment }</p>
                        </div>
                        { nestedComments }
                    </div>
                </div> 
            </>
        );
    }
}

export default Comment;