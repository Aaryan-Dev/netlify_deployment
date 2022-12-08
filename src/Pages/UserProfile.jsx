import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "../App.css";
import { useContext } from "react";
import { Con } from "../Context/AppContext";

const UserProfile = () => {
  const param = useParams();
  const [obj, setObj] = useState({});
  // const navigate = useNavigate();
  const value = useContext(Con);
  const { logoutUser } = value;

  useEffect(() => {
    fetch("https://json-db.onrender.com/user")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        for (let i = 0; i < res.length; i++) {
          if (Number(param.id) === res[i].id) {
            setObj(res[i]);
            // console.log(arr[i]);
            break;
          }
        }
      });
  }, [param.id]);

  const deleteIt = (id) => {
    fetch("https://json-db.onrender.com/user/" + id, { method: "DELETE" })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        alert("Account will be deleted");
        logoutUser();
      });
  };

  const editIt = (id) => {};

  return (
    <div id="user">
      <div>
        <img id="pf" src="https://i.pravatar.cc/200" alt="pic" />
      </div>
      <div>@{obj.username}</div>
      <div>{obj.fullName}</div>
      <div>{obj.email}</div>
      <div id="row">
        <div className="foll">
          {(Math.random() * 1000000).toFixed(0) + ` Followers`}
        </div>
        <div className="foll">
          {(Math.random() * 1000).toFixed(0) + ` Following`}
        </div>
      </div>
      <div id="row">
        <div>
          <button onClick={() => editIt(obj.id)} id="edit" className="but">
            <pre> Edit Profile</pre>
          </button>
        </div>
        <div>
          <button onClick={() => deleteIt(obj.id)} id="delete" className="but">
            <pre>Delete Account</pre>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
