import React from 'react';
import CardList from './list';

export default class Board extends React.Component {
  render() {
    const board = [];
      for (let i=0; i<3; i++) {
          board.push(<CardList />);
      }
      return (
          <div className="board-list">
              {board}
          </div>
      );
  }
}
