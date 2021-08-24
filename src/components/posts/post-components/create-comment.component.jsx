import React, { Component } from 'react';

class CreateComment extends Component {
    render() {
        return (
            <>
                <div className="comment d-flex row-h1 flex-row mt-2">
                    <img className="d-flex mr-3" src={ this.props.authorImg } alt="" />
                    <div className="input-body input-comment">

                        <input
                            onKeyPress = { this.props.handleComment.bind(this.event, this.props.index) }
                            className = "form-control input-lg"
                            type = "text"
                            placeholder = "Write a comment..."
                        />
                        
                    </div>
                </div>
            </>
        );
    }
}

export default CreateComment;