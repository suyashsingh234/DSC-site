import React from "react";

const Member= ({ img, name, position }) => {
  return (
    <div className="member-card" data-aos="zoom-out">
      <img src={img} alt="profile" />
      <h3 className="dsc-font">{name}</h3>
      <p className="dsc-font">{position}</p>
    </div>
  );
};

export default Member;
