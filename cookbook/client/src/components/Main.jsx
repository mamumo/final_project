const React = require('react')

const Main = (props) => (
  <div className = 'container'> 
  {props.children}
  </div>
  )

const { element } = React.PropTypes

Main.proprTypes = {
  children: element.isRequired
}

module.exports = Main