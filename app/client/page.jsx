'use client';
import { useState } from 'react';
import { useAppContext } from "../context/AppContext";

const InfoCard = ({ title, onClick }) => (
  <div className="info-card">
    <h4>{title}</h4>
    <button onClick={onClick}>Lisa Info</button>
  </div>
);

const ClientPage = () => {
  const { app } = useAppContext();
  const activeClient = app.clientList.find((client) => client.id === app.activeClient);

  // Kõik olekud
  const [guardianInfo, setGuardianInfo] = useState({
    name: 'Eestkostja nimi',
    phone: '+37212345678',
  });

  const [bankData, setBankData] = useState({
    bankName: 'LHV',
    accountNumber: 'EE123456789012345678',
    cardNumber: '1234 5678 9102 3456',
    limit: '100€',
    limitPeriod: 'Päev',
    password: 'parool123'
  });
  const [showBankInfo, setShowBankInfo] = useState(false);
  const [isEditingBank, setIsEditingBank] = useState(false);

  const [addressInfo, setAddressInfo] = useState({
    address: 'Kogu tänav 1, 50/115 korter'
  });

  const [doctorInfo, setDoctorInfo] = useState({
    name: 'Dr. Kasepuu',
    phone: '+37298765432'
  });

  const [isGuardianModalOpen, setIsGuardianModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isDoctorModalOpen, setIsDoctorModalOpen] = useState(false);
  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const [activities, setActivities] = useState([
    { id: 1, clientId: 1, action: 'Tegevus 1', time: '10:30', info: 'Info 1' },
    { id: 2, clientId: 1, action: 'Tegevus 2', time: '12:00', info: 'Info 2' },
    { id: 3, clientId: 2, action: 'Tegevus 3', time: '14:00', info: 'Info 3' },
    { id: 4, clientId: 3, action: 'Tegevus 4', time: '16:00', info: 'Info 4' },
  ]);

  // Pangaandmete funktsioonid (täpselt nagu soovite)
  const handleShowBankInfo = () => {
    setShowBankInfo(true);
    setIsEditingBank(false);
  };

  const handleEditBank = () => {
    setIsEditingBank(true);
  };

  const handleBankInputChange = (e) => {
    const { name, value } = e.target;
    setBankData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveBankInfo = () => {
    console.log('Salvestatud pangaandmed:', bankData);
    setIsEditingBank(false);
  };

  const handleCancelBankEdit = () => {
    setIsEditingBank(false);
  };

  // Eestkostja funktsioonid
  const handleOpenGuardianModal = () => setIsGuardianModalOpen(true);
  const handleCloseGuardianModal = () => setIsGuardianModalOpen(false);
  const handleGuardianInputChange = (e) => {
    const { name, value } = e.target;
    setGuardianInfo((prev) => ({ ...prev, [name]: value }));
  };
  const handleSaveGuardianInfo = () => {
    console.log('Salvestatud eestkostja info:', guardianInfo);
    handleCloseGuardianModal();
  };

  // Arsti funktsioonid
  const handleOpenDoctorModal = () => setIsDoctorModalOpen(true);
  const handleCloseDoctorModal = () => setIsDoctorModalOpen(false);
  const handleDoctorInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorInfo((prev) => ({ ...prev, [name]: value }));
  };
  const handleSaveDoctorInfo = () => {
    console.log('Salvestatud arsti info:', doctorInfo);
    handleCloseDoctorModal();
  };

  // Aadressi funktsioonid
  const handleOpenAddressModal = () => setIsAddressModalOpen(true);
  const handleCloseAddressModal = () => setIsAddressModalOpen(false);
  const handleAddressInputChange = (e) => {
    setAddressInfo({ address: e.target.value });
  };
  const handleSaveAddressInfo = () => {
    console.log('Salvestatud aadress:', addressInfo);
    handleCloseAddressModal();
  };

  // Tegevuste funktsioonid
  const handleAddActivity = () => {
    setSelectedActivity({ id: null, clientId: activeClient.id, action: '', time: '', info: '' });
    setIsActivityModalOpen(true);
  };
  const handleEditActivity = (activity) => {
    setSelectedActivity(activity);
    setIsActivityModalOpen(true);
  };
  const handleCloseActivityModal = () => {
    setIsActivityModalOpen(false);
    setSelectedActivity(null);
  };
  const handleSaveActivity = () => {
    if (selectedActivity.id) {
      setActivities((prev) =>
        prev.map((a) => (a.id === selectedActivity.id ? selectedActivity : a))
      );
    } else {
      setActivities((prev) => [...prev, { ...selectedActivity, id: Date.now() }]);
    }
    handleCloseActivityModal();
  };
  const handleActivityInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedActivity((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="client-wrapper">
      {activeClient ? (
        <>
          <div className="left-column">
            <div className="client-card">
              <div className="client-photo">
                {activeClient.pilt ? (
                  <img src={activeClient.pilt} alt="Kliendi pilt" />
                ) : (
                  <div className="placeholder-photo">Foto puudub</div>
                )}
              </div>
              <h2>{activeClient.eesnimi} {activeClient.perenimi}</h2>
              <p>ID: {activeClient.isikukood}</p>
              <p>Telefon: {activeClient.telefon || "Puudub"}</p>
              <p>Email: {activeClient.email || "Puudub"}</p>
            </div>
          </div>

          <div className="right-column">
            <div className="info-box">
              <h4>Eestkostja</h4>
              <p>Nimi: {guardianInfo.name}</p>
              <p>Telefon: {guardianInfo.phone}</p>
              <button onClick={handleOpenGuardianModal}>Muuda</button>
            </div>

            <div className="info-box">
              <h4>Arst</h4>
              <p>Nimi: {doctorInfo.name}</p>
              <p>Telefon: {doctorInfo.phone}</p>
              <button onClick={handleOpenDoctorModal}>Muuda</button>
            </div>

            {/* Pangaandmete sektsioon - täpselt nagu soovite */}
            <div className="info-box">
              <h4>Pangaandmed</h4>
              {!showBankInfo ? (
                <button onClick={handleShowBankInfo}>Lisa info</button>
              ) : isEditingBank ? (
                <div className="bank-edit-form">
                  <label>Pangalinimi:
                    <input type="text" name="bankName" value={bankData.bankName} onChange={handleBankInputChange} />
                  </label>
                  <label>Konto nr:
                    <input type="text" name="accountNumber" value={bankData.accountNumber} onChange={handleBankInputChange} />
                  </label>
                  <label>Kaardi nr:
                    <input type="text" name="cardNumber" value={bankData.cardNumber} onChange={handleBankInputChange} />
                  </label>
                  <label>Limit:
                    <input type="text" name="limit" value={bankData.limit} onChange={handleBankInputChange} />
                  </label>
                  <label>Limidi periood:
                    <input type="text" name="limitPeriod" value={bankData.limitPeriod} onChange={handleBankInputChange} />
                  </label>
                  <label>Parool:
                    <input type="password" name="password" value={bankData.password} onChange={handleBankInputChange} />
                  </label>
                  <div className="button-group">
                    <button className="save-btn" onClick={handleSaveBankInfo}>Salvesta</button>
                    <button className="cancel-btn" onClick={handleCancelBankEdit}>Katkesta</button>
                  </div>
                </div>
              ) : (
                <div className="bank-info-display">
                  <table className="bank-info-table">
                    <tbody>
                      <tr>
                        <td><strong>Pangalinimi:</strong></td>
                        <td>{bankData.bankName}</td>
                      </tr>
                      <tr>
                        <td><strong>Konto nr:</strong></td>
                        <td>{bankData.accountNumber}</td>
                      </tr>
                      <tr>
                        <td><strong>Kaardi nr:</strong></td>
                        <td>{bankData.cardNumber}</td>
                      </tr>
                      <tr>
                        <td><strong>Limit:</strong></td>
                        <td>{bankData.limit}</td>
                      </tr>
                      <tr>
                        <td><strong>Limidi periood:</strong></td>
                        <td>{bankData.limitPeriod}</td>
                      </tr>
                    </tbody>
                  </table>
                  <button onClick={handleEditBank}>Muuda</button>
                </div>
              )}
            </div>

            <div className="info-box">
              <h4>Elukoht</h4>
              <p>Aadress: {addressInfo.address}</p>
              <button onClick={handleOpenAddressModal}>Muuda</button>
            </div>

            <div className="grid-boxes">
              {[
                { title: 'Raviskeem', onClick: () => alert('Raviskeem modal') },
                { title: 'Dokumendid', onClick: () => alert('Dokumendid modal') },
                { title: 'Internetikontod ja teenused', onClick: () => alert('Internetikontod modal') },
                { title: 'Sündmused', onClick: handleAddActivity },
                { title: 'Lähedased', onClick: () => alert('Lähedased modal') },
                { title: 'Tegevusplaanid', onClick: () => alert('Tegevusplaanid modal') },
              ].map((item, index) => (
                <InfoCard key={index} title={item.title} onClick={item.onClick} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>Vali klient külgribalt</p>
      )}

      {/* Kõik modaalid */}
      {isGuardianModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Muuda eestkostja infot</h3>
            <form>
              <label>Nimi:
                <input type="text" name="name" value={guardianInfo.name} onChange={handleGuardianInputChange} />
              </label>
              <label>Telefon:
                <input type="text" name="phone" value={guardianInfo.phone} onChange={handleGuardianInputChange} />
              </label>
            </form>
            <button onClick={handleSaveGuardianInfo}>Salvesta</button>
            <button onClick={handleCloseGuardianModal}>Sulge</button>
          </div>
        </div>
      )}

      {isDoctorModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Muuda arsti infot</h3>
            <form>
              <label>Nimi:
                <input type="text" name="name" value={doctorInfo.name} onChange={handleDoctorInputChange} />
              </label>
              <label>Telefon:
                <input type="text" name="phone" value={doctorInfo.phone} onChange={handleDoctorInputChange} />
              </label>
            </form>
            <button onClick={handleSaveDoctorInfo}>Salvesta</button>
            <button onClick={handleCloseDoctorModal}>Sulge</button>
          </div>
        </div>
      )}

      {isAddressModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Muuda elukohta</h3>
            <form>
              <label>Aadress:
                <input type="text" value={addressInfo.address} onChange={handleAddressInputChange} />
              </label>
            </form>
            <button onClick={handleSaveAddressInfo}>Salvesta</button>
            <button onClick={handleCloseAddressModal}>Sulge</button>
          </div>
        </div>
      )}

      {isActivityModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>{selectedActivity?.id ? 'Muuda tegevust' : 'Lisa tegevus'}</h3>
            <form>
              <label>Tegevus:
                <input type="text" name="action" value={selectedActivity?.action || ''} onChange={handleActivityInputChange} />
              </label>
              <label>Aeg:
                <input type="text" name="time" value={selectedActivity?.time || ''} onChange={handleActivityInputChange} />
              </label>
              <label>Info:
                <input type="text" name="info" value={selectedActivity?.info || ''} onChange={handleActivityInputChange} />
              </label>
            </form>
            <button onClick={handleSaveActivity}>Salvesta</button>
            <button onClick={handleCloseActivityModal}>Sulge</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientPage;