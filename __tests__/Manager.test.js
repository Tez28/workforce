// add manager constructor
const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Manager = require('../lib/Manager');

// add manager construct
test('create Manager object', () => {
    const manager = new Manager('Courtez', 2, 'courtezcannady@gmail.com', 10);
    expect(manager.office).toEqual(expect.any(Number));
});

// adds roles
test('add role for employee', () => {
    const manager = new Manager('Courtez', 2, 'courtezcannady@gmail.com', 10);
    expect(manager.getJob()).toEqual("Manager");
});