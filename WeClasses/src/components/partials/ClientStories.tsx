import { Fragment } from "react";

import { useParams } from "react-router-dom";
import { GetStoriesByLanguage } from "../../api/axiosStories";
import StoryCard from "./StoryCard";

function ClientStories() {
  const { language } = useParams();

  const data = GetStoriesByLanguage(language);

  return (
    <Fragment key={language}>
      {!data
        ? "loading"
        : data.map((x) => {
            return (
              <Fragment key={x._id}>
                <StoryCard story={x} />
              </Fragment>
            );
          })}
    </Fragment>
  );
}

export default ClientStories;
