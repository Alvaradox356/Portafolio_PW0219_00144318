import React, { component } from "react";
class RegisterForm extends component {
  options = [
    "lunes de 09:00 a 11:00",
    "martes de 13:30 a 15:30",
    "miercoles de 09:00 a 11:00",
    "jueves de 13:30 a 15:30",
    "viernes de 09:00 a 11:00"
  ];

  carnet_regex = new RegExp("[0-9]{8}$");

  state = {
    carnet: "",
    schedule: this.options[0],
    isLate: true,
    isDisable: true
  };
  handleChange = e => {
    let name = e.target.name;
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    let returnValue = {
      [name]: value
    };
    if (name === "carnet") {
      if (this.carnet_regex.test(value)) {
        returnValue.isDisable = false;
      } else {
        returnValue.isDisable = true;
      }
    }
    this.setState(returnValue);
  };

  render() {
    return (
      <div className="jumbotron">
        <h1> REGISTRO DE LABORATORIO</h1>
        <div className="form-group">
          <label className="col-sm-2 col-form-label">ingrese el carnet</label>
          <br />

          <input
            className="Form-control"
            type="text"
            name="carnet"
            value={this.state.carnet}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>seleccione el horario:</label>

          <select
            name="schedule"
            className="form-control custom -select"
            value={this.state.schedule}
            onChange={this.handleChange}
          >
            {this.options.map(elem => {
              return <option key={elem}> {elem}</option>;
            })}
          </select>
        </div>
        <div style={{ marginLeft: 1 + "em" }} htmlFor="isLate">
          <input
            name="isLate"
            type="checkbox"
            onChange={this.handleChange}
            checked={this.state.isLate}
          />
          <label style={{ marginLeft: 1 + "em" }} htmlFor="isLate">
            llego tarde?
          </label>
        </div>

        <div className="form-group" />

        <button
          type="button"
          className="btn btn -info"
          id="submit_btn"
          onClick={() => {
            this.props.onSubmit({
              carnet: this.state.carnet,
              schedule: this.state.schedule,
              isLate: this.state.isLate
            });
          }}
          disabled={this.state.isDisable}
          Ingresar
        />
      </div>
    );
  }
}

export default RegisterForm;