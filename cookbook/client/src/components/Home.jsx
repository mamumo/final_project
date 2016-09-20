const React = require('react')
const LoginBox = require('./auth/LoginBox')
const { Link } = require('react-router')

const Home = () => (
  <div className = "home">
  <LoginBox url="http://localhost:5000/" />
  <Link className = 'recipes-link' to='/recipes'> Let's Cook! </Link>
</div>
  )

module.exports = Home

