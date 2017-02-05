import React from 'react';
import CardList from './card-list'

export default function ListContainer(props) {

  return (
    <div>
      <h3>{props.title}</h3>
      <CardList cards={props.cards}/>
    </div>
  )
}
