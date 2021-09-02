import React, { Component } from 'react';

class LeftItems extends Component {
    render() {
        return (
            <div className="col-3">
                <div className="d-flex row-h1 flex-row justify-content-start mt-2  left-items">
                    <img src="/img/logo.png" alt="" />
                    <form className="form-inline">
                        <div class="input-group">
                            <span className="input-group-text search-icon"><li className="fa fa-search"></li></span>
                            <input type="text" class="form-control search-box" placeholder="Search Facebook" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LeftItems;