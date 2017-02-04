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
  }

  renderListContainers() {
    return this.state.lists.map((list, index) => {
      return <ListContainer key={index} title={list.title} cards={list.cards} />
    })
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
