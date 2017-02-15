import React from 'react'
import TestUtils from 'react-addons-test-utils'
import chai from 'chai'

const should = chai.should();

import Card from '../js/components/card'

describe('Card component', function() {
  it('Render the card component and text', function() {
    const title = 'placeholder title'

    const renderer = TestUtils.createRenderer()
    renderer.render(<Card title={title} />)
    const result = renderer.getRenderOutput();
    result.props.className.should.equal('card');
    result.type.should.equal('div');

    const children = result.props.children;
    result.props.should.equal('title');
  });
});
