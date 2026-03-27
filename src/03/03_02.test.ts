import type {CityType} from "../02/types.ts";
import {addMoneyToBudget, repairHouse, toFireStaff, toHireStaff} from "./03.ts";

let city: CityType;

beforeEach(() => {
  city = {
    houses: [
      {
        buildedAt: 2012, repaired: false,
        address: {number: 100, street: {title: "White street"}}
      },
      {
        buildedAt: 2008, repaired: false,
        address: {number: 100, street: {title: "Happy street"}}
      },
      {
        buildedAt: 2020, repaired: false,
        address: {number: 200, street: {title: "Hogwarts street"}}
      },

    ],
    governmentBuildings: [
      {
        type: "HOSPITAL", budget: 200000, staffCount: 200,
        address: {number: 100, street: {title: "Central Str"}}
      },
      {
        type: "FIRE-STATION", budget: 500000, staffCount: 1000,
        address: {number: 100, street: {title: "Souths park str"}}
      }
    ]
  }
})

test('Budget should be changed for HOSPITAL', () => {
  addMoneyToBudget(city.governmentBuildings, "HOSPITAL", 100000);

  expect(city.governmentBuildings[0].budget).toBe(300000)
  expect(city.governmentBuildings[1].budget).toBe(500000)
})

test('Budget should be changed for FIRE-STATION', () => {
  addMoneyToBudget(city.governmentBuildings, "FIRE-STATION", -100000);

  expect(city.governmentBuildings[0].budget).toBe(200000)
  expect(city.governmentBuildings[1].budget).toBe(400000)
})

test('House should be repaired', () => {
  repairHouse(city.houses[1])

  expect(city.houses[1].repaired).toBeTruthy()
})

test('staff should be increased', () => {
  toFireStaff(city.governmentBuildings[0], 20)
  expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test('staff should be hire', () => {
  toHireStaff(city.governmentBuildings[0], 20)
  expect(city.governmentBuildings[0].staffCount).toBe(220)
})




