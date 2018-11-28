import "./Header.scss"
import React, {Component} from "react";

class Header extends Component {
    render() {
        return (
            <header className="app-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <form onSubmit={this.props.onSubmit}>
                                <div className="form-row">
                                    <div className="col">
                                        <input type="text" className="form-control" name="username"
                                               placeholder="Username"/>
                                    </div>
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
        )
    }
}

export default Header;
