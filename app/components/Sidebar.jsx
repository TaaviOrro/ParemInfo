'use client'
import { useAppContext } from "../context/AppContext"
import ClientButton from "./ClientButton"

const Sidebar = () => {
  const { app } = useAppContext()

  return (
    <side>
      {app.clientList.map((client) => (
        <ClientButton key={client.id} clientName={client.eesnimi + " " + client.perenimi} clientId={client.id} />
      ))}
    </side>
  )
}
export default Sidebar