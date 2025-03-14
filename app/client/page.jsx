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
    <div>
      <div>Eesnimi: {activeClient.eesnimi}</div>
      <div>Perekonnanimi: {activeClient.perenimi}</div>
      <div>Isikukood: {activeClient.isikukood}</div>
      <div>Pilt: {activeClient.pilt}</div>
      <div>ID kaart: {activeClient.id_kaardi_koopia}</div>
    </div>
  )
}
export default ClientPage