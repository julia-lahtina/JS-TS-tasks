
const ages = [18, 20, 22, 1, 100, 90, 14];

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [100]; // > 90

type CourseType = {
    title: string
    preis: number
}

const courses = [
    {title: "CSS", preis: 110},
    {title: "JS", preis: 200},
    {title: "REACT", preis: 150},
]

// > 160€
const cheapPredicate = (course: CourseType) => {
    return course.preis < 160;
}

const cheapCourses = []

