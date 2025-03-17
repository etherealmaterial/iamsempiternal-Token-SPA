import React, { useState } from "react";
import "./WhitelistCTA.css";

function WhitelistCTA() {
    const [ethAddress, setEthAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle your whitelisting logic here
        alert(`Submitted address: ${ethAddress}`);
    };

    return (
        <section className="whitelist-section">
            <h2>Whitelist your Ethereum Address:</h2>
            <form className="whitelist-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={ethAddress}
                    onChange={(e) => setEthAddress(e.target.value)}
                    placeholder="Your ethereum address"
                />
                <button type="submit">You're in!</button>
            </form>
        </section>
    );
}

export default WhitelistCTA;