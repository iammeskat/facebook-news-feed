import React, { Component } from 'react';
import PostOptions from './post-options.component';

class Header extends Component {
    render() {
        return (
            <>
                <div className="d-flex row-h1 flex-row justify-content-between">
                    <div className="d-flex">
                        <div className="author-pic float-left">
                            <img src={ this.props.imgSrc } alt={ this.props.imgSrc } />
                        </div>
                        <div className="author-name float-left ml-2">
                            <h2>{ this.props.authorName }</h2>
                            <small>{ this.props.duration }. <i className="fa fa-globe"></i></small>
                        </div>
                    </div>
                    <div className="float-right">
                        <PostOptions />
                    </div>
                </div>
            </>
        );
    }
}

export default Header;