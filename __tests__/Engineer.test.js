const Engineer = require('../lib/Engineer');

// creates engineer object
test('creates Engineer object', () => {
    const engineer = new Engineer('Courtez', 10, 'courtezcannady@gmail.com', 'tez28');
    expect(engineer.github).toEqual(expect.any(String));
});

// add github
test('adds engineers github', () => {
    const engineer = new Engineer('Courtez', 10, 'courtezcannady@gmail.com', 'tez28');
    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Courtez', 10, 'courtezcannady@gmail.com', 'tez28');
    expect(engineer.getJob()).toEqual("Engineer");
});