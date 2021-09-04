import React, { Component } from 'react';
import { postsData } from '../data/posts.data';
import Post from './post/post.component';
import CreatePost from './post/create-post.component';
import CreatePostBox from './post/child-components/create-post-box.component';
import EditPost from './post/child-components/edit-post.component';
import DeletePost from './post/child-components/delete-post.component';
import Nav from './navbar/nav.component';

class App extends Component {
    state = {
        posts: postsData,
        user: {
            userID: 1,
            userName: "Meskatul Islam",
            imgSrc: "./img/meskat.jpeg",
        },

        windows: {
            displayCreatePost: false,
            displayDeletePost: false,
            displayCommentSection: new Array(postsData.length).fill(false),
        },

        temp: {
            postIndex: '',
        }
    }


    // hide/show comment section
    handleCommentSection = (indx) => {
        const windows = { ...this.state.windows };
        windows.displayCommentSection[indx] = !this.state.windows.displayCommentSection[indx];
        this.setState({ windows: windows });
    }


    // popup window handler (Edit, Delete & Create Post)
    handlePopupWindow = (window, postId=null) => {

        if(postId!==null){
            const temp = this.state.temp;
            temp.postIndex = postId;
            this.setState({ temp: temp });
        }

        const windows = {...this.state.windows };
        windows[window] = !this.state.windows[window];
        this.setState({ windows: windows });  
    }


    // create post 
    handleCreatePost = (event) => {
        event.preventDefault();
        if(!event.target[0].value) return;
        this.handlePopupWindow('displayCreatePost');

        const posts = this.state.posts;
        posts.unshift({
            userID: this.state.user.userID,
            authorName:  this.state.user.userName,
            imgSrc:  this.state.user.imgSrc,
            duration: 'Just now',
            content: event.target[0].value,
            like: 0,
            isLiked: false,
            comments: []
        });
    }


    // edit post 
    handleEditPost = (index, closePopup, event) => {
        event.preventDefault();
        closePopup('displayEditPost');

        const posts = this.state.posts;
        posts[index].content = event.target[0].value;
        this.setState({ posts: posts });
    }


    // delete post 
    handleDeletePost = (index, closePopup) => {
        closePopup('displayDeletePost');
        const posts = this.state.posts;
        posts.splice(index,1);
        this.setState({ posts: posts });
    }


    // like button handler 
    handleLikeButton = (index) => {
        const posts = this.state.posts;

        if(posts[index].isLiked) {
            posts[index].isLiked = false;
            posts[index].like--;
        } else {
            posts[index].isLiked = true;
            posts[index].like++;
        }
        
        this.setState({posts: posts});
    }


    // create comment
    handleCreateComment = (data, event) => {
        const postIndex = data[0];
        const parentId = data[1] === undefined ? null : data[1];

        if( event.target.value === "" ) return;
        
        const posts = this.state.posts;

        if( event.key === 'Enter' ){
            const totalComment = posts[postIndex].comments.length;
            let newId = 0;
            if( totalComment > 0 )
                newId = posts[postIndex].comments[totalComment-1].id + 1;

            posts[postIndex].comments.push({
                id: newId,
                parent_id: parentId,
                userID: this.state.user.userID,
                name: this.state.user.userName,
                imgSrc: this.state.user.imgSrc,
                comment: event.target.value,
            });

            event.target.value = "";
            this.setState({posts: posts});
        } 
    }


    // update comment
    updateComment = (postIndex, commentId, event) => {
        event.preventDefault();
        if( event.target[0].value === '' ) return;

        const posts = this.state.posts;

        for(var i = 0; i<posts[postIndex].comments.length; i++){
            if(posts[postIndex].comments[i].id === commentId){
                posts[postIndex].comments[i].comment = event.target[0].value;
                break;
            }
        }
        this.setState({ posts: posts });
    }


    // delete comment
    deleteComment = (postIndex, commentId) => {
        const posts = this.state.posts;
        const comments = posts[postIndex].comments;

        const childItem = [];

        const getChildComment = ( id ) => {
            for(var i = comments.length-1; i >= 0; i-- ) {
                if( comments[i].parent_id === id ) getChildComment( comments[i].id );
                else if( comments[i].id === id ) childItem.push(i)
            }
            return childItem;
        }
        getChildComment( commentId );

        childItem.forEach( i => {
            comments.splice(i, 1)
        })
        
        posts[postIndex].comments = comments;
        this.setState({ posts: posts });
        
    }

    render() {
        return (
            <>
                <Nav/>
                <div className="container mt-4 mb-5">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-md-6">

                            <CreatePost
                                userImg = { this.state.user.imgSrc }
                                togglePopup = { this.handlePopupWindow }
                            />

                            {   // Rendering all post
                                this.state.posts.map( (post, indx) => {
                                    return <Post
                                        key = { indx+'-'+Math.random() }
                                        userID = { this.state.user.userID}
                                        postIndex = { indx }
                                        post = { post }
                                        userImg = { this.state.user.imgSrc }
                                        handleLikeButton = { this.handleLikeButton }
                                        handleCreateComment = { this.handleCreateComment }
                                        updateComment = { this.updateComment }
                                        deleteComment = { this.deleteComment }
                                        handleCommentSection = { this.handleCommentSection }
                                        displayCommentSection = { this.state.windows.displayCommentSection }
                                        togglePopup = { this.handlePopupWindow }
                                    />
                                })
                            } 

                        </div>
                        
                        {/* popup window of create post */}
                        { this.state.windows.displayCreatePost &&  <CreatePostBox
                                togglePopup = { this.handlePopupWindow }
                                handleCreatePost = { this.handleCreatePost }
                            />
                        }

                        {/* popup window of edit post */}
                        { this.state.windows.displayEditPost && <EditPost
                                handleEditPost = { this.handleEditPost }
                                index = { this.state.temp.postIndex }
                                content = {
                                    this.state.posts[this.state.temp.postIndex].content
                                }
                                togglePopup = { this.handlePopupWindow }
                            />
                        }

                        {/* popup window of delete post */}
                        { this.state.windows.displayDeletePost && <DeletePost
                                handleDeletePost = { this.handleDeletePost }
                                index = { this.state.temp.postIndex}
                                togglePopup = { this.handlePopupWindow }
                            />
                        }

                    </div>
                </div>
            </>
        );
    }
}

export default App;