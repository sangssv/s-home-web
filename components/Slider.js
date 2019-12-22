import React, { Component } from 'react';
import { Carousel } from 'antd';
import { Button, Radio, Icon } from 'antd';

const sliders = [{
  id: 1,
  image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
  title: 'Hado Centrosa Garden',
  description: 'Phòng Khách sạn 5 sao'
}, {
  id: 2,
  image: 'https://images.unsplash.com/photo-1523575708161-ad0fc2a9b951?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
  title: 'My Home 2',
  description: 'Phòng Khách sạn 5 sao'
}, {
  id: 3,
  image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
  title: 'My Home 3',
  description: 'Phòng Khách sạn 5 sao'
}]

class Slider extends Component {
  next = () => {
    this.carousel.next();
  }
  previous = () => {
    this.carousel.prev();
  }
  render() {
    return (
      <div className="slider-wrapper">
        <Carousel
          ref={node => (this.carousel = node)}
          // autoplay
          // infinite
          speed={1000}
          effect="fade"
        >
          {sliders.map(item => (
            <div key={item.id}>
              <img className="slider-image" src={item.image} />
              <div className="slider-content">
                <p className="title">{item.title}</p>
                <p className="description">{item.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="buttons-container">
          <Button onClick={this.previous} type="primary" icon="left" size="large" />
          <Button onClick={this.next} type="primary" icon="right" size="large" />
        </div>
      </div>
    )
  }
};

export default Slider;