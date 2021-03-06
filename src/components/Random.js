import React, {Component} from 'react';
import Navbar from './misc/NavBar';
import { randomBeer } from '../services/BeersServices';


class Random extends Component {
  constructor(props){
    super(props)
    this.state = {
      randomBeer: [],
      error: false
    }
  }

  componentDidMount = () => {  
    randomBeer()
    .then((response) => {
      this.setState({ randomBeer: response.data[0]})
    },
    (err) => {
      this.setState({ error: true })
    })
    
  }

  render = () => {
     
    if (this.state.error) {
      return (<h1>Sorry!!!</h1>);
  } else {
      return (
      <div className="container">
      <Navbar/>
        <div className="container">
          <div className="card" key={this.state.randomBeer._id}>
            <div className="card-image">
            <img src={this.state.randomBeer.image_url} alt={this.state.randomBeer.name} className="image_card"/>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                <h3>{this.state.randomBeer.name}</h3>
                <h5>{this.state.randomBeer.tagline}</h5>
                </div>
                <div className="media-right">
                <h3>{this.state.randomBeer.attenuation_level}</h3>
                <h5>{this.state.randomBeer.first_brewed}</h5>
                </div>
              </div>
                <h6><strong>Created by: </strong>{this.state.randomBeer.name}</h6>
                  <p className="title is-4">{this.state.randomBeer.tagline}</p>
                  <p className="subtitle is-6">{this.state.randomBeer.brewers_tips}</p>    
            </div>
          </div>
        </div>
      </div>
  )
      }
}
}


  



export default Random