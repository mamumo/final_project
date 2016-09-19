const React = require('react')
const LoginBox = require('./auth/LoginBox')
const { Link } = require('react-router')

const Home = () => (
  <div className = "home">
  <h1 className='title'> CookBook </h1>
  <LoginBox url="http://localhost:5000/" />
  <Link className = 'recipes-link' to='/recipes'> View Recipes</Link>
</div>
  )

module.exports = Home