import React, { Component } from 'react';
import Twitter from "twitter";
 
const client = new Twitter({
  consumer_key: 'CL7qfSvWHGqPb8KAo4I9xgPIu',
  consumer_secret: 'rPZc7NfGggwXumao3oXDNJIOVivwsudceXEFUblTeN87UjF7C1',
  access_token_key: '962475972233711617-HoYApUK09U7QIv2lonDzcXzOfw7tzzD',
  access_token_secret: '1isfTDNHwxY8Fy2XqUuyBSvf1xF4H3sAxdKZeyhfMdxKO'
});


class Timeline extends Component {
    state = {
        tweets: []
    }
    componentDidMount() {
        const params = {screen_name: this.props.screen_name};
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (!error) {
                console.log(tweets)
              this.setState({
                  tweets
              })
            }
            else {
                console.log(error)
            }
          });
    }
    render() {
        return (
            <div>
                {this.state.tweets.map(
                tweet => {
                    return (
                        <div>{JSON.stringify(tweet)}</div>
                    )
                }
            )}
            </div>
        )
    }
}


export default Timeline;