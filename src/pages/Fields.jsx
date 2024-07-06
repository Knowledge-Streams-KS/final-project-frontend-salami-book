import React from "react";
import FieldCards from "../components/FieldCards";

const Fields = () => {
  const fieldData = [
    {
      img: "/images/lords.jpeg",
      name: "LORDS",
      description: "Lords Arena one of the most famous fields in Lahore.",
      fieldLocation: {
        lat: 31.467847233213323,
        lng: 74.36258296823873,
      },
    },
    {
      img: "/images/lords.jpeg",
      name: "LORDS",
      description: "Lords Arena one of the most famous fields in Lahore.",
      fieldLocation: {
        lat: 31.467847233213323,
        lng: 74.36258296823873,
      },
    },
    {
      img: "/images/lords.jpeg",
      name: "LORDS",
      description: "Lords Arena one of the most famous fields in Lahore.",
      fieldLocation: {
        lat: 31.467847233213323,
        lng: 74.36258296823873,
      },
    },
    {
      img: "/images/lords.jpeg",
      name: "LORDS",
      description: "Lords Arena one of the most famous fields in Lahore.",
      fieldLocation: {
        lat: 31.467847233213323,
        lng: 74.36258296823873,
      },
    },
    {
      img: "/images/lords.jpeg",
      name: "LORDS",
      description: "Lords Arena one of the most famous fields in Lahore.",
      fieldLocation: {
        lat: 31.467847233213323,
        lng: 74.36258296823873,
      },
    },
    {
      img: "/images/lords.jpeg",
      name: "LORDS",
      description: "Lords Arena one of the most famous fields in Lahore.",
      fieldLocation: {
        lat: 31.467847233213323,
        lng: 74.36258296823873,
      },
    },
  ];

  return (
    <>
      <div className="space-y-4 px-12 py-6">
        <div className="text-center text-7xl">Feilds</div>
        <div className="grid grid-cols-3 gap-4">
          {fieldData.map((field, index) => {
            return (
              <FieldCards
                key={index}
                name={field.name}
                img={field.img}
                description={field.description}
                location={field.fieldLocation}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Fields;
