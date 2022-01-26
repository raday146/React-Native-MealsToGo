import { mocks, mockImages } from "./mock";
import camelize from "camelize";
export const restaurantReq = (loc) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[loc];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restTransform = ({ results = [] }) => {
  const mappedData = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isOpen: restaurant.opening_hours && restaurant.opening_hours.open_now,
      address: restaurant.vicinity,
      isClosedTemporarily:
        restaurant.permanently_closed ||
        restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  const newRes = camelize(mappedData);
  return newRes;
};
