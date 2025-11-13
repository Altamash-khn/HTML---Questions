// This file is initialized with a few test cases.
// Feel free to add, edit, or remove test cases in
// this file as you see fit!

/* ---------------------------------- *
 * ----- BROWSER TESTING SET-UP ----- *
 * ---------------------------------- */
const {JSDOM} = require('jsdom');
const {readFileSync} = require('fs');
const {expect} = require('chai');

const html = readFileSync('data/index.html');

let inputs;
let labels;

const resetDom = () => {
  const dom = new JSDOM(html, {
    resources: 'usable',
    pretendToBeVisual: true,
  });

  global.document = dom.window.document;
  global.window = dom.window;

  inputs = document.querySelectorAll('input');
  labels = document.querySelectorAll('label');
};
/* ---------------------------------- *
 * ----- BROWSER TESTING SET-UP ----- *
 * ---------------------------------- */

const EXPECTED_LABELS = [
  'Username:',
  'Password:',
  'Email:',
  'Phone Number:',
  'Date of Birth:',
  'I agree to the TOS',
];

describe('sign-up form', () => {
  beforeEach(() => {
    resetDom();
  });

  describe('labels', () => {
    it('have the correct text content', () => {
      labels.forEach((label, i) => {
        expect(label.textContent.trim()).to.equal(EXPECTED_LABELS[i]);
      });
    });
  });

  describe('inputs', () => {
    it('username field has the correct attributes', () => {
      const input = inputs[0];
      expect(input.type).to.equal('text');
      expect(input.hasAttribute('required')).to.be.true;
    });
  });
});
