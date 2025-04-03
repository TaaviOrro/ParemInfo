'use client';
import { useAppContext } from "../context/AppContext";

const ClientPage = () => {
  const { app } = useAppContext();
  const activeClient = app.clientList.find((client) => client.id === app.activeClient);

  return (
    <div className="client-page">
      {activeClient ? (
        <>
          <div className="client-info">
            <div className="client-photo">
              {activeClient?.pilt ? (
                <img src={activeClient.pilt} alt="Kliendi pilt" />
              ) : (
                <div className="placeholder-photo">Foto puudub</div>
              )}
            </div>
            <div className="client-details">
              <h2>{activeClient?.eesnimi} {activeClient?.perenimi}</h2>
              <p>ID: {activeClient?.isikukood}</p>
              <p>Kontaktinfo:</p>
              <p>Telefon: {activeClient?.telefon || "Puudub"}</p>
              <p>Email: {activeClient?.email || "Puudub"}</p>
            </div>
          </div>
          <div className="guardian-info">
            <h3>Eestkostja</h3>
            <p>Eestkostja nimi</p>
            <p>Telefon: +37212345678</p>
            <button className="info-button">Lisa Info</button>
          </div>
          <div className="client-actions">
            <table>
              <thead>
                <tr>
                  <th>Tegevus</th>
                  <th>Aeg</th>
                  <th>Info</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tegevus 1</td>
                  <td>10:30</td>
                  <td>Info</td>
                </tr>
                <tr>
                  <td>Tegevus 2</td>
                  <td>12:00</td>
                  <td>Info</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p>Vali klient külgribalt</p>
      )}
    </div>
  );
};

export default ClientPage;