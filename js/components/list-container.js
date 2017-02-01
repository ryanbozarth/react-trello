import React from 'react';
import CardList from './list'

export default class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
      text: '',
      cards: []
  }
}

render() {
  // render a List component passing in the array of cards from the state as the cards props
  {renderCardList()}
}
