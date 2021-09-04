import React, { Component } from 'react';
import LeftItems from './child-components/left-items.component';
import MiddleItems from './child-components/middle-items.component';
import RightItems from './child-components/right-items.component';

class Nav extends Component {
    render() {
        return (
            <>
                <div className="container-fluid sticky-top">
                    <div className="row nav bg-light">
                        <LeftItems/>
                        <MiddleItems/>
                        <RightItems/>
                    </div>
                </div>
                
            </>
        );
    }
}

export default Nav;