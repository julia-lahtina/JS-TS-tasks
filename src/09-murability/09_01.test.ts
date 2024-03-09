
type UserType = {
    name: string
    age: number
}

function increaseAge (u: UserType) {
    u.age++;
}


test('big test', () => {
    let user: UserType = {
        name: 'Dimych',
        age: 32
    }
    increaseAge(user);
    expect(user.age).toBe(33);

    let superman = user;
    superman.age = 1000;           //---- в юзере тоже возраст поменяется, так как ссылка на объект одна
    expect(user.age).toBe(1000);

})

test('array test', () => {
    let users = [
        {
        name: 'Dimych',
        age: 32
    },
        {
            name: 'Bob',
            age: 35
        },
    ]

    let admins = users;
    admins.push({name: 'Sisi', age: 25})


    expect(users.length).toBe(3);
    expect(users[2]).toEqual({name: 'Sisi', age: 25});

})

test('value type test', () => {

    let user = {
        name: 'Dima',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    let user2 = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }

    user2.address.title = 'Berlin'

    expect(user.address.title).toBe('Berlin')
    expect(user2.address.title).toBe('Berlin')
    expect(user.address.title).toBe(user2.address.title)

})