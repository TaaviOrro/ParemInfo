'use client';

import React, { useState, useEffect } from "react";

const ClientPage = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch('../data/client.json') 
      .then(response => response.json())
      .then(data => setClients(data))
      .catch(error => console.error("Error loading client data:", error));
  }, []);

  return (
    <div>
      <h1>Client Page</h1>
      <ul>
        {clients.map(client => (
          <li key={client.id}>
            {client.eesnimi} {client.perenimi} - Isikukood: {client.isikukood}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
