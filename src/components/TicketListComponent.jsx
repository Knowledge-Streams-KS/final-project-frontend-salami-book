import React from "react";

const TicketListComponent = ({ matchTickets, onSelectTicket }) => {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-bold">Select a Ticket</h3>
      <select
        className="w-full rounded-md border border-gray-300 p-2 text-lg text-black"
        onChange={(e) => onSelectTicket(e.target.value)}
      >
        <option value="">Select a ticket</option>
        {matchTickets.map((ticket) => (
          <option key={ticket.id} value={ticket.id}>
            {ticket.Ticket.name} - Price: ${ticket.Ticket.price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TicketListComponent;
