import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { separateNumberParts } from '../helpers/numbers'

configure({ adapter: new Adapter() });

test('number separated to int and decimals', () => {
    const sep = separateNumberParts(1)
    expect(sep.int).toEqual(1);
    expect(sep.decimals).toEqual('.00');
});

test('0 separated to 0 and .00', () => {
    const sep = separateNumberParts(0)
    expect(sep.int).toEqual(0);
    expect(sep.decimals).toEqual('.00');
});

test('1.123 separated to 1 and .12', () => {
    const sep = separateNumberParts(1.123)
    expect(sep.int).toEqual(1);
    expect(sep.decimals).toEqual('.12');
});

test('1.126 separated to 1 and .12', () => {
    const sep = separateNumberParts(1.12)
    expect(sep.int).toEqual(1);
    expect(sep.decimals).toEqual('.12');
});

test('1234567890.01 separated to 1234567890 and .01', () => {
    const sep = separateNumberParts(1234567890.01)
    expect(sep.int).toEqual(1234567890);
    expect(sep.decimals).toEqual('.01');
});
