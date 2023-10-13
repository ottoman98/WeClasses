import "../stories/stories.css";
import { Link } from "react-router-dom";
function Stories() {
  return (
    <>
      <div className="stories">
        <h2>Stories</h2>
        <h3>13/10/2023</h3>

        <div className="card">
          <Link to="storydeprueba">
            <h3>BirthDay</h3>
          </Link>
          <i>My birthday is coming</i>
          <i>Level: A1</i>
        </div>
      </div>
    </>
  );
}

export default Stories;
