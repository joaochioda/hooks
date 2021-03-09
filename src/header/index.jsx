import React from "react";
import { useHistory } from "react-router-dom";

function Header({ children }) {
  let history = useHistory();

  return (
    <div>
      <button onClick={() => history.push("/callback")}>useCallBack</button>
      <button onClick={() => history.push("/usememo")}>useMemo</button>
      <button onClick={() => history.push("/usecontext")}>useContext</button>
      <button onClick={() => history.push("/customhook")}>customHook</button>
      <div>{children}</div>
    </div>
  );
}

export default Header;
