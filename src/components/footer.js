import React,{ Component } from 'react';

class Footer extends Component {
    render(){
        return(
            <div className="mainFooter">
                <div className="contentDiv">
                    <div className="row">
                        <div className="col-md-6 bottomLeft bottomText"><a href="index.html">運営会社&nbsp;&nbsp;&nbsp;&nbsp;個人情報保護について</a></div>
                        <div className="col-md-6 bottomRight bottomText">&#169;2016 Sample</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;