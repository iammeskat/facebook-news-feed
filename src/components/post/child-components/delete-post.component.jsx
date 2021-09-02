import React, { Component } from 'react';

class DeletePost extends Component {
    render() {
        return (
            <div className="popup-box">
                <div className="box">
                    <h2>Delete post</h2>
                    <div className="dropdown-divider"></div>
                    <p className="mb-4">Are you sure you want to delete this post?</p>
                    <div className="button-group mt-2">

                        <button
                            onClick = { () => this.props.togglePopup('displayDeletePost') }
                            style={{width: "45%"}}
                            className="btn btn-secondary"
                        >
                            Cancel
                        </button>

                        <button
                            onClick = { () => this.props.handleDeletePost(
                                this.props.index, this.props.togglePopup
                                ) }
                            style={{width: "45%", float: "right"}}
                            className="btn btn-outline-danger"
                        >
                            Yes
                        </button>


                    </div>
                </div>
            </div>
        );
    }
}

export default DeletePost;