import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Heading
} from '@chakra-ui/react';
import { FaAngleDown } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div>
      <Heading>LOGO</Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaAngleDown />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
    </div>
  );
}

export default NavBar;
