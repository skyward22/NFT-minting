import React from "react";
import { Link } from "@chakra-ui/react";

const Title = () => {
  return (
    <div>
      <Link
        target="_blank"
        color="white"
        fontSize="60px"
        textShadow="0 5px #000000"
        href="https://www.amazon.com/Cryptopia-Bitcoin-Blockchains-Future-Internet/dp/B08HSMD6N9/ref=sr_1_1?crid=25H48N0R4IQPV&keywords=cryptopia&qid=1655234005&sprefix=cryptop%2Caps%2C176&sr=8-1"
      >
        Cryptopia
      </Link>
    </div>
  );
};

export default Title;
