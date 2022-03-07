import React, { Component } from "react";
import "../../App.css";
import http from "../10Services/httpService";
import apiEndpoint from "../10Services/endpoint";
import inputValidator from "../08CommonComponents/InputValidator";
import swal from "sweetalert";
import DownloaderContainer from "./DownloaderContainer";
import ForgetMe from "./ForgetMe";

export default class UpdateProfileFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "",
      name: "",
      surname: "",
      personalCode: "",
      address: "",
      city: "",
      phone: "",
      email: "",
      passwordUpdate: false,
      oldPassword: "",
      newPassword: "",
      newPasswordRepeat: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdatePasswordButton =
      this.handleUpdatePasswordButton.bind(this);
    this.handleUpdatePasswordSubmit =
      this.handleUpdatePasswordSubmit.bind(this);
  }
  componentDidMount() {
    http
      .get(`${apiEndpoint}/api/users/user`)
      .then((response) => {
        if (response.data.role === "USER") {
          this.setState({
            role: response.data.role,
            name: response.data.name,
            surname: response.data.surname,
            personalCode: response.data.personalCode,
            address: response.data.address.split(",")[0],
            city: response.data.address.split(",")[1],
            phone: response.data.phone,
            email: response.data.email,
            username: response.data.username,
          });
        } else {
          this.setState({
            role: response.data.role,
            name: response.data.name,
            surname: response.data.surname,
            personalCode: response.data.personalCode,
            address: response.data.address,
            phone: response.data.phone,
            email: response.data.email,
            username: response.data.username,
          });
        }
      })
      .catch((error) => {
        //console.log(error);
        swal({
          text: "Įvyko klaida perduodant duomenis iš serverio.",
          button: "Gerai",
        });
      });
  }

  /** Update user info form */
  drawUpdateForm(role) {
    /** Admin & Manager form */
    if (role !== "USER") {
      return (
        <div>
          <div className="form-group">
            <label htmlFor="txtName">
              Vardas <span className="fieldRequired">*</span>
            </label>
            <input
              type="text"
              id="txtName"
              name="name"
              placeholder="Vardas"
              className="form-control mt-2"
              value={this.state.name}
              onChange={this.handleChange}
              onInvalid={(e) => inputValidator(e)}
              required
              pattern="[A-zÀ-ž]{2,32}"
              maxLength={32}
            />
          </div>
          <div className="form-group">
            <label htmlFor="txtSurname" className="marginTopSide">
              Pavardė <span className="fieldRequired">*</span>
            </label>
            <input
              type="text"
              id="txtSurname"
              name="surname"
              placeholder="Pavardė"
              className="form-control mt-2"
              value={this.state.surname}
              onChange={this.handleChange}
              onInvalid={(e) => inputValidator(e)}
              required
              maxLength={32}
              pattern="[A-zÀ-ž]{2,32}"
            />
          </div>
          <div className="form-group">
            <label htmlFor="txtEmail" className="marginTopSide">
              El. paštas <span className="fieldRequired">*</span>
            </label>
            <input
              type="text"
              id="txtEmail"
              name="email"
              placeholder="El. paštas"
              className="form-control mt-2"
              value={this.state.email}
              onChange={this.handleChange}
              onInvalid={(e) => inputValidator(e)}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
              maxLength={128}
            />
          </div>
        </div>
      );
    } else {
      /** User form */
      return (
        <div>
          <div className="form-group">
            <label htmlFor="txtName">
              Vardas <span className="fieldRequired">*</span>
            </label>
            <input
              type="text"
              id="txtName"
              name="name"
              placeholder="Vardas"
              className="form-control mt-2"
              value={this.state.name}
              onChange={this.handleChange}
              onInvalid={(e) => inputValidator(e)}
              required
              maxLength={32}
              pattern="[A-zÀ-ž]{2,32}"
            />
          </div>
          <div className="form-group">
            <label htmlFor="txtSurname" className="marginTopSide">
              Pavardė <span className="fieldRequired">*</span>
            </label>
            <input
              type="text"
              id="txtSurname"
              name="surname"
              placeholder="Pavardė"
              className="form-control mt-2"
              value={this.state.surname}
              onChange={this.handleChange}
              onInvalid={(e) => inputValidator(e)}
              required
              maxLength={32}
              pattern="[A-zÀ-ž]{2,32}"
            />
          </div>
          <div className="form-group">
            <label htmlFor="txtPersonalCode" className="marginTopSide">
              Asmens kodas <span className="fieldRequired">*</span>
            </label>
            <input
              type="text"
              id="txtPersonalCode"
              name="personalCode"
              placeholder="Asmens kodas"
              className="form-control mt-2"
              value={this.state.personalCode}
              onChange={this.handleChange}
              onInvalid={(e) => inputValidator(e)}
              required
              maxLength={11}
              pattern="[0-9]{11}"
            />
          </div>
          <div className="form-group">
            <label htmlFor="txtTelNo" className="marginTopSide">
              Telefonas <span className="fieldRequired">*</span>
            </label>
            <div className="input-group">
              <input
                type="tel"
                className="form-control mt-2"
                id="txtTelNo"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                onInvalid={(e) => inputValidator(e)}
                placeholder="+37012345678"
                required
                maxLength={12}
                pattern="[+]{1}[0-9]{4,19}"
              ></input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="txtEmail" className="marginTopSide">
              El. paštas <span className="fieldRequired">*</span>
            </label>
            <input
              type="text"
              id="txtEmail"
              name="email"
              placeholder="El. paštas"
              className="form-control mt-2"
              value={this.state.email}
              onChange={this.handleChange}
              onInvalid={(e) => inputValidator(e)}
              required
              maxLength={64}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
            />
          </div>
          <div className="row">
            <div className="form-group col-8">
              <label htmlFor="txtAddress" className="marginTopSide">
                Adresas <span className="fieldRequired">*</span>
              </label>
              <input
                type="text"
                className="form-control mt-2"
                id="txtAddress"
                name="address"
                placeholder="Adresas"
                value={this.state.address}
                onChange={this.handleChange}
                onInvalid={(e) => inputValidator(e)}
                maxLength={128}
                pattern="^(?! )[A-zÀ-ž0-9-.,\s]+$"
                required
              />
            </div>

            <div className="form-group col-4">
              <label htmlFor="txtCity" className="marginTopSide">
                Miestas <span className="fieldRequired">*</span>
              </label>
              <input
                type="text"
                className="form-control mt-2"
                id="txtCity"
                name="city"
                placeholder="Miestas"
                onChange={this.handleChange}
                value={this.state.city}
                onInvalid={(e) => inputValidator(e)}
                pattern="^(?! )[A-zÀ-ž\s]+$"
                required
              />
            </div>
          </div>
        </div>
      );
    }
  }

  /** Change handler */

  handleChange(e) {
    inputValidator(e);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  /** Submit handler */

  handleSubmit(e) {
    e.preventDefault();
    http
      .put(`${apiEndpoint}/api/users/update`, {
        address: this.state.address + "," + this.state.city,
        email: this.state.email,
        name: this.state.name,
        password: this.state.password,
        personalCode: this.state.personalCode,
        phone: this.state.phone,
        role: this.state.role,
        surname: this.state.surname,
        username: this.state.username,
      })
      .then((response) => {
        swal({
          text: "Naudotojo duomenys buvo sėkmingai atnaujinti",
          button: "Gerai",
        });
      })
      .catch((error) => {
        swal({
          text: error.response.data,
          button: "Gerai",
        });
      });
  }

  /**Update password form */

  drawUpdatePasswordForm() {
    if (this.state.passwordUpdate) {
      return (
        <div className="form">
          <form onSubmit={this.handleUpdatePasswordSubmit}>
            <div className="form-group">
              <label htmlFor="txtOldPassword">
                Senas slaptažodis <span className="fieldRequired">*</span>
              </label>
              <input
                type="password"
                id="txtOldPassword"
                name="oldPassword"
                className="form-control mt-2"
                value={this.state.oldPassword}
                onChange={this.handleChange}
                onInvalid={(e) => inputValidator(e)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="txtNewPassword">
                Įveskite naują slaptažodį{" "}
                <span className="fieldRequired">*</span>
              </label>
            </div>
            <div className="form-group mt-3">
              <input
                type="password"
                id="txtNewPassword"
                name="newPassword"
                className="form-control mt-2"
                value={this.state.newPassword}
                onChange={this.handleChange}
                onInvalid={(e) => inputValidator(e)}
                required
                pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="txtRepeatNewPassword">
                Pakartokite naują slaptažodį{" "}
                <span className="fieldRequired">*</span>
              </label>
              <input
                type="password"
                id="txtNewPasswordRepeat"
                name="newPasswordRepeat"
                className="form-control mt-2"
                value={this.state.newPasswordRepeat}
                onChange={this.handleChange}
                onInvalid={(e) => inputValidator(e)}
                required
                pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
              />
              <p className="text-primary">
                Dėmesio! Slaptažodis turi būti ne mažiau 8 simbolių ilgio,
                turėti bent vieną didžiąją ir mažąją raides ir bent vieną
                skaičių.
              </p>
            </div>
            <div className=" form-group">
              <button type="submit" className="btn btn-primary mt-3">
                Išsaugoti
              </button>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <button
          className="btn btn-primary"
          onClick={this.handleUpdatePasswordButton}
        >
          Keisti
        </button>
      );
    }
  }

  /** Update password button handler */

  handleUpdatePasswordButton() {
    this.setState({
      passwordUpdate: true,
    });
  }

  /** Update password submit handler */

  handleUpdatePasswordSubmit(e) {
    e.preventDefault();
    if (this.state.newPassword !== this.state.newPasswordRepeat) {
      swal({
        text: "Slaptažodžiai nesutampa.",
        button: "Gerai",
      });
    } else {
      http
        .put(
          `${apiEndpoint}/api/users/updatepassword/${this.state.oldPassword}/${this.state.newPassword}`,
          {}
        )
        .then((response) => {
          swal({
            text: "Naudotojo slaptažodis atnaujintas sėkmingai",
            button: "Gerai",
          }).then(() => {
            this.setState({
              passwordUpdate: false,
              oldPassword: "",
              newPassword: "",
              newPasswordRepeat: "",
            });
          });
        })
        .catch((error) => {
          //console.log(error);
          swal({
            text: error.response.data,
            button: "Gerai",
          });
        });
    }
  }

  render(props) {
    const currenUserRole = this.state.role;

    return (
      <div className="container pt-4">
        <h6 className="py-3">Redaguoti duomenis</h6>

        <div className="row">
          <div className="form col-lg-7">
            <form onSubmit={this.handleSubmit}>
              {this.drawUpdateForm(this.state.role)}

              <button
                type="submit"
                id="btnSubmit"
                className="btn btn-primary marginTopSide"
              >
                Išsaugoti
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-12 pt-3">
            <h6 className="py-3">
              <b>Naudotojo prisijungimo informacija</b>
            </h6>
          </div>

          <div className="col-3">
            <p>Naudotojo vardas</p>
          </div>
          <div className="col-9">
            <p>{this.state.username}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h6 className="py-3">
              <b>Keisti slaptažodį</b>
            </h6>
          </div>

          <div className="col-lg-7">{this.drawUpdatePasswordForm()}</div>
        </div>

        {currenUserRole === "USER" && (
          <div>
            <h6 className="pt-4">
              <b>Tvarkyti paskyrą</b>
            </h6>

            <div className="row">
              <div className="col-12">
                <DownloaderContainer />
              </div>

              <div className="col-12 py-3">
                <ForgetMe />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
