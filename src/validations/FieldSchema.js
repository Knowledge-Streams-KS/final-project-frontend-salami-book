import * as yup from "yup";

const addFieldSchema = yup.object().shape({
  fieldName: yup.string().required("Field Name is required"),
  fieldRate: yup
    .number("Rate should be in numbers")
    .integer("Rate should be an integer")
    .required("Field Rate is required"),
  fieldLongitude: yup
    .number("Longitude should be a number")
    .required("Field Longitude is required")
    .test(
      "is-valid-longitude",
      "Longitude should be between -180 and 180",
      (value) => value >= -180 && value <= 180,
    ),
  fieldLatitude: yup
    .number("Latitude should be a number")
    .required("Field Latitude is required")
    .test(
      "is-valid-latitude",
      "Latitude should be between -90 and 90",
      (value) => value >= -90 && value <= 90,
    ),
  fieldDescription: yup.string().required("Field Description is required"),
});

export default addFieldSchema;