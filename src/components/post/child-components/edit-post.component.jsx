import React, { Component } from 'react';

class EditPost extends Component {

    state = {
        content: this.props.content
    }

    
    render() {
        return (
            <div className="popup-box">
                <div className="box d-flex row-h1 flex-column">
                    <div className="p-1 d-flex row-h1 flex-row justify-content-between">
                        <div></div>
                        <h2 className="mt-2">Edit Post</h2>
                        <button
                            onClick={ () => this.props.togglePopup('displayEditPost') }
                            type="button"
                            className="btn btn-outline-secondary cancel-btn">
                            <i className="fa fa-times"></i>
                        </button>
                    </div>
                    <div className="dropdown-divider"></div>

                    <form onSubmit={
                        this.props.handleEditPost.bind(
                            this.event,
                            this.props.index,
                            this.props.togglePopup
                            )
                        }
                    >
                        <div className="form-group">
                            <textarea
                                value = { this.state.content }
                                onChange={e => this.setState({ content: e.target.value })}
                                className="form-control mt-1 mb-2" rows="5"
                                style={ {border: '0px'} }>
                            </textarea>

                        <button
                            style={ {width: '100%'} }
                            className="btn btn-outline-primary btn-update"
                            type="submit"
                        >
                            Update
                        </button>

                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditPost;