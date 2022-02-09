import React, { useState } from "react";
import KindergartenFormValidator from "../08CommonComponents/KindergartenFormValidator";

export default function KindergartenInfoForm({
  kindergartenData,
  setKindergartenData,
  kindergartenValid,
  setKindergartenValid,
}) {
  const handleOnChange = (e) => {
    setKindergartenData({
      ...kindergartenData,
      [e.target.name]: e.target.value,
    });

    KindergartenFormValidator(
      e,
      setKindergartenWarning,
      kindergartenWarning,
      setKindergartenValid,
      kindergartenValid
    );
  };

  const [kindergartenWarning, setKindergartenWarning] = useState({
    name: "",
    code: "",
    address: "",
    phone: "",
    email: "",
    bankName: "",
    accountNumber: "",
    bankCode: "",
  });

  return (
    <div className="container">
      <div className="form">
        <div className="pb-1">
          <h6 className="formHeader">Darželio duomenys</h6>
        </div>

        <div className="form-group mt-2">
          <label htmlFor="txtKindergartenName">
            Ugdymo įstaigos pavadinimas <span className="fieldRequired">*</span>
          </label>
          <input
            type="text"
            id="txtKindergartenName"
            name="name"
            placeholder="Pavadinimas"
            className="form-control"
            onChange={(e) => handleOnChange(e)}
            pattern="^[A-ZĄ-Ž]{1}[\S\s]{1,64}$"
 
            style={
              kindergartenValid.name
                ? { border: "1px solid lightgray" }
                : { border: "2px solid red" }
            }
 
            maxLength={64}
            required
          />
          <span className="warningmsg">{kindergartenWarning.name}</span>
        </div>

        <div className="form-group mt-2">
          <label htmlFor="txtKindergartenCode">
            Ugdymo įstaigos kodas <span className="fieldRequired">*</span>
          </label>
          <input
            type="text"
            id="txtKindergartenCode"
            name="code"
            placeholder="123456789"
            className="form-control"
            onChange={(e) => handleOnChange(e)}
 
            pattern="[\d]{9}|[\d]{7}"
 
            style={
              kindergartenValid.code
                ? { border: "1px solid lightgray" }
                : { border: "2px solid red" }
            }
 
            maxLength={9}
            required
          />
          <span className="warningmsg">{kindergartenWarning.code}</span>
        </div>

        <div className="form-group mt-2">
          <label htmlFor="txtKindergartenAddress">
            Ugdymo įstaigos adresas <span className="fieldRequired">*</span>
          </label>
          <input
            type="text"
            id="txtKindergartenAddress"
            name="address"
            placeholder="Adresas"
            className="form-control"
            onChange={(e) => handleOnChange(e)}
 
            pattern="^[A-ZĄ-Ž]{1}[\S\s]{1,64}$"
 
            style={
              kindergartenValid.address
                ? { border: "1px solid lightgray" }
                : { border: "2px solid red" }
            }
 
            maxLength={64}
            required
          />
          <span className="warningmsg">{kindergartenWarning.address}</span>
        </div>

        <div className="form-group mt-2">
          <label htmlFor="txtKindergartenPhone">
            Kontaktinis telefono numeris{" "}
            <span className="fieldRequired">*</span>
          </label>
          <input
            type="text"
            id="txtKindergartenPhone"
            name="phone"
            placeholder="+370xxxxxxxx | 852xxxxxx"
            className="form-control"
            onChange={(e) => handleOnChange(e)}
 
            pattern="[+]{1}[0-9]{11}|[852]{3}[0-9]{6}"
 
            style={
              kindergartenValid.phone
                ? { border: "1px solid lightgray" }
                : { border: "2px solid red" }
            }
 
            maxLength={12}
            required
          />
          <span className="warningmsg">{kindergartenWarning.phone}</span>
        </div>

        <div className="form-group mt-2">
          <label htmlFor="txtKindergartenEmail">
            El. paštas <span className="fieldRequired">*</span>
          </label>
          <input
            type="text"
            id="txtKindergartenEmail"
            name="email"
            placeholder="example@mail.com"
            className="form-control"
            onChange={(e) => handleOnChange(e)}
 
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,4}"
 
            style={
              kindergartenValid.email
                ? { border: "1px solid lightgray" }
                : { border: "2px solid red" }
            }
 
            maxLength={64}
            required
          />
          <span className="warningmsg">{kindergartenWarning.email}</span>
        </div>

        <div className="form-group mt-2">
          <label htmlFor="txtKindergartenBankName">
            Banko pavadinimas <span className="fieldRequired">*</span>
          </label>
          <input
            type="text"
            id="txtKindergartenBankName"
            name="bankName"
            placeholder="Pavadinimas"
            className="form-control"
            onChange={(e) => handleOnChange(e)}
 
            pattern="^[A-Z]+[a-zA-Z\s]*$"
 
            style={
              kindergartenValid.bankName
                ? { border: "1px solid lightgray" }
                : { border: "2px solid red" }
            }
 
            maxLength={32}
            required
          />
          <span className="warningmsg">{kindergartenWarning.bankName}</span>
        </div>

        <div className="form-group mt-2">
          <label htmlFor="txtKindergartenAccountNumber">
            Sąskaitos numeris <span className="fieldRequired">*</span>
          </label>
          <input
            type="text"
            id="txtKindergartenAccountNumber"
            name="accountNumber"
            placeholder="LTXXXXXXXXXXXXXXXXXX"
            className="form-control"
            onChange={(e) => handleOnChange(e)}
 
            pattern="^[A-Z]{2}[A-Z0-9]{14,32}$"
            maxLength={34}
 
            style={
              kindergartenValid.accountNumber
                ? { border: "1px solid lightgray" }
                : { border: "2px solid red" }
            }
            maxLength={13}
 
            required
          />
          <span className="warningmsg">
            {kindergartenWarning.accountNumber}
          </span>
        </div>

        <div className="form-group mt-2">
          <label htmlFor="txtKindergartenBankCode">
            Banko kodas <span className="fieldRequired">*</span>
          </label>
          <input
            type="text"
            id="txtKindergartenBankCode"
            name="bankCode"
            placeholder="12345"
            className="form-control"
            onChange={(e) => handleOnChange(e)}
            style={
              kindergartenValid.bankCode
                ? { border: "1px solid lightgray" }
                : { border: "2px solid red" }
            }
            maxLength={5}
            required
          />
 
          <span className="warningmsg">{kindergartenWarning.bankCode}</span>
 
        </div>
      </div>
    </div>
  );
}
