import { addMoney, removeMoney } from '../../actions/balance'
import { ADD_MONEY, REMOVE_MONEY } from '../../actions/balance'

describe('balance actions', () => {
    const currency = 'EUR'
    const amount = 10

    it('should create an action to add money', () => {
        const expectedAction = {
            type: ADD_MONEY,
            payload: { currency, amount }
        }
        expect(addMoney(currency, amount)).toEqual(expectedAction)
    })

    it('should create an action to remove money', () => {
        const expectedAction = {
            type: REMOVE_MONEY,
            payload: { currency, amount }
        }
        expect(removeMoney(currency, amount)).toEqual(expectedAction)
    })
})

