import React, { useEffect, useState } from "react";
import axiosInstance from "../axios/axios";

const TicketsTable = () => {
  const [tickets, setTickets] = useState([]);

  const getTickets = async () => {
    try {
      const response = await axiosInstance.get("/tickets");
      console.log(response.data.data);
      setTickets(response.data.data);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };


  useEffect(() => {
    getTickets();
  }, []);
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 p-10">
      {tickets.map((ticket) => (
        <div key={ticket.id} className="w-80 rounded-md bg-[#232727] p-4">
          <h1 className="pb-4 text-4xl text-[#08723e]"> {ticket.name}</h1>
          <p className="text-xl text-white">Price: {ticket.price}</p>
          {ticket.stock > 0 && (
            <span className="mt-6 inline-block rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white">
              Available
            </span>
          )}{" "}
        </div>
      ))}
    </div>
  );
};

export default TicketsTable;
