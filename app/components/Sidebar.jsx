'use client'
import { useAppContext } from "../context/AppContext"
import ClientButton from "./ClientButton"

const Sidebar = () => {
  const { app } = useAppContext()
  const clientList = [
    { id: 0, name: "Client 0" },
    { id: 1, name: "Client 1" },
    { id: 2, name: "Client 2" },
    { id: 3, name: "Client 3" },
  ]

  return (
    <side>
      {clientList.map((client) => (
        <ClientButton key={client.id} clientName={client.name} clientId={client.id} />
      ))}
    </side>
  )
}
export default Sidebar