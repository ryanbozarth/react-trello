import React, {Component} from 'react';
import CardList from './card-list';
import ListContainer from './list-container'

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      list: {
        animals: ["bears", "tigers", "lions"],
        fruits: ["apple", "banana", "pears"],
        veggies: ["carrot", "lettuce", "kale"]
      }
    }
    this.addCardToList = this.addCardToList.bind(this)
  }
  addCardToList(text, list) {
    console.log({text, list})
    this.setState(state => {
      return state.list[list].push(text)
    })
  }
  renderBoard() {
    let lists = []
    for (var key in this.state.list) {
      lists.push(<ListContainer key={key} addCard={this.addCardToList} title={key} list={this.state.list[key]} />)
    }
    return lists
  }
  render() {
    return (
        <div className="board">
          <h1>{this.state.title}</h1>
         {this.renderBoard()}
        </div>
    )
  }
}
