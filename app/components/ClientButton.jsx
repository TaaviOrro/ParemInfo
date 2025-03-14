"use client";
import { useAppContext } from "../context/AppContext";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ClientButton = ({ clientName, clientId }) => {
  const { dispatch } = useAppContext();
  const pathname = usePathname();

  const handleClick = () => {
    dispatch({ type: "switchClient", payload: clientId });
  };

  if (pathname !== "/client") {
    return (
      <Link href="/client" onClick={handleClick}>
        <button>{clientName}</button>
      </Link>
    );
  } else {
    return <button onClick={handleClick}>{clientName}</button>;
  }
};
export default ClientButton;
