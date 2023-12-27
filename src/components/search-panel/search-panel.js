import "./search-panel.css";
import { Component } from "react";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameSearch: "",
    };
  }

  getNameEmployees = (e) => {
    let nameSearch = e.currentTarget.value;
    this.setState({ nameSearch });
    this.props.onUpdateNameSearch(nameSearch);
  };

  render() {
    const { nameSearch } = this.state;
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        name="name"
        value={nameSearch}
        onChange={this.getNameEmployees}
      />
    );
  }
}

export default SearchPanel;
