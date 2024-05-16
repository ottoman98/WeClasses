// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  FUNDING,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

import { useContext, useState } from "react";
import { postPurchaseClasse } from "../api/studentPurchases";
import { useNavigate } from "react-router-dom";
import { DataContextTabs } from "../context/studentsTab";
function PayPal({ price, id }: { price: string; id: string }) {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  const { setName } = useContext(DataContextTabs);
  const [currency, setCurrency] = useState(options.currency);
  const navigate = useNavigate();

  const onCurrencyChange = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    setCurrency(value);
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: value,
      },
    });
  };
  const onCreateOrder = (data, actions) => {
    try {
      return actions.order.create({
        purchase_units: [
          {
            description: "description",
            amount: {
              value: price,
            },
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onApproveOrder = (data, actions) => {
    try {
      return actions.order.capture().then(() => {
        postPurchaseClasse({ classe: id });
        navigate("/profile");
        setName("loading");
        setTimeout(() => {
          setName("lessons");
        }, 1000);
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {isPending ? (
        <div>loading</div>
      ) : (
        <>
          <select value={currency} onChange={onCurrencyChange}>
            <option value="">Select Currency</option>
            <option value="USD">United States dollar</option>
            <option value="EUR">Euro</option>
          </select>
          {currency ? (
            <PayPalButtons
              fundingSource={FUNDING.PAYPAL}
              createOrder={(data, actions) => onCreateOrder(data, actions)}
              onApprove={(data, actions) => onApproveOrder(data, actions)}
            />
          ) : (
            "Selecione su currency"
          )}
        </>
      )}
    </>
  );
}

export default PayPal;
