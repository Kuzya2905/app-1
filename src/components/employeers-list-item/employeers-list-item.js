import "./employeers-list-item.css";

const EmployeersListItem = (props) => {
  const { name, salary, onDelete, onToggle, increase, rise, id } = props;

  let classNames = "list-group-item d-flex justify-content-between";
  if (increase) {
    classNames += " increase";
  }
  if (rise) {
    classNames += " star";
  }

  return (
    <li className={classNames}>
      <button
        className="btn-list-item"
        onClick={() => {
          onToggle(id, "rise");
        }}
      >
        {name}
      </button>
      <input type="text" className="form-control" defaultValue={salary + "$"} />
      <button
        type="button"
        className="btn"
        onClick={() => {
          onToggle(id, "increase");
        }}
      >
        <i className="fa-solid fa-money-bill-trend-up"></i>
      </button>
      <button type="button" className="btn" onClick={onDelete}>
        <i className="fa-solid fa-trash"></i>
      </button>
      <i className="fas fa-star"></i>
    </li>
  );
};

export default EmployeersListItem;
