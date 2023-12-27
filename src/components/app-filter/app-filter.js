import "./app-filter.css";
const AppFilter = (props) => {
  const allEmployeers = props.allEmployeers;
  const toRise = props.toRise;
  const salaryMoreThan1000 = props.salaryMoreThan1000;

  let btnClass1 = "btn btn-outline-light";
  let btnClass2 = "btn btn-outline-light";
  let btnClass3 = "btn btn-outline-light";

  allEmployeers
    ? (btnClass1 += " active")
    : (btnClass1 = "btn btn-outline-light");

  toRise ? (btnClass2 += " active") : (btnClass2 = "btn btn-outline-light");

  salaryMoreThan1000
    ? (btnClass3 += " active")
    : (btnClass3 = "btn btn-outline-light");

  return (
    <div className="btn-group">
      <button
        name="allEmployeers"
        className={btnClass1}
        type="button"
        onClick={(e) => {
          props.changeFilterState(e.target.getAttribute("name"));
        }}
      >
        Все сотрудники
      </button>
      <button
        name="toRise"
        className={btnClass2}
        type="button"
        onClick={(e) => {
          props.changeFilterState(e.target.getAttribute("name"));
        }}
      >
        На повышение
      </button>
      <button
        name="salaryMoreThan1000"
        className={btnClass3}
        type="button"
        onClick={(e) => {
          props.changeFilterState(e.target.getAttribute("name"));
        }}
      >
        З/П больше 1000
      </button>
    </div>
  );
};

export default AppFilter;
