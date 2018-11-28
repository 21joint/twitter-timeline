import React, {Component} from 'react';
import Header from "./components/Header"
import {Timeline} from "react-twitter-widgets";
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            screen_name: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            username: e.target.username.value,
            screen_name: e.target.screen_name.value
        });
    }


    render() {
        const _timeline = (this.state.username && this.state.screen_name) ? <Timeline
            dataSource={{
                sourceType: 'profile',
                screenName: this.state.screen_name
            }}
            options={{
                username: this.state.username,
                height: '100%',
                width: '100%'
            }}
            onLoad={() => console.log('Timeline is loaded!')}
        /> : "";
        return (
            <div className="App">
                <Header
                    username={this.state.username}
                    screen_name={this.state.screen_name}
                    onSubmit={this.onSubmit.bind(this)}/>
                {_timeline}
            </div>
        );
    }
}

export default App;
