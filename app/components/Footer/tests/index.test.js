import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../index';

describe('<Footer />', () => {
  it('should render footer', () => {
    const renderedComponent = shallow(<Footer />);
    expect(
      renderedComponent.contains(
        <div className="footer">
          Created by Hari Krishna K
        </div>
      )
    ).toBe(true);
  });
});
