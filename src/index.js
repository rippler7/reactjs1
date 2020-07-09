import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import ScrollArrow from './components/scrollArrow';
import CarouselSlide from './components/carousel';
import NewsFeed from './components/item-list';
import Sidebar from './components/sidebar';
import Footer from './components/footer';

const App = () => {
  return (
    <div className="wrapperDiv" id="top">
      <Header />
      <CarouselSlide />
        <div className="contentDiv">
          <div className="row">
            <div className="col-md-8">
              <NewsFeed/>
            </div>
            <div className="col-md-4">
              <Sidebar/>
            </div>
           <ScrollArrow/>
          </div>
        </div>
        <Footer />
    </div>
  )
}

ReactDOM.render(<App/>,document.querySelector('#container'));
