const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Intern = require('../lib/Intern');

// create Intern object
test('creates Intern object', () => {
    const intern = Intern('Courtez', 15, 'courtezcannady@gmail.com', 'TUI');
    expect(intern.university).toEqual(expect.any(String));
});

test('gets intern university', () => {
    const intern = new Intern('Courtez', 15, 'courtezcannady@gmail.com', 'TUI');
    expect(intern.getUniversity()).toEqual(expect.stringContaining(intern.university.toString()));
});

test('gets job of emmployee', () => {
    const intern = new Intern('Courtez', 15, 'courtezcannady@gmail.com', 'TUI');
    expect(intern.getJob()).toEqual("Intern");
});
