import React, { Component } from 'react';
import SidebarFeed from './sidebarlist';

class Sidebar extends Component{
    clickBanner = (event) => {
        window.open(event.currentTarget.getAttribute("data"));
    }
    render(){
        return(
            <div className="sidebarRight">
                                   
                    <div className="banner1" onClick={this.clickBanner} data="http://youtube.com">
                        <img src={process.env.PUBLIC_URL + '/assets/dummy.jpg'} alt=""/>
                    </div>
                    <br />
                    <div className="recommendTitle">
                        Recommend
                        <hr/>
                        <SidebarFeed />
                    </div>
                    <br />
                    <div className="banner2" onClick={this.clickBanner} data="http://linkedin.com">
                        <img src={process.env.PUBLIC_URL + '/assets/dummy2.jpg'} alt=""/>
                    </div>
                    <br />
                    <div className="banner2" onClick={this.clickBanner} data="http://linkedin.com">
                        <img src={process.env.PUBLIC_URL + '/assets/dummy2.jpg'} alt=""/>
                    </div>
                    <br />
                    <div className="banner2" onClick={this.clickBanner} data="http://linkedin.com">
                        <img src={process.env.PUBLIC_URL + '/assets/dummy2.jpg'} alt=""/>
                    </div>
                    <br />
            </div>
        )
    }
}

export default Sidebar;