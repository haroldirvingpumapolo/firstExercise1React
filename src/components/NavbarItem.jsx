import React from "react";

const NavbarItem = () => {
  const navbarItems = ["Articles", "Chats", "Awards", "About"];
  const navbarItemElements = navbarItems.map((item) => (
    <li className="nav-item">{item}</li>
  ));
  return(
    <div class="nav-nav_bar_items">
      {navbarItemElements}
    </div>
  )
};

export default NavbarItem;

