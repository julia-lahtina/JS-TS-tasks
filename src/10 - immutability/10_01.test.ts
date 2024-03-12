import {makeHairstyle, moveUser, upgradeUserLaptop} from './10_01';


test('reference type test', () => {
    let user = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    }

    const awersomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awersomeUser.hair).toBe(16)
    expect(awersomeUser.address).toBe(user.address)

})

test('change address', () => {
    let user = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiew')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.title).toBe('Kiew')
})

test('upgrade laptop to macbook', () => {
    let user = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const upgradeUser = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(upgradeUser)
    expect(user.address).toBe(upgradeUser.address)
    expect(user.laptop).not.toBe(upgradeUser.laptop)
    expect(upgradeUser.laptop.title).toBe('Macbook')
})