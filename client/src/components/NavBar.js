import React from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { Link, Route, Routes } from "react-router-dom";
import Social from "./Social";

const NavBar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }
  return (
    <Flex justify="space-between" align="center" padding="30px">
      {/* Bottom - Social Media */}
      <Social />
      {/* <Link to="/cryptomarket"> Crypto Market</Link> */}
      {/* Rightside - Sections and Connection */}
      <Flex justify="space-around" align="center" width="40%" padding="30px">
        {/* <Box margin="0 15px">About </Box>
            <Spacer />
            <Box margin="0 15px">Home </Box>
            <Spacer />
            <Box margin="0 15px">Crypto Market </Box> */}
        <Spacer />

        {/* Connected */}
        {isConnected ? (
          <Box margin="0 15px">Connected</Box>
        ) : (
          <Button
            backgroundColor="#D6517D"
            borderRadius="5px"
            boxShadow="0px 3px 3px 2px #0F0F0F"
            color="white"
            cursor="pointer"
            fontFamily="inherit"
            padding="15px"
            margin="0 15px"
            onClick={connectAccount}
          >
            Connect
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default NavBar;
