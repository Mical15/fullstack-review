import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    // this.get = this.get.bind(this);

  }

  search(term) {
    console.log(`${term} was searched`);
    // TODO
  }

  // get() {
  //   fetch('/repos', {
  //     method: 'GET'
  //   })
  //     // .then(res => res.json())
  //     .then(result => console.log(result))
  //     .then(res => res.body)
  //     .then((body) => {
  //       this.setState({
  //         repos: body
  //       })
  //       // console.log(this.state.repos);
  //     },
  //   (error) => {
  //         this.setState({
  //           error
  //         });
  //       }
  //     )

  // }

  componentDidlMount() {
    // this.search();
    // this.get(this.state.repos)
  }


  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} />
      <Search onSearch={this.search.bind(this)} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));