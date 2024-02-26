export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
}


// здесь храним объекты в ассоциативном массиве
type UsersType = {
    [key: string]: { id: number, name: string }
}
export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '3232323': {id: 3232323, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'},
}

//users[1].id - быстро получили доступ к юзеру с идентификатором 1
let user = {id: 100500, name: 'Igor'};
users[user.id] = user; // добавление происходит быстро
delete users[user.id] // удаление происходит быстро
users[user.id].name = 'Vitya'

//-----------------------------------------------------------------------------
// а здесь в обычном массиве
export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 3232323, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'},
]

// если у нас много объектов в массиве и мы не знаем конкретный индекс, то чтобы найти по идентификатору, нужно использовать метод find (u => u.id === 1) - это долго

// let usersCopy = [...usersArray.filter(), user] - добавление

// let users = usersArray.filter(u => u.id !== user.id) - фильтр будет пробегать по всему массиву, это долго, трудоемко, особенно если массив огромен