import { describe, expect, it, vi } from "vitest";

import request from "supertest";

import { app } from "../index";



//!deep mock with vitest-mock-extended
vi.mock("../db/client")



//!shallow mock
// vi.mock("../db/client", () => {
//   return {
//     prismaClient: {
//       calculate: {
//         create: vi.fn(() => console.log("mocked create.................")),
//       },
//     },
//     default: vi.fn(),
//   };
// });

describe("calculations", () => {
  
  it("should add two numbers", async () => {
    const response = await request(app).post("/add").send({ a: 1, b: 2 });
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(3);
  });

  it("should return the difference of the two numbers", async () => {
    const response = await request(app).post("/subtract").send({ a: 3, b: 2 });
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(1);
  });
  
});


