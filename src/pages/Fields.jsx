import React, { useEffect, useState } from "react";
import FieldCards from "../components/FieldCards";
import axiosInstance from "../axios/axios";

const Fields = () => {
  const [fields, setFeilds] = useState([]);

  const getFields = async () => {
    try {
      const data = await axiosInstance.get("/fields");
      setFeilds(data.data.fields);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFields();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center space-y-10 px-12 py-20">
        <div className="text-center text-7xl">Fields</div>
        <div className="grid grid-cols-3 gap-10">
          {fields.map((field) => {
            return (
              <FieldCards
                key={field.id}
                name={field.name}
                img={field.img}
                description={field.description}
                location={{ lat: field.latitude, lng: field.longitude }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Fields;
