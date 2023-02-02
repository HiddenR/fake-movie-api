import React from "react";
import classes from "./UserAccount.module.css";
import Icon from "./icon.png";
const UserAccount = () => {
  return (
    <div>
      <img className={classes.useIcon} src={Icon} />
    </div>
  );
};

export default UserAccount;