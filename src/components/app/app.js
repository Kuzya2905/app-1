import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeersList from "../employeers-list/employeers-list";
import EmployeersAddForm from "../employeers-add-form/employeers-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: false, rise: false, id: 1 },
        { name: "Alex M.", salary: 3000, increase: false, rise: false, id: 2 },
        { name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3 },
      ],
      nameSearch: "",
      filterState: {
        allEmployeers: false,
        toRise: false,
        salaryMoreThan1000: false,
      },
    };
  }

  changeFilterState = (nameButton) => {
    const filterState = this.state.filterState;
    for (let elem in filterState) {
      filterState[elem] = false;
    }
    for (let elem in filterState) {
      if (elem === nameButton) {
        this.setState(() => {
          return {
            filterState: {
              ...this.state.filterState,
              [nameButton]: true,
            },
          };
        });
      }
    }
  };

  onUpdateNameSearch = (nameSearch) => {
    console.log(10);
    this.setState({
      nameSearch: nameSearch,
    });
  };

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = this.state.data.findIndex((elem) => {
        return elem.id === id;
      });
      const newData = [...data];
      newData.splice(index, 1);
      return {
        data: newData,
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      let countId = 1;
      newArr.forEach((elem) => {
        elem.id = countId++;
      });
      return {
        data: newArr,
      };
    });
  };

  onToggle = (id, dataProp) => {
    const newArr = this.state.data;
    newArr.forEach((elem) => {
      if (elem.id === id) {
        elem[dataProp] = !elem[dataProp];
      }
    });
    this.setState({
      data: newArr,
    });
  };

  numberOfEmployees = () => {
    return this.state.data.length;
  };

  getIncrease = () => {
    let count = 0;
    this.state.data.forEach((elem) => {
      if (elem.increase) {
        count++;
      }
    });
    return count;
  };

  filterData = () => {
    const data = this.state.data;
    const toRise = this.state.filterState.toRise;
    const salaryMoreThan1000 = this.state.filterState.salaryMoreThan1000;
    if (toRise) {
      let newData = this.state.data.filter((elem) => elem.rise);
      return newData;
    }
    if (salaryMoreThan1000) {
      let newData = this.state.data.filter((elem) => elem.salary >= 1000);
      return newData;
    } else return data;
  };

  searchEmp = (nameSearch, data) => {
    const newData = data;
    if (nameSearch.length === 0) {
      return newData;
    } else {
      const newArr = newData.filter((item) => {
        if (item.name.toUpperCase().indexOf(nameSearch.toUpperCase()) > -1) {
          return true;
        }
        return false;
      });
      return newArr;
    }
  };

  checkFilterState = () => {};

  render() {
    const filterData = this.filterData();
    const { nameSearch } = this.state;
    const visible = this.searchEmp(nameSearch, filterData);
    const filterState = this.state.filterState;

    return (
      <div className="app">
        <AppInfo
          numberOfEmployees={this.numberOfEmployees}
          getIncrease={this.getIncrease}
        />

        <div className="search-panel">
          <SearchPanel
            data={this.state.data}
            onUpdateNameSearch={this.onUpdateNameSearch}
          />
          <AppFilter
            filterData={this.filterData}
            changeFilterState={this.changeFilterState}
            allEmployeers={filterState.allEmployeers}
            toRise={filterState.toRise}
            salaryMoreThan1000={filterState.salaryMoreThan1000}
            checkFilterState={this.checkFilterState}
          />
        </div>
        <EmployeersList
          data={visible}
          onDelete={this.deleteItem}
          onToggle={this.onToggle}
        />
        <EmployeersAddForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
