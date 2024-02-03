import {student, StudentType} from "../02/02";
import {CityType, GovermentBuildingsType, HousesType} from "../02/02_02";

debugger
export const sum = (a: number, b: number) => {
    return a + b;
}

export function addSkill(student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function addSkill2(student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true
}

export function doesStudentLiveIn(s: StudentType, cityName: string) {
    return s.address.city.title === cityName
}

export function addMoneyToBudget(building: GovermentBuildingsType, budget: number) {
    building.budget += budget;
}

export const repairHouse = (hous: HousesType) => {
    hous.repaired = true;
}

export function toFireStaff(city: GovermentBuildingsType, staffCountToFire: number) {
    city.staffCount -= staffCountToFire;
}

export function toHireStaff(building: GovermentBuildingsType, staffCountToHire: number) {
    building.staffCount += staffCountToHire;
}