function MessageCard() {
  return (
    <li className="flex gap-2 text-blue-950 py-3 border-b hover:cursor-pointer">
      <img
        className="h-10 "
        src="https://avatars.preply.com/i/logos/i/logos/avatar_x5rxakxeyab.jpg"
        alt=""
      />
      <div className="flex flex-col">
        <h4 className="font-bold">Olga S.</h4>
        <span className="text-xs text-slate-500">No messages yet</span>
      </div>
    </li>
  );
}

export default MessageCard;
