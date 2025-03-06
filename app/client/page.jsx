'use client'
import { useAppContext } from "../context/AppContext"

const ClientPage = () => {
  const { activeClient } = useAppContext()

  return (
    <div>ClientPage: { activeClient }</div>
  )
}
export default ClientPage