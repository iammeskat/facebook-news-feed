import React, { Component } from 'react';
// import CreatePostBox from './post-components/create-post-box.component';

class CreatePOST extends Component {

    render() {
        return (
            <div className="card">
                <div className="row  m-2 mt-3 mb-0">
                    <div className="col-1">
                        <img className=" user-img float-left" src={ this.props.userImg } alt={ this.props.imgSrc } />
                    </div>
                    <div className="col-11">

                        <button
                            onClick = { () => this.props.togglePopup('displayCreatePost') }
                            className="create-post-button"
                        >
                            What's on your mind, Meskat?
                        </button>

                    </div>
                    <div className="dropdown-divider"></div>
                    
                </div>
                
                <div className="row m-2 mt-0">
                    <div className="col-md-4 like">

                        <button className="react-button">
                            <img className="icon" src="./icon/video-solid.svg" alt="#" /> Live video
                        </button>
                        
                    </div>
                    
                    <div className="col-md-4 like">
                        <button className="react-button">
                            <img className="icon" src="./icon/photo-video-solid.svg" alt="#" /> Photo/Video
                        </button>
                    </div>
                    <div className="col-md-4 like">
                        <button className="react-button">
                            <img className="icon" src="./icon/laugh-regular.svg" alt="#" /> Feeling/Activity
                        </button>
                    </div>
                </div>       
            </div>
        );
    }
}

export default CreatePOST;