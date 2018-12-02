import React, { Component } from 'react';

class Timeline extends Component {
    render() {
        return (
            <div>
                {this.props.tweets.map(
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