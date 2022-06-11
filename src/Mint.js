import React, {useState} from 'react'
import {ethers, BigNumber} from 'ethers'
import Cryptopia from './CryptopiaNFT.json'

const cryptopiaNFTAddress = "0x8DEe11E660dE0148ccEdAc85916D398785e6bD66"

const Mint = () => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);


    async function handleMint() {
        if(window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ehters.Contract(
                cryptopiaNFTAddress,
                cryptopia.abi,
                signer
            );
            try {
                const response = await contract.mint(mintAmount);
                console.log('respone: ', response);
            } catch (err) {
                console.log("error: ", err)
            }
        }
    }
  return (
    <div>Mint</div>
  )
}

export default Mint