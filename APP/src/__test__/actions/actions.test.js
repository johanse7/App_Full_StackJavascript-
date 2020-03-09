import { fetchProcessText, FETCH_PROCESS_TEXT_SUCCESS, FETCH_PROCESS_TEXT_REQUEST } from '../../redux/actions/processTextActions';
import FormMock from '../__mocks__/FormMock';
import { mockStore } from '../__mocks__/mockStore';
import getData from '../../utils/getData';

describe('Actions', () => {

  it('test action FETCH_PROCESS_TEXT ', async () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    const store = mockStore();
    await store.dispatch(fetchProcessText(FormMock));
    const actions = store.getActions();
    console.log( actions)
    const expectedInit = {
      type: FETCH_PROCESS_TEXT_REQUEST
    };
    expect(actions[0]).toEqual(expectedInit);
  });

});


describe('API process test', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('call api and return equal data', () => {
    fetch.mockResponseOnce(JSON.stringify({ text: 'my text' }));

    getData('http://localhost:3000')
      .then((response) => {
        expect(response.text).toEqual('my text');
      });
    expect(fetch.mock.calls[0][0]).toEqual('http://localhost:3000');
  });

});
