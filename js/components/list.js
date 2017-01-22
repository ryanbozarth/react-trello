import React from 'react';
import Card from './card';

export default class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    }
  }
  render() {
    const card = [];
      for (let i=0; i<3; i++) {
          card.push(<Card key={i} />);
      }
      return (
          <div className="card-list">
            <span>{this.state.title}</span>
            {card}
          </div>
      );
  }
}
