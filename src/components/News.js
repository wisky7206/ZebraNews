import React, { Component } from 'react';
import Newsitem from './Newsitem';

export class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center">ZebraNews - Top Headlines</h2>
                <div className="row justify-content-center"> {/* Centering the row */}
                    <div className="col-md-3">
                        <Newsitem title="mytitle" description="yhygby" imageurl="https://cdn.cnn.com/cnnnext/dam/assets/240226163121-01-early-voting-michigan-021724-super-tease.jpg" />
                    </div>
                    <div className="col-md-3">
                        <Newsitem title="mytitle" description="yhygby" />
                    </div>
                    <div className="col-md-3">
                        <Newsitem title="mytitle" description="yhygby" />
                    </div>
                </div>
            </div>
        );
    }
}


export default News
