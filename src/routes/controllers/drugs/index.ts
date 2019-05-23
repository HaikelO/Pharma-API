"use strict"

import express from "express"
import { Drug, DrugDocument } from "./../../../models/Drug"
import { Request, Response, NextFunction } from "express"

const router = express.Router()

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const drugs:Array<DrugDocument> = await Drug.find({})
    console.log("result_get_drugs :", drugs)
    res.send(drugs)
  } catch (error) {
    console.log("Error Get Drugs Find", error)
  }
})

export default router
