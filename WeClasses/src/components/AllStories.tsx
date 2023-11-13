import React from "react";
import { GetAllStories } from "../api/axiosStories";
import { story } from "../types/storyTypes";
import { Link } from "react-router-dom";

function AllStories() {
  const response: Array<story> | undefined = GetAllStories();
  console.log(response);

  return (
    <>
      {!response ? (
        <>
          <p>loading</p>
        </>
      ) : (
        response.map((x) => {
          return (
            <React.Fragment key={x._id}>
              <div className="bg-red-600 mx-6 my-8">
                <h4>{x.title}</h4>
                <p>Language:{x.language}</p>
                <p>Status:{x.status}</p>
                <p>{x.dialogue}</p>

                <p
                  onClick={() => {
                    console.log("agrega la funcion de borrado");
                  }}
                >
                  Delete
                </p>
                <p
                  onClick={() => {
                    console.log("agrega la funcion de borrado");
                  }}
                >
                  <Link to={`/editstory/${x._id}`}>Edit</Link>
                </p>
              </div>
            </React.Fragment>
          );
        })
      )}
    </>
  );
}

export default AllStories;
