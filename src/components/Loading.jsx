import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import "./Loading.css"

class Loading extends Component {

    render() {
        return (
            <ReactLoading type="cylon" color="#45F6C3" height={'10%'} width={'10%'} className="Loader" />
        );

    }
}

export default Loading;