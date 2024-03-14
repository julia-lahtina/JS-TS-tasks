import {
    addNewBookToUser,
    makeHairstyle,
    moveUser, removeBook, updateBook, updateCompanyTitle,
    upgradeUserLaptop,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from './10_01';


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
    expect(user.laptop.title).toBe('ZenBook')
})

test('add new book to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const upgradeUser = addNewBookToUser(user, 'ts')

    expect(user).not.toBe(upgradeUser)
    expect(user.books).not.toBe(upgradeUser.books)
    expect(user.laptop).toBe(upgradeUser.laptop)
    expect(user.address).toBe(upgradeUser.address)
    expect(upgradeUser.books[4]).toBe('ts')
})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const upgradeUser = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(upgradeUser)
    expect(user.books).not.toBe(upgradeUser.books)
    expect(user.laptop).toBe(upgradeUser.laptop)
    expect(user.address).toBe(upgradeUser.address)
    expect(upgradeUser.books[2]).toBe('ts')
})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const upgradeUser = removeBook(user, 'js')

    expect(user).not.toBe(upgradeUser)
    expect(user.books).not.toBe(upgradeUser.books)
    expect(user.laptop).toBe(upgradeUser.laptop)
    expect(user.address).toBe(upgradeUser.address)
    expect(upgradeUser.books[2]).toBe('react')
})

test('update company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: 'Eggpam'}, {id: 2, title: 'IT-Incubator'}]
    }

    const userCopy = updateCompanyTitle(user, 1, 'EPAM')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('EPAM')
})

