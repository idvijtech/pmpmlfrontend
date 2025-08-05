import React from 'react';
import { useTranslation } from 'react-i18next';

const TicketSection = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex justify-center">
      <img 
        src="/ticket.png"
        alt="Ticket Booking"
        className="w-full max-w-2xl h-auto"
      />
    </div>
  );
};

export default TicketSection; 