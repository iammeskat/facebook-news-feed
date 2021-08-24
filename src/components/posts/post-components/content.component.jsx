import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <>
                <div className="content">
                    <p className="text-justify mb-0">{ this.props.content }</p>
                    <div className="d-flex row-h1 flex-row justify-content-between mt-1">
                        <p>
                            <i className="fa fa-thumbs-up like-icon"></i> 
                            Pondits and { this.props.like } others
                        </p>
                        <p>{ this.props.number_of_comment } Comments</p>
                    </div>
                </div>
            </>
        );
    }
}

export default Content;