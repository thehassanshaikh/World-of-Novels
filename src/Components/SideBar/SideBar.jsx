import "./Sidebar.css"

export const SideBar = ()=>{
    return (
        <section className="sidebar-container">
          <div className="sidebar-section">
            <h2 className="Category-lable">Fictions</h2>
            <ul className="category-con">
                <li><input type="checkbox" className="inpt-box" />Fantacy</li>
                <li><input type="checkbox" className="inpt-box" />Romach</li>
                <li><input type="checkbox" className="inpt-box" />Crime</li>
            </ul>
            <h2 className="Category-lable">Non - Fictions</h2>
            <ul className="category-con">
                <li><input type="checkbox" className="inpt-box" />Fantacy</li>
                <li><input type="checkbox" className="inpt-box" />Romach</li>
                <li><input type="checkbox" className="inpt-box" />Crime</li>
            </ul>
          </div>
        </section>
        
    )
}