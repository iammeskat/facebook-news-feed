import React, { Component } from 'react';

class Action extends Component {
    render() {
        return (
            <>
                <div className="post-action d-flex row-h1 flex-row justify-content-between">
                    <div className="col-md-4 like">

                        <button
                            onClick = { () => this.props.onLike(this.props.index) }
                            className="react-button"
                        >
                        <i className="fa fa-thumbs-up"></i>
                        { this.props.isLiked ? ' Unlike' : ' Like' }
                        </button>
                        
                    </div>
                    <div className="col-md-4 like">
                        <button className="react-button"><i className="fa fa-comment"></i> Comment</button>
                    </div>
                    <div className="col-md-4 like">
                        <button className="react-button"><i className="fa fa-share"></i> Share</button>
                    </div>
                </div>
            </>
        );
    }
}

export default Action;