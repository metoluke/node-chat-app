const expect = require('expect');
var {
    generateMessage,
    generateLocationMessage
} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'luke';
        var text = 'hello';
        const res = generateMessage(from, text);
        expect(res.from).toEqual(from);
        expect(res.text).toEqual(text);
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {

        var from = 'Luke';
        var lat = 12.3;
        var lon = 13.4;

        var res = generateLocationMessage(from, lat, lon);
        expect(res.from).toEqual(from);
        expect(res.url).toEqual('https://www.google.com/maps?q=12.3,13.4');
    });
})