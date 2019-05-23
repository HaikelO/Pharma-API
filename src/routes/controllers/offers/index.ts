"use strict"

import express from "express"
import { Offer, OfferDocument } from "./../../../models/Offer"
import { Request, Response, NextFunction } from "express"

const router = express.Router()

router.get("/all", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const offers:Array<OfferDocument> = await Offer.find({})
    console.log("result_get_offers :", offers)
    res.send(offers)
  } catch (error) {
    console.log("Error Get Offers Find", error)
  }
})

export default router
