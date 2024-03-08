import { classe } from "../../types/classeTypes";
import postPurchaseClasse from "../../api/studentPurchases";
import { useNavigate } from "react-router-dom";

function ClassesCard({ data }: { data: classe }) {
  const navigate = useNavigate();
  return (
    <div className="flex border rounded-md p-4 gap-10">
      <img
        className="w-32 rounded-full aspect-square"
        src="https://i.ebayimg.com/images/g/HyUAAOSwXSpgTlnV/s-l1200.webp"
        alt=""
      />
      <div>
        <h3 className="text-xl">{data.name}</h3>
        <div className="flex flex-row">
          <img
            className="w-5"
            src="https://d13nnzzfr74buh.cloudfront.net/img/icons/trusted.svg"
            alt=""
          />
          <span>Verified Teacher</span>
        </div>
        <span>{data.language}</span>

        <p dangerouslySetInnerHTML={{ __html: data.description }} />
      </div>
      <div className="flex flex-col  ">
        <div className="flex gap-4">
          <span>4.9</span>
          <span>COP 43,044</span>
          <span>{data.duration} min</span>
          <span>{data.level}</span>
        </div>
        <button
          onClick={() => {
            postPurchaseClasse({ classe: data._id });
            navigate("/profile");
          }}
          className="bg-blue-950 text-white p-5 rounded"
        >
          Book Class
        </button>
      </div>
    </div>
  );
}

export default ClassesCard;
