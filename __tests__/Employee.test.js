// add employee require
const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Employee = require('../lib/Employee');

//create employee object
test('creates employee object', () => {
    const employee = new Employee('Courtez', 2, 'courtezcannady.gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
//get employee name
test('gets name of employee', () => {
    const employee = new Employee('Courtez', 2, 'courtezcannady.gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});
//get employee ID
test('gets the employee ID', () => {
    const employee = new Employee('Courtez', 2, 'courtezcannady.gmail.com');
    expect(employee.getID()).toEqual(expect.any(Number));
});
//get employee email
test('gets the employee email', () => {
    const employee = new Employee('Courtez', 2, 'courtezcannady.gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
//get employee role
test('gets the employee role', () => {
    const employee = new Employee('Courtez', 2, 'courtezcannady.gmail.com');
    expect(employee.getJob()).toEqual("Employee");
});
