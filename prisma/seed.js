import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function seed() {
    await prisma.meme.deleteMany()

    await prisma.meme.create({
        data: {
            id: "7cf10731-b6bd-43d1-a2e4-98933c64d2ad",
            meme_image: "https://i.imgur.com/5F8RnA7.png"
        }
    })
}

seed()