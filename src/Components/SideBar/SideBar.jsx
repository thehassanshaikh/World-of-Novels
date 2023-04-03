import "./Sidebar.css"
import { useState, useEffect, useRef} from "react";
import { fiction, nonFiction, bookCondition, NovelsData } from "../../data";
import { UserAuth } from "../../Context/AuthContext";

export const SideBar = () => {
  const { setNovelData, novelsData } = UserAuth();
  const [checkedCategory, setCheckedCategory] = useState([]);
  const [newNovelsData, setData] = useState(NovelsData);

  //=============== fixed sidebar code Sidebar ==========================
  const sidebarRef = useRef(null);

  const [sidebarTop, setSidebarTop] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
      setViewportHeight(window.innerHeight);
      setContentHeight(document.getElementsByClassName("content-wrapper")[0].getBoundingClientRect().height);
      setSidebarTop(document.getElementsByClassName("sidebar")[0].getBoundingClientRect().top + window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollTop >= contentHeight - viewportHeight + sidebarTop) {
      document.getElementsByClassName("content-wrapper")[0].style.transform = `translateY(-${contentHeight - viewportHeight + sidebarTop}px)`;
      document.getElementsByClassName("content-wrapper")[0].style.position = "fixed";
    } else {
      document.getElementsByClassName("content-wrapper")[0].style.transform = "";
      document.getElementsByClassName("content-wrapper")[0].style.position = "";
    }
  }, [scrollTop, contentHeight, viewportHeight, sidebarTop]);

  //=========================== fixed sidebar code Sidebar  end===================
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
    <div className="sidebar-section" ref={sidebarRef}>
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
  );
};
