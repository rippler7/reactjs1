import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carouselSlide.css';

class CarouselSlide extends Component {
    render(){    
        return(
            <div className='container-fluid carouselMain' style={{"paddingLeft":0,"paddingRight":0}}>  
                <Carousel interval={2000} keyboard={false} pauseonhover="true">  
                    <Carousel.Item style={{'height':"418px"}}  >  
                        <img 
                        style={{"marginTop":"-10%","height:":"418px","width":"auto"}}
                        alt=""  
                        className="d-block w-100"  
                        src={process.env.PUBLIC_URL + '/img/main1.jpg'}  />  
                        <Carousel.Caption style={{"bottom":"100px"}}>  
                            <h2 style={{"fontSize":"40pt","fontWeight":"bold"}}>キャッチコピーが入ります。 </h2> 
                            <br />
                            <p>サンプルテキストサンプルテキストサンプルテキストサンプルテキスト<br />
サンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p> 
                        </Carousel.Caption>  
                    </Carousel.Item  >  
                    <Carousel.Item style={{'height':"418px"}}>  
                        <img  
                        style={{"marginTop":"-10%","height:":"418px","width":"auto"}}
                        alt=""
                        className="d-block w-100"  
                        src={process.env.PUBLIC_URL + '/img/main2.jpg'}    />  
                        <Carousel.Caption style={{"bottom":"100px"}}>  
                            <h3>Second Demo</h3>
                            <p>Subtitle here</p>  
                        </Carousel.Caption>  
                    </Carousel.Item>  
                    <Carousel.Item style={{'height':"418px"}}>  
                        <img  
                        style={{"marginTop":"-10%","height:":"418px","width":"auto"}}
                        alt=""
                        className="d-block w-100"  
                        src={process.env.PUBLIC_URL + '/img/main3.jpg'}   />  
                        <Carousel.Caption style={{"bottom":"100px"}}>  
                            <h3>Third Demo</h3> 
                            <p>Subtitle here</p> 
                        </Carousel.Caption>  
                    </Carousel.Item>  
                </Carousel>  
            </div>
        )
    }
}
export default CarouselSlide;