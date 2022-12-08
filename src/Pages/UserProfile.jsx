import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const param = useParams();

  console.log(param.id);

  return <div>UserProfile</div>;
};

export default UserProfile;
