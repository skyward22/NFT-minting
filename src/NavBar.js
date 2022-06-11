import React from 'react'

const NavBar = ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0])

    asyn function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            })
            setAccounts(accounts);
        }
    }
  return (
    <div>NavBar
        {/* Leftside - Social Media */}
        <div>Facebook</div>
        <div>Twitter</div>

    {/* Rightside - Sections and Connection */}
        <div>About</div>
        <div>Mint</div>
        <div>Team</div>

    {/* Connected */}
    {isConnected ? (
        <p>Connected</p>
    ) : (
        <button onClick={connectAccount}>Connect</button>
    )}
        
    </div>
  )
}

export default NavBar