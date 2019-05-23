"use strict"

import express from "express"
import { Drug, DrugDocument } from "./../../../models/Drug"
import { Request, Response, NextFunction } from "express"

const router = express.Router()

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id: string = req.params.id
    const drugs: Array<DrugDocument> = await Drug.find({})
    console.log("result_get_drug :", drugs)
    res.send(id)
  } catch (error) {
    console.log("Error Get Drug Find ALL", error)
  }
})

export default router
