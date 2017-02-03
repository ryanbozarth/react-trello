import React, {Component} from 'react';
import CardList from './card-list'

export default class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      card: ['card one', 'card two']
  }
  }

   onAddSubmit(event){
    event.preventDefault()
    props.addCard(state.text, props.title)
    state.el.value = null //
  }

   onAddInputChanged(event){
    state.text = event.target.value
    if (!state.el) { //
      state.el = event.target
    }
  }

  render() {
    return <CardList title="test" list={this.state.card}/>
  }

}
