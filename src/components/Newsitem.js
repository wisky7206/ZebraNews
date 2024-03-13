import React, { Component } from 'react'

export class Newsitem extends Component {
  
  render() {
    let {title, description,imageurl, newsid} = this.props;
    return (
      <div className="my-3">
         <div className="card" style={{width: "18rem"}}>
           <img src={!imageurl?"https://images.moneycontrol.com/static-mcnews/2022/01/Dried-vegetables-at-a-market-in-Srinagar-Photo-by-Irfan-Amin-Malik-770x433.jpg":imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">{title}...</h5>
             <p className="card-text">{description}...</p>
             <a rel="noreferrer" href={newsid} target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
