import mongoose from "mongoose"

export type DrugDocument = mongoose.Document & {
  name: String
}

const drugSchema = new mongoose.Schema({
  name: String
})

export const Drug = mongoose.model<DrugDocument>("Drug", drugSchema);
