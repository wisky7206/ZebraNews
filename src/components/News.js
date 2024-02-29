import React, { Component } from 'react';
import Newsitem from './Newsitem';

export class News extends Component {
    articles = [
        {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "By <a href=\"/profiles/elise-hammond\">Elise Hammond</a>, Piper Hudspeth Blackburn and <a href=\"/profiles/maureen-chowdhury\">Maureen Chowdhury</a>, CNN",
            "title": "Live updates: Michigan presidential primary election - CNN",
            "description": "Michigan voters are headed to the polls Tuesday for the state's presidential primaries. Follow here for the latest live news updates, results, analysis and more.",
            "url": "https://www.cnn.com/politics/live-news/michigan-primary-02-27-24/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/240226163121-01-early-voting-michigan-021724-super-tease.jpg",
            "publishedAt": "2024-02-27T18:23:00Z",
            "content": "President Joe Biden and former President Donald Trump are expected to win handily in their respective contests, but there will be lessons to learn for both. \r\nHeres what to watch for in Michigan: \r\nT… [+1547 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Alabama's legislature pushes to protect IVF after court ruling - BBC.com",
            "description": "Republicans will introduce a bill designed to protect access, after a court ruling cast doubt on its availability.",
            "url": "https://www.bbc.com/news/world-us-canada-68414148",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/90B5/production/_132754073_ec277acbe95d57055830ed23dd0485a4c8e66a0c0_0_8192_46101000x563.jpg",
            "publishedAt": "2024-02-27T17:41:53Z",
            "content": "By Nomia Iqbal &amp; Alex LedermanBBC News, Alabama\r\nSome hospitals and clinics pulled fertility services after the court ruling on 16 February (file image)\r\nRepublicans in Alabama will introduce a b… [+5414 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
          },
          {
            "source": {
              "id": "espn",
              "name": "ESPN"
            },
            "author": "ESPN staff",
            "title": "2024 NFL offseason: News from coaches, GMs at combine - ESPN",
            "description": "We have the latest updates and news from coaches and general managers speaking at the 2024 NFL combine on Tuesday.",
            "url": "https://www.espn.com/nfl/story/_/id/39527211/2024-nfl-offseason-news-updates-coaches-gms-combine",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0227%2Fr1296931_1296x729_16%2D9.jpg",
            "publishedAt": "2024-02-27T17:30:00Z",
            "content": "A little more than two weeks after the Kansas City Chiefs won their second straight Super Bowl title, the NFL is moving quickly to the offseason. It's combine week, as coaches, scouts and front offic… [+554 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Salon"
            },
            "author": "Salon",
            "title": "The measles outbreak in Florida is a warning for the rest of the nation - Salon",
            "description": null,
            "url": "https://www.salon.com/2024/02/27/the-measles-in-florida-is-a-warning-for-the-rest-of-the-nation/",
            "urlToImage": null,
            "publishedAt": "2024-02-27T17:00:00Z",
            "content": null
          },

    ]
    constructor(){
        super();
        console.log("hello");
        this.state={

        }
    }
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
