import React from "react";
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import { create } from 'react-test-renderer';
import Header from '../../components/Header';

describe('<Header/>', () => {
    test('render Header', () => {
        const header = shallow(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );

        expect(header.length).toEqual(1);
    });

    test('Render titulo', () => {
        const header = mount(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );
        expect(header.find('.Header-title').text()).toEqual('Platzi Store');
    });
});

describe('Header snapshop', () => {
    test('generar snapshot del header', () => {
        const header = create(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );
        expect(header.toJSON()).toMatchSnapshot();
    });
});
