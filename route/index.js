import express from "express";
import locationController from "../controller/Location";

const router = express.Router();

router.post("/create", locationController.createLocation);
router.get("/locations", locationController.fetchAllLocations);
router.get("/location/:id", locationController.fetchSingleLocation);
router.put("/location/:id", locationController.updateLocation);
router.delete("/location/:id", locationController.removeLocation);

export default router;
