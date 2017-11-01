const expect = require('expect');
var {
    generateMessage
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