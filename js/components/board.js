import React, {Component} from 'react';
import ListContainer from './list-container'

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardTitle: props.title,
      lists: [
        {
          title: 'list title 1'
        },
        {
          title: 'list title 2'
        },
        {
          title: 'list title 3'
        },
        {
          title: 'list title 4'
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
