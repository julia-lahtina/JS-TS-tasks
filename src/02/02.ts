type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AdsressType
    technologies: Array<TechType>
}

type AdsressType = {
    streetTitle: string
    city: LocalCityType
}

type LocalCityType = {
    title: string
    country: string
}

type TechType = {
    id: number
    title: string
}


const student: StudentType = {
    id: 1,
    name: "John",
    age: 31,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            country: "Belarus"
        }
    },
    technologies: [
        {
           id: 1,
           title: "HTML"
        },

        {
           id: 2,
           title: "CSS"
        },

        {
           id: 3,
           title: "React"
        },

    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)