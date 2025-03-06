'use client'
import { useAppContext } from "../context/AppContext"

const ClientPage = () => {
  const { app } = useAppContext()

  return (
    <div>ClientPage: { app.activeClient }</div>
  )
}
export default ClientPage