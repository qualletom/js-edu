export type StudentType = {
  id: number
  name: string
  age: number
  isActive: boolean
  address: AddressType,
  technologies: TechnologyType[]
}

type AddressType = {
  streetTitle: string
  city: CityType
}

type CityType = {
  title: string,
  country: string
}

type TechnologyType = {
  id: number
  name: string
}

export const student: StudentType = {
  id: 1,
  name: "John",
  age: 25,
  isActive: false,
  address: {
    streetTitle: 'New street',
    city: {
      title: "San Francisco",
      country: "USA",
    }
  },
  technologies: [
    {id: 1, name: "HTML"},
    {id: 2, name: "JS"},
    {id: 3, name: "TypeScript"},
    {id: 4, name: "React"},
  ]
}
