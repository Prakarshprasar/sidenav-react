
import React from "react";
import style from "./sidenav.module.css";


const SideNav = () => {
  let arr = [
    { class: "fa-solid fa-house-chimney", text: "Home" },
    { class: "fa-solid fa-arrow-trend-up", text: "Trending" },
    { class: "fa-regular fa-compass", text: "Explore" },
    { class: "fa-solid fa-star-half-stroke", text: "Favourites" },
    { class: "fa-solid fa-gear", text: "Settings" }
    
  ];

  return (
    <div className={style.nav}>
      <p className={style.logo}>Logo</p>
      <div className={style.btn}>
        {
            arr.map((elem)=>(
                <div className={style.flex}>
                    <i class={elem.class}></i>
                    <p>{elem.text}</p>
                </div>
            ))
        }
      </div>
    
      
    </div>
  );
};

export default SideNav;
