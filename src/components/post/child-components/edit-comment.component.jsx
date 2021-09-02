import React, { Component } from 'react';

class EditComment extends Component {
    state = {
        comment: this.props.comment
    }
    render() {
        return (
            <form onSubmit = {
                this.props.updateComment.bind(
                    this.event,
                    this.props.postIndex,
                    this.props.commentId
                )}>

                <div className="d-flex">
                    <input
                        value = { this.state.comment }
                        onChange={e => this.setState({ comment: e.target.value })}
                        className="form-control"
                        type="text"
                    />
                    <button
                        // onClick ={}
                        className="btn btn-primary btn-sm "
                        type="submit"
                    >Update</button>
                    <button
                        onClick = { this.props.cancelEdit }
                        className="btn btn-secondary btn-sm "
                        type="button"
                    >Cancel</button>
                </div>
            </form>
        );
    }
}

export default EditComment;