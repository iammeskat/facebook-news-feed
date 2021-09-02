import React, { Component } from 'react';
import Header from './child-components/header.component';
import Content from './child-components/content.component';
import Action from './child-components/action.component.jsx';
import Comments from './child-components/comments.component';
// import CreateComment from './child-components/create-comment.component';
// import { postsData } from "../data/post-data";


class Post extends Component {

    render() {

        const post = this.props.post; 
        const {postIndex, userID, userImg, handleLikeButton, handleCreateComment } = this.props;
        
        return (
            <div className="card">
                <div className="d-flex row-h1 flex-column justify-content-start m-2">

                    <Header
                        isMyPost = { userID === post.userID ? true : false}
                        authorName = { post.authorName }
                        authorImgSrc = { post.imgSrc }
                        duration = { post.duration }
                        postIndex = { postIndex }
                        togglePopup = { this.props.togglePopup }
                    />

                    <Content
                        content = { post.content }
                        like = { post.like }
                        isLiked = { post.isLiked }
                        number_of_comment = { post.comments.length }
                    />
                    
                    <Action
                        postIndex = { postIndex }
                        handleLikeButton = { handleLikeButton }
                        isLiked = { post.isLiked }
                        handleCommentSection = { this.props.handleCommentSection }
                        displayCommentSection = { this.props.displayCommentSection[postIndex] }
                    />

                    { this.props.displayCommentSection[postIndex] && <Comments
                            comments = { post.comments }
                            postIndex = { postIndex }
                            userID = { userID }
                            userImg = { userImg }
                            updateComment = { this.props.updateComment }
                            deleteComment = { this.props.deleteComment }
                            createComment = { handleCreateComment}
                        />
                    }
                    
                </div>
            </div>
        );
    }
}

export default Post;