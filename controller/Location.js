import Location from "../models/LocationModel";
import { calTotalPopulation, formatData } from "../helpers/dataFormatter";
import dataresponse from "../helpers/responseInfo";

class LocationController {
  static async createLocation({ body }, res) {
    try {
      const formattedData = formatData(body);
      const newLocation = await Location.create(formattedData);
      return dataresponse.success(
        res,
        201,
        "Location created successfully",
        newLocation
      );
    } catch {
      return dataresponse.error(res, 500, "Some error occured");
    }
  }

  static async fetchAllLocations(req, res) {
    try {
      const allLocations = await Location.find();
      if (allLocations.length === 0) {
        return dataresponse.error(
          res,
          404,
          "Sorry, there are no locations available"
        );
      }
      const maleTotal = calTotalPopulation(allLocations, "malePopulation");
      const femaleTotal = calTotalPopulation(allLocations, "femalePopulation");
      const totalPopulation = maleTotal + femaleTotal;
      return dataresponse.success(
        res,
        200,
        "All locations fetched successfully",
        { maleTotal, femaleTotal, totalPopulation, allLocations }
      );
    } catch {
      return dataresponse.error(res, 500, "Some error occured");
    }
  }

  static async fetchSingleLocation(
    {
      params: { id }
    },
    res
  ) {
    try {
      const singleLocation = await Location.findById(id);
      if (!singleLocation) {
        return dataresponse.error(res, 404, "Location with id not found");
      }
      return dataresponse.success(
        res,
        200,
        "Single location fetched successfully",
        singleLocation
      );
    } catch {
      return dataresponse.error(res, 500, "Some error occured");
    }
  }

  static async updateLocation(
    {
      params: { id },
      body
    },
    res
  ) {
    try {
      const updatedLocation = await Location.findByIdAndUpdate(
        id,
        { ...body },
        { new: true }
      );
      if (!updatedLocation) {
        return dataresponse.error(res, 404, "Location with id not found");
      }
      return dataresponse.success(
        res,
        200,
        "Location has been updated",
        updatedLocation
      );
    } catch {
      return dataresponse.error(res, 500, "Some error occured");
    }
  }

  static async removeLocation(
    {
      params: { id }
    },
    res
  ) {
    try {
      const deletedLocation = await Location.findByIdAndDelete(id);
      if (!deletedLocation) {
        return dataresponse.error(res, 404, "Location with id not found");
      }
      return dataresponse.success(
        res,
        200,
        "Location deleted successfully",
        []
      );
    } catch {
      return dataresponse.error(res, 500, "Some error occured");
    }
  }
}

export default LocationController;
