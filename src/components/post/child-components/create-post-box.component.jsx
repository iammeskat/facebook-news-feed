import React, { Component } from 'react';

class CreatePostBox extends Component {
    style = {
        width: "100%",
            border: "0px",
            padding: "5px",
            borderRadius: "4px",
            fontWeight: "bold",
            color: "silver",
            backgroundColor: '',
    };

    state = {
        style: this.style
    }

    handleButton = (event) => {
        let style = {...this.state.style};

        if(event.target.value === '') {
            style = this.style;
        } else{
            style.backgroundColor = "#1877F2";
            style.color = "#FFFFFF";
        }

        this.setState({ style: style })
    }
    render() {
        return (
            <div className="popup-box">
                <div className="box post-box d-flex row-h1 flex-column">
                    <div className="p-1 d-flex row-h1 flex-row justify-content-between">
                        <div></div>
                        <h2 className="mt-2">Create Post</h2>
                        <button
                            onClick={ () => this.props.togglePopup('displayCreatePost') }
                            type="button"
                            className="btn btn-outline-secondary cancel-btn">
                            <i className="fa fa-times"></i>
                        </button>
                    </div>
                    <div className="dropdown-divider"></div>
                    <form onSubmit = { this.props.handleCreatePost }>
                        <div className="p-1 item-h1">
                            <div className="form-group">
                                <textarea
                                    onChange = { this.handleButton }
                                    placeholder = "What's on your mind?"
                                    className="form-control mt-1 mb-2" rows="5">
                                </textarea>
                            </div>
                        </div>
                        <div className="p-1 item-h1">
                        <button
                            style={ this.state.style }
                            className=""
                            type="submit"
                        >
                            Post
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreatePostBox;