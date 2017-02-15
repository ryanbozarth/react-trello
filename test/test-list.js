import React from 'react'
import TestUtils from 'react-addons-test-utils'
import chai from 'chai'
import CardList from '../js/components/card-list'

const should = chai.should();

describe('List component', function() {
  it('Renders a CardList component', function() {
    const cards = [
      'Test Card 1',
      'Test Card 2'
    ];
    const title = 'Title';

    const renderer = TestUtils.createRenderer();
    renderer.render(<CardList title={title} cards={cards} />);
    const result = renderer.getRenderOutput();

    const children = result.props.children;
    children[1].type.should.equal('form');
    // children[1][0].props.text.should.equal(cards[0]);
    // children[1][1].props.text.should.equal(cards[1]);

  });
});
