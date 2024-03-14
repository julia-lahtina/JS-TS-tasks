export type UserType10 = {
    name: string
    hair: number
    address: { title: string }
}

export type LapTopType = {
    title: string
}

export type UserWithLaptopType = UserType10 & {
    laptop: LapTopType
}

export type UserWithBooksType = UserType10 & {
    books: Array<string>
}

type CompanyType = { id: number, title: string };
export type WithCompaniesType = {
    companies: Array<CompanyType>
}


export function makeHairstyle(u: UserType10, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    };

    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            title: city
        }
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptopName: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptopName
        }
    }
}
export function addNewBookToUser(u: UserWithBooksType & UserWithLaptopType, newBook: string) {
    return {
        ...u,
        books: [...u.books, newBook]
    }
}

export function updateBook(u: UserWithBooksType & UserWithLaptopType, oldBook: string, newBook: string) {
    return  {
        ...u,
        books: u.books.map(el => el === oldBook ? newBook : el)
    }

}

export function removeBook(u: UserWithBooksType & UserWithLaptopType, oldBook: string) {
    return  {
        ...u,
        books: u.books.filter(el => el !== oldBook)
    }
}

export function updateCompanyTitle(u: UserWithLaptopType & WithCompaniesType, id: number, title: string) {
    return  {
        ...u,
        companies: u.companies.map(c => c.id === id ? {...c, title: title} : c)
    }
}

export function updateCompanyTitle2(
    companies: { [key: string]: Array<CompanyType> },
    userName: string,
    companyId: number,
    newTitle: string) {

    let companyCopy = {...companies}

    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ?
        {...c, title: newTitle} : c)


    return companyCopy;
}



