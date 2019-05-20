import fetch from 'isomorphic-unfetch'
import convert from 'xml-js'

export const getEuropa = async (callback) => {
    const isLive = window && (window.location.host.indexOf('localhost') < 0)
    // const url = isLive ? 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml' : 'http://localhost:3000/test.xml'
    const url = isLive ? '//live.php' : 'http://localhost:3000/test.xml'
    const xml = await fetch(url)
    const raw = await xml.text()
    const json = JSON.parse(convert.xml2json(raw, { compact: true, spaces: 4 }));
    const rate = {}
    json['gesmes:Envelope']['Cube']['Cube']['Cube']
        .map(x => x['_attributes'])
        .forEach(x => rate[x['currency']] = (1 / x['rate']).toFixed(4))
    callback && callback(rate)
}