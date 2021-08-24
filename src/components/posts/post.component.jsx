import React, { Component } from 'react';
import Header from './post-components/header.component';
import Content from './post-components/content.component';
import Action from './post-components/action.component';
import Comments from './post-components/comments.component';
import CreateComment from './post-components/create-comment.component';
// import { postsData } from "../data/post-data";


class Post extends Component {

    render() {
        const {authorName, imgSrc, duration, content, like, isLiked, comments} = this.props.post;
        return (
            <div className="card">
                <div className="d-flex row-h1 flex-column justify-content-start m-2">

                    <Header
                        authorName = { authorName }
                        imgSrc = { imgSrc }
                        duration = { duration }
                    />

                    <Content
                        content = { content }
                        like = { like }
                        number_of_comment = { comments.length }
                    />
                    
                    <Action
                        index = { this.props.index }
                        onLike = { this.props.handleLike }
                        isLiked = { isLiked }
                    />

                    <Comments comments = { comments } />

                    <CreateComment
                        index = { this.props.index }
                        handleComment = { this.props.handleCreateComment}
                        authorImg = { imgSrc }
                    />
                </div>
            </div>
        );
    }
}

export default Post;