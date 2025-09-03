import { PrismaClient } from "@prisma/client/extension";

export const db = new PrismaClient();

// db.snippet.create({
//     data: {
//         title: "New Snippet",
//         code: "console.log('Hello, world!')"
//     }
// })