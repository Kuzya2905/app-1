import EmployeersListItem from "../employeers-list-item/employeers-list-item";
import "./employeers-list.css";

const EmployeersList = ({ data, onDelete, onToggle }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeersListItem
        data={data}
        key={id}
        {...itemProps}
        onDelete={() => {
          onDelete(id);
        }}
        id={id}
        onToggle={onToggle}
      />
    );
  });
  return <ul className="list-group">{elements}</ul>;
};

export default EmployeersList;
