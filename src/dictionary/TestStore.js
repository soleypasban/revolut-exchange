export const TestStore = {
    form: {},
    balance: {
        EUR: 89.65,
        USD: 4,
        TRY: 130.65
    },
    settings: {
        currencies: {
            accounts: 'EUR',
            exchange: {
                from: 'TRY',
                to: 'USD'
            },
            add: 'EUR'
        },
        exchangeRate: null,
        rates: {
            USD: '0.8951',
            JPY: '0.0082',
            BGN: '0.5113',
            CZK: '0.0388',
            DKK: '0.1339',
            GBP: '1.1416',
            HUF: '0.0031',
            PLN: '0.2324',
            RON: '0.2100',
            SEK: '0.0929',
            CHF: '0.8863',
            ISK: '0.0073',
            NOK: '0.1021',
            HRK: '0.1346',
            RUB: '0.0139',
            TRY: '0.1478',
            AUD: '0.6158',
            BRL: '0.2208',
            CAD: '0.6634',
            CNY: '0.1295',
            HKD: '0.1140',
            IDR: '0.0001',
            ILS: '0.2504',
            INR: '0.0127',
            KRW: '0.0007',
            MXN: '0.0467',
            MYR: '0.2140',
            NZD: '0.5846',
            PHP: '0.0170',
            SGD: '0.6508',
            THB: '0.0282',
            ZAR: '0.0622',
            EUR: 1
        }
    },
    transactions: {
        EUR: [
            {
                sign: '+',
                amount: '13',
                currency: 'EUR',
                icon: 'topup',
                description: 'Added to balance',
                date: 'Today',
                info: 'Visa 1234'
            },
            {
                sign: '+',
                amount: '1.65',
                currency: 'EUR',
                icon: 'transaction',
                description: 'Exchanged from TRY',
                date: 'Today',
                info: '-₺10.00'
            },
            {
                sign: '-',
                amount: '10.00',
                currency: 'EUR',
                icon: 'transaction',
                description: 'Exchanged to TRY',
                date: 'Today',
                info: '+₺11.17'
            },
            {
                sign: '+',
                amount: '35',
                currency: 'EUR',
                icon: 'topup',
                description: 'Added to balance',
                date: 'Today',
                info: 'Visa 1234'
            },
            {
                sign: '+',
                amount: '50',
                currency: 'EUR',
                icon: 'topup',
                description: 'Added to balance',
                date: 'Today',
                info: 'Visa 1234'
            }
        ],
        USD: [
            {
                sign: '-',
                amount: '5.00',
                currency: 'USD',
                icon: 'transaction',
                description: 'Exchanged to TRY',
                date: 'Today',
                info: '+₺4.48'
            },
            {
                sign: '+',
                amount: '9',
                currency: 'USD',
                icon: 'topup',
                description: 'Added to balance',
                date: 'Today',
                info: 'Visa 1234'
            }
        ],
        TRY: [
            {
                sign: '-',
                amount: '10.00',
                currency: 'TRY',
                icon: 'transaction',
                description: 'Exchanged to EUR',
                date: 'Today',
                info: '+€1.65'
            },
            {
                sign: '+',
                amount: '125',
                currency: 'TRY',
                icon: 'topup',
                description: 'Added to balance',
                date: 'Today',
                info: 'Visa 1234'
            },
            {
                sign: '+',
                amount: '4.48',
                currency: 'TRY',
                icon: 'transaction',
                description: 'Exchanged from USD',
                date: 'Today',
                info: '-$5.00'
            },
            {
                sign: '+',
                amount: '11.17',
                currency: 'TRY',
                icon: 'transaction',
                description: 'Exchanged from EUR',
                date: 'Today',
                info: '-€10.00'
            }
        ]
    }
}