import { balance } from '../../reducers/balance'
import { addMoney, removeMoney } from '../../actions/balance'


it('should return the initial state', () => {
    expect(balance(undefined, {})).toEqual({})
})


describe('add money to balance reducer', () => {
    it('should return 1 EUR in account', () => {
        expect(balance(undefined, addMoney('EUR', 1))).toEqual({ 'EUR': 1 })
    })

    it('should return 1.15 EUR in account for 1.152', () => {
        expect(balance(undefined, addMoney('EUR', 1.152))).toEqual({ 'EUR': 1.15 })
    })

    it('should return 1.15 EUR in account for -1.152', () => {
        expect(balance(undefined, addMoney('EUR', -1.152))).toEqual({ 'EUR': 1.15 })
    })

    it('should return 3 EUR in account when adding 1.85 to 1.15', () => {
        expect(balance({ 'EUR': 1.15 }, addMoney('EUR', 1.85))).toEqual({ 'EUR': 3 })
    })
})


describe('add money to balance reducer', () => {
    it('should return {} when nothing is in account', () => {
        expect(balance(undefined, removeMoney('EUR', 1))).toEqual({})
    })

    it('should return 3.49 EUR from 5 EUR removing 1.512', () => {
        expect(balance({ 'EUR': 5 }, removeMoney('EUR', 1.512))).toEqual({ 'EUR': 3.49 })
    })

    it('should return 5 EUR from 5 EUR removing 10', () => {
        expect(balance({ 'EUR': 5 }, removeMoney('EUR', 10))).toEqual({ 'EUR': 5 })
    })

    it('should return 0 EUR in account for -5', () => {
        expect(balance({ 'EUR': 5 }, removeMoney('EUR', 5))).toEqual({ 'EUR': 0 })
    })
})
