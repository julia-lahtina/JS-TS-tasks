export type AddressType = {
    number?: number
    street: StreetType
}

export type StreetType = {
    title: string
}

export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type GovermentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: AddressType

}

export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovermentBuildingsType>
    citizensNumber: number
}

