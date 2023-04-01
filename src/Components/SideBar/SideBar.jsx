import "./Sidebar.css"
import { useState,useEffect } from "react";
import {fiction , nonFiction, NovelsData} from "../../data";
import { UserAuth } from "../../Context/AuthContext";

export const SideBar = ()=>{
  const [q, setQ] = useState("");
  const {setNovelData}=UserAuth();
  const [search,setSearch]=useState([]);
  const [checkedCategory,setCheckedCategory]=useState([])
  const filterNovels = (e) =>{
    if(e.target.checked){
      setCheckedCategory([...checkedCategory,e.target.name])
    }
    else{
      checkedCategory.splice(checkedCategory.indexOf(e.target.name), 1)
      setCheckedCategory(checkedCategory)
    }

  }
  
  useEffect(()=>{
    const searchResult=(NovelsData.filter(novel=>(
      novel.subcategory.some(r=> checkedCategory.includes(r)))))
  setNovelData(searchResult)
},[checkedCategory])

useEffect(()=>{
  setNovelData(NovelsData)
},[])

    return (
        <section className="sidebar-container">
          <div className="sidebar-section">

            <h2 className="Category-lable">Fictions</h2>
            <ul className="category-con">
              {fiction.map((item,index)=>(
                <li key={index}><input type="checkbox" name={item.label}className="inpt-box" onChange={filterNovels}/>{item.label}</li>
              ))}
            </ul>
            <h2 className="Category-lable">Non - Fictions</h2>
            <ul className="category-con">
            {nonFiction.map((item,index)=>(
                <li key={index}><input type="checkbox" name={item.label} className="inpt-box" />{item.label}</li>
              ))}
            </ul>
          </div>
        </section>
        
    )
}