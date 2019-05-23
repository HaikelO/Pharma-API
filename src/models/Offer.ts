import {Document, Schema, Model, model}  from "mongoose"

export type OfferDocument = Document & {
  date: Date
  drug: String
  expirationDate: Date
  price: Number
  pharmacy: String
  quantity: Number  
}

const offerSchema = new Schema({
  date: Date,
  drug: Schema.Types.ObjectId,
  expirationDate: Date,
  price: Number,
  pharmacy: Schema.Types.ObjectId,
  quantity: Number
})

export const Offer:Model<OfferDocument> = model<OfferDocument>("Offer", offerSchema)
