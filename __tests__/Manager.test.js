// add manager constructor
const Manager = require('../lib/Manager');

// add manager construct
test('creates Manager object', () => {
    const manager = new Manager('Courtez', 2, 'courtezcannady@gmail.com', 10);
    expect(manager.office).toEqual(expect.any(Number));
});

// adds employee role
test('add role for employee', () => {
    const manager = new Manager('Courtez', 2, 'courtezcannady@gmail.com', 10);
    expect(manager.getJob()).toEqual("Manager");
});