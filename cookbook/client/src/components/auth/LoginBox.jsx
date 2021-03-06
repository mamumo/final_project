const React = require('react')
const SignIn = require('./SignIn')
const SignUp = require('./SignUp')
const SignOut = require('./SignOut')

const LoginBox = React.createClass({

  getInitialState: function() {
    return {currentUser: null};
  },

  setUser:function(user){
    this.setState({currentUser:user, favlist:[]});
  },

  fetchUser: function(){
    console.log("fetching user")
    var request = new XMLHttpRequest();
    request.open("GET", "http://localhost:5000/" + "users.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;

    request.onload = function(){
      if(request.status === 200){
        console.log('request.responseText', request.responseText);
        var receivedUser = JSON.parse(request.responseText);
        this.setUser(receivedUser)
      }else if(request.status === 401){
        this.setState({currentUser:false});
      }
    }

    //.bind(this)
    request.send(null);
  },

  componentDidMount: function(){
    this.fetchUser();
  },

  render () {
      let mainDiv = <div>
        <section className='description'>Search. Cook. Save.</section>
        <div className= 'section'>
        <h3> New to CookBook?</h3> 
        <h4>Sign Up Here </h4>
        <SignUp url={this.props.url + "users.json"} onSignUp={this.setUser}/>
        </div>
        <div className= 'section'>
        <h3> Already a Member? </h3>
        <h4>Please Sign In Here</h4>
        <SignIn url={this.props.url + "users/sign_in.json"} onSignIn={this.setUser}/>
        </div>
      </div>
      if(this.state.currentUser){
        mainDiv = <div>
          <h4> Welcome {this.state.currentUser.email}</h4>
          <SignOut url={this.props.url + "users/sign_out.json"} onSignOut={this.setUser}/>
        </div>
      }
      return (
        <div>
          { mainDiv }
        </div>
      ) 
  }
})

module.exports = LoginBox
