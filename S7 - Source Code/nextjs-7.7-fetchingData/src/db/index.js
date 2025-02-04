const {PrismaClient} = require('@prisma/client');

export const db = new PrismaClient();