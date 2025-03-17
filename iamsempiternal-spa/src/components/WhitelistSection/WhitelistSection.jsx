import React, { useState } from "react";
import "./WhitelistSection.css";

const WhitelistSection = () => {
    const [address, setAddress] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Add submission logic (e.g., API call or blockchain interaction)
        console.log("Submitted address:", address);
        setSubmitted(true);
    };

    return (
        <section className="whitelist-section">
            <div className="whitelist-container">
                <h2 className="whitelist-title">Whitelist your Ethereum Address</h2>
                {submitted ? (
                    <p className="whitelist-message">
                        Thank you! You are now whitelisted.
                    </p>
                ) : (
                    <form onSubmit={handleSubmit} className="whitelist-form">
                        <input
                            type="text"
                            placeholder="Enter your Ethereum address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="whitelist-input"
                            required
                        />
                        <button type="submit" className="whitelist-button">
                            Submit
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default WhitelistSection;