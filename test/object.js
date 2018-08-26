/* globals describe it */

const should = require('chai').should();
const timezones = require('../dist/');

describe('Locales', () => {
  timezones.forEach((timezone) => {
    it(`${timezone.text} - It has a correct format`, () => {
      timezone.should.be.an('object');
    });
  });
});
