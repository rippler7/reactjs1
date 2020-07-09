import React, { Component } from "react";
import newsfeed from "../newsfeed.json";

class SidebarFeed extends Component{
    sbClickTo = (event) => {
        window.open(newsfeed[event.currentTarget.getAttribute("data")].linkTo);
    }
    render(){
        return(
            
                <div>
                {newsfeed.slice(0,3).map(newsi => {
                    return(
                        <div className="sbGrp" key={ newsi.id } onClick={this.sbClickTo} data={newsi.id} fluid="true">
                        <div className="sbBody">
                            <img src={process.env.PUBLIC_URL + newsi.photo} style={{"float":"left","paddingRight":"10px","width":"111px","height":"62px"}} alt="" />
                            <div className="sbTextGrp">
                                <div className="sbTitle">{newsi.header}</div>
                                <div className="sbDateText">{newsi.date}</div>
                                </div>
                            </div>
                        </div>
                    )
                    })}
                </div>
            
        )
    }
}

export default SidebarFeed;