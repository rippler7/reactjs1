import React,{ Component } from 'react';

class Header extends Component {
    state={
        keyWord:"empty"
    }
    /*
    typeDown = (event) => {
        this.setState({
            keyWord:event.target.value
        });
    }
    */
   clickLogo = (event) => {
       alert("logo clicked!");
   }
    render(){
        return (
            <div>
                <div className="logoHeader" onClick={ this.clickLogo }>
                <img src={ process.env.PUBLIC_URL + '/img/logo.png'} alt=""/>
                </div>
            </div>
        )
    }

}
export default Header;