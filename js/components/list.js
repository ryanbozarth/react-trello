import React from 'react';
import Card from './card';

export default function CardList(props) {
  let state = {
    text: '',
    el: null //
  }

  function renderCardList() {
    return props.list.map(function(text, i){
      return <Card key={i} text={text} />
    })
  }
  function onAddSubmit(event){
    event.preventDefault()
    props.addCard(state.text, props.title)
    state.el.value = null //
  }
  function onAddInputChanged(event){
    state.text = event.target.value
    if (!state.el) { //
      state.el = event.target
    }
  }

  return (
    <div className="card-list">
      <h1>{props.title}</h1>
      {renderCardList()}
      <form>
        <input type="text" onChange={onAddInputChanged}></input>
        <button type="submit" onClick={onAddSubmit}>Add</button>
      </form>
    </div>
  )
}
