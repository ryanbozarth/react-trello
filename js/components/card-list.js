import React, {Component} from 'react';
import Card from './card';

export default class CardList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: props.cards
    }
  }
  renderCards() {
    return this.state.cards.map(function(title, index) {
      return <Card key={index} title={title}/>
    })
  }


  render() {
    return (
      <div className="card-list">
        {this.renderCards()}
        <form>
          <input type="text"/>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
