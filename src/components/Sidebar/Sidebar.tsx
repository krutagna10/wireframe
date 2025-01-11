import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Filter Options</h3>
      <p>Category</p>
      <select>
        <option value="painting">Painting</option>
        <option value="vidoes">Videos</option>
      </select>
      <p>Subcategory</p>
      <select>
        <option value="painting">Potraits</option>
        <option value="vidoes">Landscapes</option>
      </select>
    </aside>
  );
}

export default Sidebar;
