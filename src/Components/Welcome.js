import React, {Component} from 'react';
// import Axios from 'axios';
import {connect} from 'react-redux';

import {getGithub} from '../Public/Redux/Actions/github';

class Welcome extends Component {
  state = {
    data: '',
  };
  componentDidMount = async () => {
    // Axios.get ('https://api.github.com/search/repositories?q=express')
    //   .then (response => this.setState ({data: response.data.items}))
    //   .catch (error => console.log (error));
    await this.props.dispatch (getGithub ());
    // console.log ('props github', this.props.github);
    this.setState ({
      data: this.props.github.githubList,
    });
  };
  render () {
    console.log (this.state.data);
    return (
      <div style={{backgroundColor: 'goldenrod'}}>
        <p style={{fontSize: 50}}>Welcome</p>
        {typeof this.state.data === 'object'
          ? this.state.data.map (item => {
              return (
                <p key={item.id} style={{fontSize: 30}}>{item.full_name}</p>
              );
            })
          : <img
              src="https://icon-library.net//images/spinner-icon-gif/spinner-icon-gif-14.jpg"
              width="350"
              alt="gambar"
            />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    github: state.github,
  };
};

export default connect (mapStateToProps) (Welcome);
