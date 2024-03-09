import { useParams } from "react-router-dom";
import postPurchaseClasse from "../../api/studentPurchases";
import { useNavigate } from "react-router-dom";
function ClassPayments() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <form action="">
        <input type="text" placeholder="1234 1234 1234 1234" />
        <input type="text" placeholder="MM" />
        <input type="text" placeholder="YY" />
        <input type="text" placeholder="YY" />
        <input type="text" placeholder="CVC" />
      </form>

      <button
        onClick={() => {
          postPurchaseClasse({ classe: id });
          navigate("/profile");
        }}
      >
        Confirm payment
      </button>
    </>
  );
}

export default ClassPayments;
