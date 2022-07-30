import React, { Component } from 'react';

// Include react-loading
import ReactLoading from 'react-loading';

//Include style
import "./Loading.css"

/***** LOADING COMPONENT : Used when data is still fetching. *****/

class Loading extends Component {

    render() {
        return (
            <ReactLoading type="bars" color="#50E8DC " height={'10%'} width={'10%'} className="Loader" />
        );

    }
}

export default Loading;