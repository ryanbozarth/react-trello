import React from 'react';
import Card from './card';

export default class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "List Title",
      list: ["List One", "List Two", "List Three"]
    }
  }
  renderCardList() {
    return this.state.list.map(function(title, i){
      return <Card key={i} title={title} />
    })
  }
  render() {
    return (
        <div className="card-list">
          <h1>{this.state.title}</h1>
          {this.renderCardList()}
        </div>
    )
  }
}
