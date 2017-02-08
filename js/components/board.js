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
    const update = this.state.cards.slice()
      update.push(this.state.text)
      this.setState({ update: update })
    // this.setState ({
    //   cards: this.state.cards.concat(this.state.text)
    // })
  }


  renderListContainers() {
    return this.state.lists.map((list, index) => {
      return <ListContainer key={index}
              title={list.title} cards={list.cards}
              onChange={this.onAddInputChanged}

              onSubmit={this.onSubmit} />
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
