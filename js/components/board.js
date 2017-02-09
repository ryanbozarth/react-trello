import React, {Component} from 'react';
import ListContainer from './list-container'

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardTitle: props.title,
      lists: [
        {
          title: 'List One'
        },
        {
          title: 'List Two'
        },
        {
          title: 'List Three'
        },
        {
          title: 'List Four'
        }
      ]
    }
  }



  renderListContainers() {
    return this.state.lists.map((list, index) => {
      return <ListContainer key={index}
              title={list.title}
             />
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
