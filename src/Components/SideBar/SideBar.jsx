import "./Sidebar.css"
import { useState,useEffect } from "react";
import {fiction , nonFiction, NovelsData} from "../../data";
import { UserAuth } from "../../Context/AuthContext";

export const SideBar = ()=>{
  const [q, setQ] = useState("");
  const {setNovelData}=UserAuth();
  const [search,setSearch]=useState([]);
  const filterNovels = (e) =>{
   
    if(e.target.checked){
      const searchResult=(NovelsData.filter(novel=>(
        novel.subcategory.includes(e.target.name))))
      //  search = search.concat(searchResult); 
      setSearch((prevval)=>prevval.concat(searchResult))
      console.log(search)
     setNovelData(search)
    }
   
  }
  //useEffect(()=>{console.log("hello")},[filterNovels])

    return (  
        <section className="sidebar-container">
          <div className="sidebar-section">

            <h2 className="Category-lable">Fictions</h2>
            <ul className="category-con">
              {fiction.map((item,index)=>(
                <li key={index}><input type="checkbox" name={item.subcategory}className="inpt-box" onChange={filterNovels}/>{item.subcategory}</li>
              ))}
            </ul>
            <h2 className="Category-lable">Non - Fictions</h2>
            <ul className="category-con">
            {nonFiction.map((item,index)=>(
                <li key={index}><input type="checkbox" name={item.subcategory} className="inpt-box" />{item.subcategory}</li>
              ))}
            </ul>
          </div>
        </section>
        
    )
}