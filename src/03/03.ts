import type {StudentType} from "../02/02.ts";
import type {CityType, GovernmentBuildingType, GovernmentBuildingTypes, HouseType} from "../02/types.ts";

export const sum = (a: number, b: number) => a + b

export const addSkill = (student: StudentType, skill: string) => {
  student.technologies.push({
    name: skill,
    id: new Date().getTime()
  })
}

export const makeStudentActive = (student: StudentType) => {
  student.isActive = true;
}

export const checkDoesStudentLiveInCity = (student: StudentType, cityTitle: string) => {
  return student.address.city.title === cityTitle;
}

export const addMoneyToBudget = (governmentBuildings: GovernmentBuildingType[], governmentType: GovernmentBuildingTypes, toAdd: number) => {
  governmentBuildings.map(building => {
    if (building.type === governmentType) {
      building.budget += toAdd;
    }
  })
}

export const repairHouse = (house: HouseType) => {
  house.repaired = true;
}

export const toFireStaff = (governmentBuilding: GovernmentBuildingType, toFire: number) => {
  governmentBuilding.staffCount -= toFire;
}

export const toHireStaff = (governmentBuilding: GovernmentBuildingType, toHire: number) => {
  governmentBuilding.staffCount += toHire;
}