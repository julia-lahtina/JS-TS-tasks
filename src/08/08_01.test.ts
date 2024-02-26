type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '3232323': {id: 3232323, name: 'Natasha'},
        '1212': {id: 1212, name: 'Valera'},
        '1': {id: 1, name: 'Katya'},
    }
})

test('user should be correct', () => {
    users[1212].name = 'Sergey';
    delete users[1];

    expect(users[101].name).toBe('Dimych');
    expect(users[3232323].name).toBe('Natasha');
    expect(users[1212].name).toBe('Sergey');
    expect(users[1]).toBeUndefined();
})