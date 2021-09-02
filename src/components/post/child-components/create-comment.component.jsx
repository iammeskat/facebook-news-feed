import React, { Component } from 'react';

class CreateComment extends Component {
    render() {
        return (
            <>
                <div className="comments d-flex mt-2">
                    <img className="d-flex mr-3" src={ this.props.userImg } alt="" />
                    <div className="d-flex flex-row input-body input-comment">
                        <input
                            onKeyPress = {
                                this.props.createComment.bind(this, [this.props.postIndex, this.props.parentId])
                            }
                            className = "form-control"
                            type = "text"
                            placeholder = "Write a comment..."
                            style={{width: "100%"}}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default CreateComment;