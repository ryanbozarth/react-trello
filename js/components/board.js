import React from 'react';
import CardList from './list';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Board One",
      list: ["List One", "List Two", "List Three"]
    }
  }
  renderCardList() {
    return this.state.list.map(function(title, i){
      return <CardList key={i} title={title} />
    })
  }
  render() {
    return (
        <div className="board-list">
          <h1>{this.state.title}</h1>
          {this.renderCardList()}
        </div>
    );
  }
}
