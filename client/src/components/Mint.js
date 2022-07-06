import React, { useState, useEffect } from "react";
import { ethers, BigNumber } from "ethers";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import cryptopiaNFT from "../CryptopiaNFT.json";
import Title from "./Title";
import Coin from "./Coin";
import Axios from "axios";

const cryptopiaNFTAddress = "0x8DEe11E660dE0148ccEdAc85916D398785e6bD66";

const Mint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);
  const [listOfCoins, setListOfCoins] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/gettopcrypto").then((res) =>
      setListOfCoins(res.data)
    );
  }, []);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase();
  });
  console.log(filteredCoins);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        cryptopiaNFTAddress,
        cryptopiaNFT.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.008 * mintAmount).toString()),
        });
        console.log("response: ", response);
      } catch (err) {
        console.log("error: ", err);
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 5) return;
    setMintAmount(mintAmount + 1);
  };

  return (
    <div>
      <Flex
        justify="center"
        align="center"
        height="100vh"
        paddingBottom="150px"
      >
        <Box width="520px">
          <div>
            <Title />
            <Text
              fontSize="30px"
              letterSpacing="-5.5%"
              fontFamily="VT323"
              textShadow="0 2px 2px #000000"
            >
              It's the future. What will happen next will depend on you.
            </Text>
          </div>
          {isConnected ? (
            <div>
              <Flex align="center" justify="center">
                <Button
                  backgroundColor="#D6517D"
                  borderRadius="5px"
                  boxShadow="0px 2px 2px 1px #0F0F0F"
                  color="white"
                  cursor="pointer"
                  fontFamily="inherit"
                  padding="15px"
                  marginTop="10px"
                  onClick={handleDecrement}
                >
                  -
                </Button>
                <Input
                  readOnly
                  fontFamily="inherit"
                  width="100px"
                  height="40px"
                  textAlign="center"
                  paddingLeft="19px"
                  marginTop="10px"
                  type="number"
                  value={mintAmount}
                />
                <Button
                  backgroundColor="#D6517D"
                  borderRadius="5px"
                  boxShadow="0px 2px 2px 1px #0F0F0F"
                  color="white"
                  cursor="pointer"
                  fontFamily="inherit"
                  padding="15px"
                  marginTop="10px"
                  onClick={handleIncrement}
                >
                  +
                </Button>
              </Flex>
              <Button
                backgroundColor="#D6517D"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                marginTop="10px"
                onClick={handleMint}
              >
                Mint Here
              </Button>
            </div>
          ) : (
            <p>
              You're not connected. Please "Connect" in order to mint. Minting
              is .03 ETH/mint.{" "}
            </p>
          )}
        </Box>
      </Flex>
      <Flex className="cryptoDisplay">
        {filteredCoins.map((crypto) => {
          return (
            <Coin
              name={crypto.name}
              icon={crypto.icon}
              price={crypto.price}
              symbol={crypto.symbol}
              // priceChange={crypto.price_change_percentage_24h}
            />
          );
        })}
      </Flex>
    </div>
  );
};

export default Mint;
