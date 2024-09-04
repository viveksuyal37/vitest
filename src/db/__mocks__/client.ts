import { PrismaClient } from "@prisma/client";
import { mockDeep } from "vitest-mock-extended";

export const prismaClient = mockDeep<PrismaClient>();

// //! Mocking a return value for a specific function
// prismaClient.calculate.findUnique.mockReturnValue();
