import "./Sidebar.css"
import { useState, useEffect } from "react";
import { fiction, nonFiction, bookCondition, NovelsData } from "../../data";
import { UserAuth } from "../../Context/AuthContext";

export const SideBar = () => {
  const { setNovelData, novelsData } = UserAuth();
  const [checkedCategory, setCheckedCategory] = useState([]);
  const [newNovelsData, setData] = useState(NovelsData);
  const filterNovels = (e) => {
    if (e.target.checked) {
      setCheckedCategory([...checkedCategory, e.target.name]);
    } else {
      checkedCategory.splice(checkedCategory.indexOf(e.target.name), 1);
      setCheckedCategory(checkedCategory);
      searchAndFilter();
    }
  };

  const searchAndFilter = () => {
    const searchResult = NovelsData.filter((novel) =>
      novel.subcategory.some((r) => checkedCategory.includes(r)) || checkedCategory.includes(novel.condition)
    );
    setNovelData(searchResult);
  };

  useEffect(() => {
    console.log(checkedCategory)
    searchAndFilter();
  }, [checkedCategory]);

  useEffect(() => {
    setNovelData(NovelsData);
  }, []);

  return (
    <section className="sidebar-container">
      <div className="sidebar-section">
        <h2 className="Category-lable">Fictions</h2>
        <ul className="category-con">
          {fiction?.map((item, index) => (
            <li key={index}>
              <input
                type="checkbox"
                name={item.label}
                className="inpt-box"
                onChange={filterNovels}
              />
              {item.label}
            </li>
          ))}
        </ul>
        <h2 className="Category-lable">Non - Fictions</h2>
        <ul className="category-con">
          {nonFiction?.map((item, index) => (
            <li key={index}>
              <input
                type="checkbox"
                name={item.label}
                onChange={filterNovels}
                className="inpt-box"
              />
              {item.label}
            </li>
          ))}
        </ul>
        <h2 className="Category-lable">Book Condition</h2>
        <ul className="category-con">
          {bookCondition.map((item, index) => (
            <li key={index}><input type="checkbox" name={index} onChange={filterNovels} className="inpt-box" />{item.condition}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
