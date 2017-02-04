import React from 'react';
import Card from './card';

export default function CardList(props) {

  function renderCards() {
    return props.cards.map(function(title, index){
      return <Card key={index} title={title} />
    })
  }

  return (
    <div className="card-list">
      {renderCards()}
      <form>
        <input type="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
