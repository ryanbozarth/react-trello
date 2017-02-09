import React from 'react';
import Card from './card';

export default function CardList(props) {

  function renderCardList() {
    return props.cards.map((title, index) => (
       <Card key={index} title={title}/>
      )
    )
  }

    return (
      <div className="card-list">
        {renderCardList()}
        <form onSubmit={props.onSubmit}>
          <input type="text" value={props.text} onChange={props.onChange} />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
