import React, { Component } from 'react';

class Action extends Component {
    render() {
        return (
            <>
                <div className="post-action d-flex row-h1 flex-row justify-content-between">
                    <div className="col-md-4">

                        <button
                            onClick = { () => this.props.handleLikeButton(this.props.postIndex) }
                            className={this.props.isLiked ? "text-primary react-button" : "react-button" }
                        >
                            <i className="fa fa-thumbs-up"></i>
                            { this.props.isLiked ? ' Liked' : ' Like' }
                        </button>
                        
                    </div>
                    
                    <div className="col-md-4">
                        <button
                            onClick = { () => this.props.handleCommentSection(this.props.postIndex) }
                            className={this.props.displayCommentSection ? "btn-active react-button" : "react-button" }
                            type="button"
                        >
                            <i className="fa fa-comment"></i> Comment
                        </button>
                    </div>
                    <div className="col-md-4">
                        <button className="react-button float-right"><i className="fa fa-share"></i> Share</button>
                    </div>
                </div>
            </>
        );
    }
}

export default Action;