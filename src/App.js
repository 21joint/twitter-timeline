import React, {Component} from 'react';
import Timeline from "./Timeline";
import './App.scss';

class App extends Component {
    state = {
        screen_name: '',
        tweets: []
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            screen_name: e.target.screen_name.value
        });
    }


    render() {
        return (
            <div className="App">
                <header className="app-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <form onSubmit={this.props.onSubmit}>
                                <div className="form-row">
                                    <div className="col">
                                        <input type="text" className="form-control" name="screen_name"
                                               placeholder="Screen Name"/>
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
