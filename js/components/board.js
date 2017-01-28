import React, {Component} from 'react';
import CardList from './list';

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
  }
  renderBoard() {
    let lists = []
    for (var key in this.state.list) {
      lists.push(<CardList key={key} title={key} list={this.state.list[key]} />)
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
