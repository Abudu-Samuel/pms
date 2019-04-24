import { model, Schema } from "mongoose";
import sublocationModel from "./SubLocationModel";
import schemaObj from "./Schema";

const LocationModel = new Schema({
  ...schemaObj,
  sublocations: [sublocationModel]
});

export default model("Location", LocationModel);
