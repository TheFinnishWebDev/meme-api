import express from "express"
const router = express.Router()

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

router.get("/", async (req, res) => {
    const memes = await prisma.meme.findMany()
    res.json({ memes })
})

router.get("/:id", async (req, res) => {
    const id: string = req.params.id

    const meme = await prisma.meme.findFirst({
        where: {
            id
        },
        select: {
            meme_image: true
        }
    })

    res.json({ meme })
})

router.post("/", async (req, res) => {
    const {
        meme_image
    }: MemeBody = req.body

    try {
        await prisma.meme.create({
            data: {
                meme_image
            }
        })

        res.json({
            status: {
                code: res.statusCode,
                message: "Onnistui.",
                success: true
            }
        })
    } catch (e) {
        console.log(e.message)

        res.status(500).json({
            status: {
                code: res.statusCode,
                message: "Epäonnistui.",
                success: false
            }
        })
    }
})

router.put("/:id", async (req, res) => {
    const id: string = req.params.id
    const {
        meme_image
    }: MemeBody = req.body

    try {
        await prisma.meme.update({
            where: {
                id
            },
            data: {
                meme_image
            }
        })

        res.json({
            status: {
                code: res.statusCode,
                message: "Onnistui.",
                success: true
            }
        })
    } catch (e) {
        console.log(e.message)

        res.status(500).json({
            status: {
                code: res.statusCode,
                message: "Epäonnistui.",
                success: false
            }
        })
    }
})

router.delete("/:id", async (req, res) => {
    const id: string = req.params.id

    try {
        await prisma.meme.delete({
            where: {
                id
            }
        })

        res.json({
            status: {
                code: res.statusCode,
                message: "Onnistui.",
                success: true
            }
        })
    } catch (e) {
        console.log(e.message)

        res.status(500).json({
            status: {
                code: res.statusCode,
                message: "Epäonnistui.",
                success: false
            }
        })
    }
})

export default router