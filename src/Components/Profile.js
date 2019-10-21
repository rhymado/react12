import React, {Component} from 'react';
import Axios from 'axios';

class Profile extends Component {
  state = {
    title: '',
    author: '',
  };
  render () {
    return (
      <div style={{backgroundColor: 'greenyellow'}}>
        <p style={{fontSize: 50}}>Profile</p>
        <form
          onSubmit={e => {
            e.preventDefault ();
            Axios.post ('http://localhost:8000/book', this.state)
              .then (response => console.log (response))
              .catch (error => console.log (error));
          }}
        >
          <p>Title</p>
          <input
            type="text"
            onChange={e => this.setState ({title: e.target.value})}
          />
          <p>Author</p>
          <input
            type="text"
            onChange={e => this.setState ({author: e.target.value})}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Profile;
