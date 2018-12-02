import React, {Component} from 'react';
import Twitter from "twitter";
import Timeline from "./Timeline";
import './App.scss';

 
const client = new Twitter({
    consumer_key: 'CL7qfSvWHGqPb8KAo4I9xgPIu',
    consumer_secret: 'rPZc7NfGggwXumao3oXDNJIOVivwsudceXEFUblTeN87UjF7C1',
    access_token_key: '962475972233711617-HoYApUK09U7QIv2lonDzcXzOfw7tzzD',
    access_token_secret: '1isfTDNHwxY8Fy2XqUuyBSvf1xF4H3sAxdKZeyhfMdxKO'
  });


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screen_name: '',
            tweets: []
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({screen_name: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.screen_name);
        event.preventDefault();
        const params = {screen_name: this.state.screen_name};
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
            console.log(response)
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
            <div className="App">
                <header className="app-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-row">
                                    <div className="col">
                                        <input type="text" 
                                        className="form-control" 
                                        name="screen_name"
                                        placeholder="Screen Name" 
                                        onChange={this.handleChange}
                                        value={this.state.screen_name}/>
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn btn-primary btn-block">Get Timeline</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </header>
            {this.state.tweets && <Timeline tweets={this.state.tweets}/>}
            </div>
        );
    }
}

export default App;
