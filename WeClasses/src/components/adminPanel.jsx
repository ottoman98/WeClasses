"react";
import "./admin.css";

function AdminPanel() {
  const data = JSON.parse(localStorage.getItem("user"));

  console.log(data);

  return (
    <>
      <aside>
        <ul>
          <li>Teachers</li>
          <li>Students</li>
          <li>Stories</li>
          <li>more...</li>
        </ul>
      </aside>

      <div>
        <h3>Data</h3>
      </div>

      {data ? data.name : 3}
    </>
  );
}

export default AdminPanel;
