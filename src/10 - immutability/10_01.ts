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

