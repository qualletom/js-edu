import type {StudentType} from "../02/02.ts";
import {beforeEach} from "vitest";
import {addSkill, checkDoesStudentLiveInCity, makeStudentActive} from "./03.ts";

let student: StudentType;

beforeEach(() => {
  student = {
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
})

test("new tech skill should be added", () => {
  addSkill(student,  "Angular");

  expect(student.technologies.length).toBe(5);
  expect(student.technologies[4].name).toBe('Angular');
  expect(student.technologies[4].id).toBeDefined();
  expect(student.technologies[3].name).toBe('React');
})

test("student should be made active", () => {
  makeStudentActive(student);

  expect(student.isActive).toBe(true);
})

test("does student live in city?", () => {
  const result = checkDoesStudentLiveInCity(student, "Minsk");
  const result2 = checkDoesStudentLiveInCity(student, "San Francisco");

  expect(result).toBe(false);
  expect(result2).toBe(true);
})