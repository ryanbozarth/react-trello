import React, {Component} from 'react';
import CardList from './card-list'

export default class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      cards: props.cards
    }
  }

  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <CardList cards={this.state.cards}/>
      </div>
    )
  }
}
