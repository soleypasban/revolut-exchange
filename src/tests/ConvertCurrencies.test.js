import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { getTransactions } from '../helpers/convertCurrencies';
import { CurrencySign } from '../dictionary/Currencies';

configure({ adapter: new Adapter() });

const amounts = { from: 1, to: 1.1 }
const convert = { from: 'EUR', to: 'USD' }

const expectedFrom = {
    sign: '-',
    amount: 1,
    currency: 'EUR',
    icon: 'transaction',
    description: `Exchanged to USD`,
    date: 'Today',
    value: `${CurrencySign['USD']}1.1`,
    info: `+${CurrencySign['USD']}1.1`
}

const expectedTo = {
    sign: '+',
    amount: 1.1,
    currency: 'USD',
    icon: 'transaction',
    description: `Exchanged from EUR`,
    date: 'Today',
    value: `${CurrencySign['EUR']}1`,
    info: `-${CurrencySign['EUR']}1`
}

const { tFrom, tTo } = getTransactions(amounts, convert)
const keys = Object.keys(expectedFrom)

test('compare transactions key by key', () => {
    keys.forEach(key => {
        const f1 = `${key}:${tFrom[key]}`
        const f2 = `${key}:${expectedFrom[key]}`
        const t1 = `${key}:${tTo[key]}`
        const t2 = `${key}:${expectedTo[key]}`

        expect(f1).toEqual(f2);
        expect(t1).toEqual(t2);
    })
});

test('compare transactions by difference in values', () => {
    const errorFrom = keys.filter(key => expectedFrom[key] !== tFrom[key])
    const errorTo = keys.filter(key => expectedTo[key] !== tTo[key])

    expect(errorTo.length).toEqual(0);
    expect(errorFrom.length).toEqual(0);
});

test('compare transactions by json output', () => {
    expect(JSON.stringify(expectedFrom)).toEqual(JSON.stringify(tFrom));
    expect(JSON.stringify(expectedTo)).toEqual(JSON.stringify(tTo));
});

