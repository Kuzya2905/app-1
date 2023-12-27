import { Component } from "react";
import "./employeers-add-form.css";

class EmployeersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  formEventPreventDefault = (e) => {
    e.preventDefault();
    this.setState({
      name: "",
      salary: "",
    });
  };

  render() {
    const { addItem } = this.props;
    const { name, salary } = this.state;
    return (
      <div className="footerForm">
        <span>Добавьте нового сотрудника</span>
        <form className="d-flex" onSubmit={this.formEventPreventDefault}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="З/П в $ ?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />
          <button
            type="submit"
            className="btn btn-outline-light"
            onClick={() => {
              addItem(name, salary);
            }}
          >
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeersAddForm;
