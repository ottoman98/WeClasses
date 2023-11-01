import { Link } from "react-router-dom";
import "./admin.css";
import user from "../imgs/login.png";

function AdminPanel() {
  const data = JSON.parse(localStorage.getItem("user"));

  console.log(data);

  return (
    <>
      <section className="main">
        <aside>
          <ul>
            <li>
              <h2>Stories</h2>
              <ul>
                <Link to="/storyPost">
                  <li>Agregar Story</li>
                </Link>
                <Link to="/storiesList">
                  <li>Todas las stories</li>
                </Link>
              </ul>
            </li>
          </ul>
        </aside>

        <div className="dashboard">
          <h3>Data</h3>
          <img className="user-image" src={user} alt="" />

          <div>Name:{data ? data.name : 3}</div>
          <div>lastName{data ? data.lastName : 3}</div>
          <div>Email:{data ? data.email : 3}</div>
          <div>Phone:{data ? data.phone : 3}</div>
        </div>
      </section>
    </>
  );
}

export default AdminPanel;
