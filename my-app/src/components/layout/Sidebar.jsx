import { useState } from "react";
import { Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  const handleLogout = async () => {
    await dispatch(logOut());
  };

  const navigationMenu = [
    {
      itemName: "Dashboard",
      iconClass: "fa-solid fa-gauge",
      to: "/dashboard",
    },
    {
      itemName: "Examination",
      isTitle: true,
    },
    {
      itemName: "Schedule",
      iconClass: "fa-solid fa-calendar-days",
      to: "/schedule",
    },
    {
      itemName: "Datasheet Generation",
      iconClass: "fa-solid fa-file",
      to: "/datasheet",
    },
    {
      itemName: "Seating Plan",
      iconClass: "fa-solid fa-users",
      to: "/seating-plan",
    },
    {
      itemName: "Invigilation Duties",
      iconClass: "fa-solid fa-user-gear",
      to: "/invigilation",
    },
    {
      itemName: "Payments",
      iconClass: "fa-solid fa-file-invoice-dollar",
      to: "/payments",
    },
    {
      itemName: "Reports",
      isTitle: true,
    },
    {
      itemName: "View Reports",
      iconClass: "fa-solid fa-file-lines",
      to: "/view-reports",
    },
    {
      itemName: "Download Reports",
      iconClass: "fa-solid fa-download",
      to: "/download-reports",
    },
    {
      itemName: "Settings",
      isTitle: true,
    },
    {
      itemName: "Account Settings",
      iconClass: "fa-solid fa-user-cog",
      to: "/account-settings",
    },
    {
      itemName: "Notification Preferences",
      iconClass: "fa-solid fa-bell",
      to: "/notifications",
    },
    {
      itemName: "Logout",
      iconClass: "fa-solid fa-right-from-bracket",
      to: "/logout",
    },
  ];

  return (
    <>
      <Row className="d-flex sidebar">
        <div className="athel-menu-cont">
          <main className="w-100 h-100 athel-menu text-center text-secondary">
            <div className="sidebar-header">IGDTUW</div>
            <ul className="list-unstyled text-start">
              {navigationMenu.map((item, index) => (
                <NavigationItem
                  key={index}
                  itemName={item.itemName}
                  iconClass={item.iconClass}
                  to={item.to}
                  handleItemClick={() => handleItemClick(item.itemName)}
                  isSelected={selectedItem === item.itemName}
                />
              ))}
            </ul>
            <Link to="/privacy-policy" className="menu-link">
              <i className="fa-solid fa-shield-halved"></i>
              <span> Privacy Policy</span>
            </Link>
            <Link to="/terms-of-use" className="menu-link">
              <i className="fa-solid fa-file-contract"></i>
              <span>Terms Of Use</span>
            </Link>
            <Link onClick={handleLogout} className="menu-link">
              <i className="fa-solid fa-right-from-bracket"></i>
              <span>Logout</span>
            </Link>
          </main>
        </div>
      </Row>
    </>
  );
};

export default Sidebar;

const NavigationItem = ({
  itemName,
  iconClass,
  to,
  handleItemClick,
  isSelected,
}) => {
  return (
    <li className={isSelected ? "selected" : ""}>
      <Link to={to} onClick={handleItemClick} className="menu-item">
        <i className={iconClass}></i>
        <span>{itemName}</span>
      </Link>
    </li>
  );
};
