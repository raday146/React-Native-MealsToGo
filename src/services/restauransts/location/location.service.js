import camelize from "camelize";

import { locations } from "./location.mock";

export const locationReq = (search) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[search];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const formatResponse = camelize(result);
  const { geometry = {} } = formatResponse.result[0];
  const { lat, lng } = geometry.location;
  return { lat, lng };
};
