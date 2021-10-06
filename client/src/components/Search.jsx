import React from 'react';
import $ from 'jquery';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange (e) {
    // console.log(e.target.value);
    this.setState({
      term: e.target.value
    });
  }

  search() {
    console.log('Pulling ' + this.state.term +'\'s repos!');
    fetch('/repos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"term": this.state.term})
    })
  //   // JSON.stringify(this.state.term)
      // .then(res => res.json())
  //   //   .then((result) => {
  //   //     this.state({
  //   //       repos: result
  //   //     })
  //   //     console.log(result);
  //   //   },
  //   // (error) => {
  //   //       this.setState({
  //   //         error
  //   //       });
  //   //     }
  //     // )
  }


  // componentDidMount() {
  //   const recipeUrl = '/repos';
  //   const postBody = {
  //       type: "hot",
  //       limit: 10
  //   };
  //   const requestMetadata = {
  //       method: 'POST',
  //       headers: {
  //           'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(postBody)
  //   };

  //   fetch(recipeUrl, requestMetadata)
  //       .then(res => res.json())
  //       .then(recipes => {
  //           this.setState({
  //             term: recipes
  //           })
  //       });
  // }



  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.terms} onChange={this.onChange}/>
      <button onClick={this.search}> Add Repos </button>
    </div>)
  }
}

export default Search;