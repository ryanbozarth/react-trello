import React, {Component} from 'react';
import CardList from './card-list'

export default class ListContainer extends Component {
  constructor() {
    super();
    this.state = { cards: [], text: '' }
    this.onSubmit = this.onSubmit.bind(this);
    this.onAddInputChanged = this.onAddInputChanged.bind(this);
  }

  onAddInputChanged(event) {
    let text = event.target.value;
    console.log(text);
    this.setState({
      text: text
    })
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      cards: [...this.state.cards, this.state.text],
      text: ''
    })
  }

  render(){
    return (
      <div>
        <h3>{this.props.title}</h3>
        <CardList cards={this.state.cards}
          text={this.state.text}
          onChange={this.onAddInputChanged}
          onSubmit={this.onSubmit} />
        </div>
      );
    }
}
