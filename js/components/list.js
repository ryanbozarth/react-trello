import React from 'react';
import Card from './card';

export default class CardList extends React.Component {
  render() {
    const card = [];
      for (let i=0; i<3; i++) {
          card.push(<Card />);
      }
      return (
          <div className="card-list">
              {card}
          </div>
      );
  }
}
