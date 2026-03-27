export type CityType = {
  houses: HouseType[]
  governmentBuildings: GovernmentBuildingType[]
}

export type HouseType = {
  buildedAt: number
  repaired: boolean
  address: AddressType
}

export type GovernmentBuildingTypes = "HOSPITAL" | "FIRE-STATION"

export type GovernmentBuildingType = {
  type: GovernmentBuildingTypes
  budget: number
  staffCount: number
  address: AddressType
}

type AddressType = {
  number: number
  street: {
    title: string
  }
}

