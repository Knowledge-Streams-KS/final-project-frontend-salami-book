import React, { useEffect, useState } from "react";
import FieldCards from "../components/FieldCards";
import axiosInstance from "../axios/axios";
import { useNavigate } from "react-router";

const Fields = () => {
  const [fields, setFeilds] = useState([]);
  const navigate = useNavigate();

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

  const admin = true;

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
        {admin && (
          <div>
            <button
              onClick={() => navigate("/addfield")}
              className="rounded-md bg-[#ecd706] px-4 py-2 text-black"
            >
              Add Field
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Fields;
