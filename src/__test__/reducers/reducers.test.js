import reducer from "../../reducers";
import ProductMock from "../../__mocks__/productMock";
import ProviderMock from '../../__mocks__/productMock';

describe('reducer', () => {
  test('retorna estado inicial', () => {
    const state = ProviderMock;
    expect(reducer({}, {})).toEqual({});
  });

  test('add to cart', () => {
    const initialState = {
      cart: []
    };


    const payload = ProviderMock;
    const action = {
      type: 'ADD_TO_CART',
      payload
    };


    const expected = {
      cart: [ProductMock]
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});