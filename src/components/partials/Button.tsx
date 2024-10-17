import { Link } from "react-router-dom";
function Button({ link, content }: { link: string; content: string }) {
  return (
    <Link
      className="bg-blue-950 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:bg-blue-900 duration-500"
      to={link}
    >
      {content}
    </Link>
  );
}

export default Button;
