"use strict"
import { Router } from "express"

import drugController from "./controllers/drug"
import drugsController from "./controllers/drugs"
import offerController from "./controllers/offer"
import offersController from "./controllers/offers"

const router = Router()


router.use("/api/drug", drugController)
router.use("/api/drugs", drugsController)
router.use("/api/offer", offerController)
router.use("/api/offers", offersController)

export default router
