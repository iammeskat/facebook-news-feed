import React, { Component } from 'react';

class PostOptions extends Component {

    render() {
        return (
            <>
                <div className="dropdown">
                    <button className=" option-button" data-toggle="dropdown"><h2>...</h2></button>
                    <div className="dropdown-menu dropdown-menu-right">
                        {
                            this.props.isMyPost === true ? (
                                <>
                                    <button
                                        onClick = {
                                            ()=>this.props.togglePopup('displayEditPost', this.props.index)
                                        }
                                        className="dropdown-item"
                                        type="button"
                                    >
                                        <i className="fa fa-edit"></i> Edit
                                    </button>

                                    <div className="dropdown-divider"></div>

                                    <button
                                        // onClick = { this.showDeletePostPopup }
                                        onClick = {
                                            ()=>this.props.togglePopup('displayDeletePost', this.props.index )
                                        }
                                        className="dropdown-item"
                                        type="button"
                                    >
                                        <i className="fa fa-trash"></i> Delete
                                    </button>
                                </>
                            ) : (
                                <button className="dropdown-item" type="button"><i className="fa fa-bookmark"></i> Save Post</button>
                            )
                        }
                        <div className="dropdown-divider"></div>
                        <button className="dropdown-item" type="button"><i className="fa fa-bell"></i> Turn on notification for this post</button>
                        <div className="dropdown-divider"></div>
                        <button className="dropdown-item" type="button"><i className="fa fa-eye-slash"></i> Hide Post</button>
                        <button className="dropdown-item" type="button"><i className="fa fa-bug"></i> Find Support or report post</button>
                        <button className="dropdown-item" type="button"><i className="fa fa-times-circle"></i> Unfollow</button>
                    </div>
                </div>
            </>
        );
    }
}

export default PostOptions;