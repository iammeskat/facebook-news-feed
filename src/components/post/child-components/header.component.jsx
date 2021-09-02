import React, { Component } from 'react';
import PostOptions from './post-options.component';

class Header extends Component {
    render() {
        const { postIndex, isMyPost, authorName, authorImgSrc, duration, } = this.props;
        
        return (
            <>
                <div className="d-flex row-h1 flex-row justify-content-between">
                    <div className="d-flex">
                        <div className="author-pic float-left">

                            <img src={ authorImgSrc } alt={ authorImgSrc } />

                        </div>
                        <div className="author-name float-left ml-2">

                            <h2>{ authorName }</h2>
                            <small>{ duration }. <i className="fa fa-globe"></i></small>

                        </div>
                    </div>
                    <div className="float-right">

                        <PostOptions
                            isMyPost = { isMyPost }
                            index = { postIndex }
                            togglePopup = { this.props.togglePopup }
                        />

                    </div>
                </div>
            </>
        );
    }
}

export default Header;