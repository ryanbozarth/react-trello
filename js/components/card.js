import React from 'react';
import ReactDOM from 'react-dom';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "Card content"
    }
  }
  renderCard() {
    return this.state.content
    // .map(function(content, i){
    //   return <Card key={i} content={content} />
    // })
  }
  render() {
    return (
      <div>
      <p>{this.renderCard()}</p>
      </div>
    )
  }
}
