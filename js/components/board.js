import React from 'react';
import CardList from './list';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "The Board",
      list: ["List One", "List Two", "List Three"]
    }
  }
  renderBoard() {
    return this.state.list.map(function(title, i){
      return <Board key={i} title={title} />
    })
  }
  render() {
    return (
        <div className="board">
          <h1>{this.state.title}</h1>
          {this.renderBoard()}
        </div>
    );
  }
}
