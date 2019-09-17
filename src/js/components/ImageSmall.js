import React, { Component } from 'react';

class ImageSmall extends Component{
    render(){
        return (
            <div>
                <img src={this.props.img} alt={this.props.alt}/>
                <a href={this.props.link}>
                    <p>{this.props.txt}</p>
                </a>
            </div>
        );
    }
};

ImageSmall.defaultProps = {
    alt :'small image',
    txt : 'small image',
    link : '',
    img : ''
};

export default ImageSmall;