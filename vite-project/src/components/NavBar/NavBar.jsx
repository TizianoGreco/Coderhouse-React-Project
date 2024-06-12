import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Box, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react';
import { FaAngleDown } from 'react-icons/fa';
import logo from '../../img/Dale Play-01.png';

const NavBar = () => {
  return (
    <Box as="nav" bg="gray.100" py={4}>
      <Flex maxW="container.lg" mx="auto" align="center" justify="space-between">
      <Image src={logo} alt="Dale Play" width="150px" height="auto" />
        <Flex align="center">
          <Menu>
            <MenuButton as={Button} rightIcon={<FaAngleDown />} mr={4}>
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
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;