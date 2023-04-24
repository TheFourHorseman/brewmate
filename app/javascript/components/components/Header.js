import React, { useState } from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from "reactstrap";

const Header = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink href="/" active>
            Brewmate
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/beerindex">All Beers</NavLink>
        </NavItem>
        {logged_in && (
          <>
            <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle nav caret>
                {current_user.email}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/beerprofile">Profile</DropdownItem>
                <DropdownItem href="/mybeers">Your Beers</DropdownItem>
                <DropdownItem href="/mylikedbeers">Liked Beers</DropdownItem>
                <DropdownItem href="/beernew">Add Beer</DropdownItem>
                <DropdownItem divider />
                <DropdownItem href={sign_out_route}>Log out</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </>
        )}
        {!logged_in && (
          <>
            <NavItem>
              <NavLink href={sign_in_route}>Log in</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={new_user_route}>Create an account</NavLink>
            </NavItem>
          </>
        )}
      </Nav>
    </div>
  );
};

export default Header;
