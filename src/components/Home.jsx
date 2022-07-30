
/*---- HOME COMPONENT  ----*/

import React, { Component } from 'react'; 

class Home extends Component {

    render() {
        return (
            <>
                <h1 className="text-center mt-4 font-weight-bold font-italic"><b>Welcome !</b></h1>
                <h2 className="text-center mt-4">Here's the assignment made by Clarence Rouvel.</h2>
                <div className="text-center"><img src={require('../assets/undraw_Engineering_team_a7n2.png').default} /></div>
            </>
            
        );
    }
}

export default Home;