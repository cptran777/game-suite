/* The Home container contains all of the components that will appear
*  as the index route in the application and serves as a landing page
*/

/*************** REACT AND CUSTOM IMPORTS ******************/

import React from 'react';

/********************** MAIN EXPORT ************************/

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main id="app-body" className="row container-fluid">
        <div className="row content-header">
          <h2 className="content-heading">Welcome to Game Suite</h2>
        </div>
        <div className="row content-body"></div>
      </main>
    );
  }
}

export default Home;