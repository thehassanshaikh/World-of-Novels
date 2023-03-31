import "./Sidebar.css"
import { useState,useEffect } from "react";
import {fiction , nonFiction} from "../../data";

export const SideBar = ()=>{


    return (
        <section className="sidebar-container">
          <div className="sidebar-section">

            <h2 className="Category-lable">Fictions</h2>
            <ul className="category-con">
              {fiction.map((item,index)=>(
                <li><input type="checkbox" className="inpt-box" />{item.subcategory}</li>
              ))}
            </ul>
            <h2 className="Category-lable">Non - Fictions</h2>
            <ul className="category-con">
            {nonFiction.map((item,index)=>(
                <li><input type="checkbox" className="inpt-box" />{item.subcategory}</li>
              ))}
            </ul>
          </div>
        </section>
        
    )
}