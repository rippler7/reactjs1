import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import newsfeed from "../newsfeed.json";

class NewsFeedItems extends Component{
    clickTo = (event) => {
        window.open(newsfeed[event.currentTarget.getAttribute("data")-1].linkTo);
    }
    moreClick = (event) => {
        window.open(process.env.PUBLIC_URL + "index.html");
    }
    render(){
        return(
            
                <div>
                {newsfeed.map(newsi => {
                    return(
                        <Card className="cardGrp" key={ newsi.id } onClick={this.clickTo} data={newsi.id} fluid="true">
                        <Card.Body>
                            <img src={process.env.PUBLIC_URL + newsi.photo} style={{"float":"left","paddingRight":"20px"}} alt="" />
                            <div className="excerptContainer">
                            <div className="dateText">{newsi.date}</div>
                                <Card.Title>{newsi.header}</Card.Title>
                                <Card.Text className="cardText">
                                {newsi.excerpt}...
                                </Card.Text>
                            </div>
                        </Card.Body>
                        </Card>
                    )
                    })}
                    <br />
                    <img src={process.env.PUBLIC_URL + "assets/morebtn.jpg"} alt="" style={{"padding":"20px","width":"404px","margin":"0px auto","display":"block","cursor":"pointer"}} onClick={this.moreClick} />
                </div>
            
        )
    }
}

export default NewsFeedItems;