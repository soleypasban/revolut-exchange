import fetch from 'isomorphic-unfetch'
import convert from 'xml-js'

export const getEuropa = async (callback) => {
    // const xml = await fetch('https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml')
    const xml = await fetch('http://localhost:3000/test.xml')
    const raw = await xml.text()
    const json = JSON.parse(convert.xml2json(raw, { compact: true, spaces: 4 }));
    const rate = {}
    json['gesmes:Envelope']['Cube']['Cube']['Cube']
        .map(x => x['_attributes'])
        .forEach(x => rate[x['currency']] = (1 / x['rate']).toFixed(4))
    callback && callback(rate)
}