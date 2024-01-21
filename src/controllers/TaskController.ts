import { type Request, type Response } from 'express'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export default {
  async create (req: Request, res: Response) {
    try {
      const bodySchema = z.object({
        title: z.string(),
        content: z.string(),
        color: z.string(),
        favorite: z.boolean().optional()
      })
      const { title, content, color, favorite } = bodySchema.parse(req.body)
      const newTask = await prisma.task.create({
        data: {
          content,
          title,
          color,
          favorite
        }
      })
      return res.status(201).json(newTask)
    } catch (error) {
      return res.status(400).json(error)
    }
  }
}
