let time = require('./settimeout');

test('should first', async () => { 
    let t = await time();
     expect(t).toBe(0);
 }) 