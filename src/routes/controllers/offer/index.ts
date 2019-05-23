"use strict"

import express from "express"
import { Offer } from "./../../../models/Offer"
import { Request, Response, NextFunction } from "express"

const router = express.Router()

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id: string = req.params.id
    if (_id) {
      const offer = await Offer.findById({ _id })
      if (offer) {
        console.log("result_get_offer :", offer)
        res.send(offer)
      } else {
        console.log("result_get_offer : none")
        res.sendStatus(404)
      }
    } else {
      res.send({})
    }
  } catch (error) {
    console.log("error_get_offer_find", error)
  }
})

router.post("/", async (req: any, res: Response, next: NextFunction) => {
  try {
    const offer = new Offer({
      date: new Date(),
      drug: req.body.drug,
      expirationDate: req.body.expirationDate,
      price: req.body.price,
      pharmacy: req.body.pharmacy,
      quantity: req.body.quantity, 
    });
    console.log('result_post_offer', offer)
    res.send(offer)

  } catch (error) {
    console.log("error_post_offer")
  }
})

export default router
