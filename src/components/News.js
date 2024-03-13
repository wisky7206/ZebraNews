import React, { Component } from 'react';
import Newsitem from './Newsitem';

export class News extends Component {
   
    constructor(){
    super();
    this.state = {
        articles: [],
        loading: false,
        page: 1
    }
}
    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b7511c840cc14edba2ee535f61645195&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData= await data.json()
      console.log(parsedData);
      this.setState({articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false})

    }
    handlePrevClick = async () => {
      console.log("Previous");
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b7511c840cc14edba2ee535f61645195&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
          page: this.state.page - 1,
          articles: parsedData.articles,
          loading:false
      })
  }
  handleNextClick = async () => {
    console.log("Next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
   
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b7511c840cc14edba2ee535f61645195&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading:false
        })
    }
}
    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center">ZebraNews - Top Headlines</h2>
                {this.state.loading && <spiiner/>}
               
                <div className="row"> 
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                     <Newsitem  title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage} newsid={element.url} />
                 </div>

                })}
                   
                </div>
                <div className="container d-flex justify-content-between">
                       <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                       <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        );
    }
}


export default News
