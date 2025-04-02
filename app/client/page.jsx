'use client'
import { useAppContext } from "../context/AppContext"
import { useState, useEffect } from "react"

const ClientPage = () => {
  const { app } = useAppContext()
  const [activeClient, setActiveClient] = useState({})

  useEffect(() => {
    setActiveClient(app.clientList.find((client) => client.id === app.activeClient))
  }, [app.activeClient])

  return (
    <div className="client-details">
      {activeClient ? (
        <>
          <div>Eesnimi: {activeClient?.eesnimi}</div>
          <div>Perekonnanimi: {activeClient?.perenimi}</div>
          <div>Isikukood: {activeClient?.isikukood}</div>
          {activeClient.pilt && <img src={activeClient?.pilt} alt="Kliendi pilt" style={{ maxWidth: "200px", borderRadius: "8px", margin: "1rem 0" }} />}
          <div>ID kaart: {activeClient?.id_kaardi_koopia || "Puudub"}</div>
        </>
      ) : (
        <p>Vali klient külgribalt</p>
      )}
    </div>
  );
};
export default ClientPage