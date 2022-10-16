import "./sidebar.css"


const sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
      <i className="fas fa-keyboard"></i> DevType
      </div>
      <div className="sidebar-explorer">
        <div className="explorer__folder">
          <span><i className="fas fa-angle-down"></i> <i className="fas fa-folder"></i> admin</span>
          <div className="explorer__folder">
            <span><i className="fas fa-angle-down"></i> <i className="fas fa-folder"></i> TypeSpeed</span>
            <div className="explorer__file">
              <span>
                <i className="fab fa-react"></i> TypeSpeed.jsx
              </span>
            </div>
            <div className="explorer__file">
              <span>
                <i className="fab fa-react"></i> TypeFaster.jsx
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default sidebar