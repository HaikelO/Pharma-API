import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import indexRoute from "./routes/index"

class Api {
  public api: express.Application

  constructor() {
    //create expressjs application
    this.api = express()

    //configure application
    this.config()
  }
  private config() {
    const mongoUrl = "mongodb://localhost/pharma"
    mongoose
      .connect(mongoUrl)
      .then(() => {})
      .catch(err => {
        console.log(
          "MongoDB connection error. Please make sure MongoDB is running. " +
            err
        )
        process.exit()
      })
    this.api.use(bodyParser.urlencoded())
    this.api.use(bodyParser.json())
    this.api.use("/", indexRoute)
  }
}

export default new Api().api
