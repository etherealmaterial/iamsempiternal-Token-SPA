import React from "react";
import "./DiscordCommunitySection.css";
import discordImage from "./discord-screenshot.png";
// Update with your actual image import or path

const DiscordCommunitySection = () => {
    return (
        <section className="discord-section">
            <div className="discord-container">
                {/* Left column: Text */}
                <div className="discord-text">
                    <h2>Our Discord community is the heart of our project.</h2>
                    <p>
                        When you execute a transaction in the ICO you will receive an invite
                        to our community with our first Artist coming in for a one hour takeover
                        on <strong>21 March 2025</strong>.
                    </p>
                </div>

                {/* Right column: Image */}
                <div className="discord-image-wrapper">
                    <img
                        src={discordImage}
                        alt="Discord Screenshot"
                        className="discord-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default DiscordCommunitySection;