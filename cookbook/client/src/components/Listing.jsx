const React = require('react')
const Router = require('react-router')
const { Link, browserHistory } = Router
const Recipe = require('./Recipe')

const Listing = React.createClass({

  getInitialState () {
    return {searchQuery: '', recipes:[]}
  },

  componentDidMount () {
    var url = "http://localhost:5000/api/recipes";
    var request = new XMLHttpRequest();
    request.open("GET", url);

    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;

    request.onload = () => {
      if(request.status === 200) {
        var data = JSON.parse(request.responseText);
        this.setState({ recipes:data});
      }
      else{
        console.log("Whoops... you don't seem to be logged in")
        browserHistory.goBack()
      }
    }
    request.send(null);
  },

  doSearch (event) {
    this.setState({searchQuery: event.target.value})
  },

  render () {
    return (
      <div className= "listing">
      <nav>
        <Link className='title' to='/'>CookBook</Link>
        <input className='search-box' type='text' placeholder='Search' value={this.state.searchQuery} onChange= {this.doSearch} />
      </nav>

      <div className ='recipes-container'>
        {
          this.state.recipes.filter((recipe) => `${recipe.name} ${recipe.ingredients}`.toUpperCase().indexOf(this.state.searchQuery.toUpperCase()) >= 0).map((recipe) => (
          <Recipe {...recipe} key={recipe.name}/>
        ))
      }
      </div>

    </div>
    )
  }
})


module.exports = Listing