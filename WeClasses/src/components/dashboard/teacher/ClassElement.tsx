import { classe } from "../../../types/classeTypes";

import { Link } from "react-router-dom";

function ClassElement({ classe }: { classe: classe }) {
  return (
    <tr className="border-b border-dashed last:border-b-0">
      <td className="p-3 pl-0">
        <div className="flex items-center">
          <div className="relative inline-block shrink-0 rounded-2xl me-3"></div>
        </div>
      </td>
      <td className="p-3 pr-0 text-end">
        <span className="font-semibold text-light-inverse text-md/normal">
          {classe.name}
        </span>
      </td>

      <td className="p-3 pr-12 text-end">
        <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
          {classe.duration} Min
        </span>
      </td>
      <td className="pr-0 text-start">
        <span className="font-semibold text-light-inverse text-md/normal">
          {classe.createdAt}
        </span>
      </td>
      <td className="p-3 pr-0 text-end">
        <Link to={`/dashboard/editclass/${classe._id}`}>Edit</Link>
      </td>
    </tr>
  );
}

export default ClassElement;
