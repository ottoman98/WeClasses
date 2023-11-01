import React from "react";

import requests from "../api/requestStories";

function StoriesAdmin() {
  const data = requests.storyGetAll();

  return (
    <>
      {!data
        ? "ta cargando cojela suave"
        : data.map((x) => {
            return (
              <React.Fragment key={x._id}>
                <div className="">
                  <h3>Title:{x.title}</h3>
                  <i>Language:{x.language}</i>
                  <br />
                  <i>Status:{x.status}</i>
                </div>
              </React.Fragment>
            );
          })}
    </>
  );
}

export default StoriesAdmin;
