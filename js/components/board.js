import React, {Component} from 'react';
import ListContainer from './list-container'

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardTitle: props.title,
      lists: [
        {
          title: 'List One',
          cards: ['Card One', 'Card Two', 'Card Three']
        },
        {
          title: 'List Two',
          cards: ['Card One', 'Card Two', 'Card Three']
        },
        {
          title: 'List Three',
          cards: ['Card One', 'Card Two', 'Card Three']
        },
        {
          title: 'List Four',
          cards: ['Card One', 'Card Two', 'Card Three']
        }
      ]
    }
    this.onAddInputChanged = this.onAddInputChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  renderListContainers() {
    return this.state.lists.map((list, index) => {
      return <ListContainer key={index} title={list.title} cards={list.cards} onChange={onAddInputChanged} onSubmit={onSubmit} />
    })
  }

  onAddInputChanged() {
    // updates state
  // then call parent's callback fn prop
  }

  onSubmit() {
    // updates state
  // then call parent's callback fn prop
  }

  render() {
    return (
        <div className="board">
          <h1>{this.state.boardTitle}</h1>
         {this.renderListContainers()}
        </div>
    )
  }
}
