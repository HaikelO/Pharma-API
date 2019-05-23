"use strict";

import express from "express";
import {Drug, DrugDocument} from "./../../../models/Drug";
import {Request, Response, NextFunction} from "express";

const router = express.Router();

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id: string = req.params.id;
    const drugs: Array<DrugDocument> = await Drug.find({});
    console.log("result_get_drug :", drugs);
    res.send(id);
  } catch (error) {
    console.log("Error Get Drug Find ALL", error);
  }
});

router.post("/", async (req: any, res: Response, next: NextFunction) => {
  try {
    const drug = new Drug({
      name: req.body.name
    });
    const isDrug: Array<DrugDocument> = await Drug.find({name: drug.name});
    if (isDrug.length > 0) {
      console.log("drug_already_exist");
      res.status(200).send({message: "drug_already_exist"});
    } else {
      drug.save((err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send({message: err});
        } else {
          console.log(result);
          res.status(201).send(result);
        }
      });
    }
  } catch (error) {
    console.log("Error Post Drug ", error);
  }

  router.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const _id = req.params.id
      const removeDrug =  await Drug.deleteOne({_id})
      console.log("removeDrug", removeDrug)
    } catch (error) {
      console.log(error)
    }
  })
});

export default router;
