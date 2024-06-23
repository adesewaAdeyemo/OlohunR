import React, { Component} from "react";
import axios from 'axios';

class Api extends Component {
  state= {
    post: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      this.setState({
        post: response.data,
      });
      // console.log(this.state.post);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })


  }
  
  render() {
    const post = this.state.post;
    const allpost= post.map((item, idx) =>{
      return (
        <div key={idx}>
          <h5>{item.title}</h5>;<p>{item.body}</p>;
        </div>
      );
    })
    return( 
    <>
      {allpost}
    
    </>
    );
  }
}

export default Api;
