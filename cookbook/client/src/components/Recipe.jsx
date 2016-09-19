const React = require('react')

const Recipe = (props) => (
  <div className='recipe'>
  <img src={`images/${props.image}`} className = 'recipe-image'/>
  <iframe width="560" height="315" src={props.video} className='recipe-video'frameborder="0" allowfullscreen>
  </iframe>
  <div className='recipe-details'>
    <h3 className='recipe-name'>{props.name}</h3>
    <h4 className='recipe-servings'>Servings ({props.servings})</h4>
    <p className='recipe-ingredients'>Ingredients ({props.ingredients})</p>
    <p className='recipe-preperation'>Preperation ({props.preperation})</p>
      </div>

  </div>


  )

const { string } = React.PropTypes

Recipe.propTypes = {
  name: string.isRequired,
  servings:string.isRequired,
  image: string.isRequired,
  video: string.isRequired,
  ingredients: string.isRequired,
  preperation: string.isRequired
}

module.exports = Recipe