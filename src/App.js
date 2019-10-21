import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';
import Profile from './Components/Profile';

class App extends Component {
  // constructor () {
  //   super ();
  //   this.name = 'frontend global';
  //   this.state = {
  //     name: 'frontend'
  //   }
  // }
  state = {
    name: 'Frontend',
  };
  // componentDidMount () {
  //   console.log ('did mount');
  //   setTimeout (() => {
  //     this.setState ({
  //       name: 'react',
  //     });
  //   }, 2000);
  // }
  // componentDidUpdate () {
  //   console.log ('did update');
  // }
  // componentWillUnmount () {
  //   clearTimeout ();
  // }
  render () {
    // let name = 'frontend let';
    // console.log (this.state.name);
    // console.log (this.name);
    // console.log(this.props)
    return (
      <div className="App"> 
        <Navbar title="Navbar"/>
        {/* <div className="Bg-Text">
          <p style={{fontSize: 100}}>{this.state.name}</p>
        </div> */}
        <Route exact path='/' component={Welcome} />
        <Route path='/profile' component={Profile} />
        <Navbar title={this.state.name} />
      </div>
    );
  }
}

export default App;
