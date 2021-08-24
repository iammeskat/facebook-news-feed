import React, { Component } from 'react';
import './css/style.css';
import Post from './posts/post.component';
import { postsData } from "./data/post-data";

class Posts extends Component {
    state = {
        posts: postsData
    }

    handleLikeButton = (index) => {
        const posts = this.state.posts;

        if(posts[index].isLiked) {
            posts[index].isLiked = false;
            posts[index].like--;
        } else {
            posts[index].isLiked = true;
            posts[index].like++;
        }
        
        this.setState({posts: posts})
    }

    handleCreateComment = (index, event) => {
        // console.log(event, index);
        // return;
        if(event.target.value==="") return;

        const posts = this.state.posts;

        if(event.key === 'Enter'){
            posts[index].comments.push({
                id: posts[index].comments.length,
                parent_id: null,
                name: "Meskatul Islam",
                imgSrc: "./img/meskat.jpeg",
                comment: event.target.value,
            })
            
            event.target.value = "";
            this.setState({posts: posts})
          }
        
    }

    render() {
        return (
            <>
                <div className="container mt-5 mb-5">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-md-6">

                            {
                                this.state.posts.map( (post, indx) => {
                                    return <Post
                                        key = { 'post-' + indx }
                                        index = { indx }
                                        post = { post }
                                        handleLike = { this.handleLikeButton }
                                        handleCreateComment = { this.handleCreateComment }
                                    />
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Posts;