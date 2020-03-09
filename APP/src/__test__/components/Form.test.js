import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../__mocks__/provideMock';
import Form from '../../components/Form';

describe('Render component <Form/>', () => {
  test('should ', () => {
    const form = shallow(
      <ProviderMock>
        <Form />
      </ProviderMock>
    );
    expect(form.length).toEqual(1);
  });

});

