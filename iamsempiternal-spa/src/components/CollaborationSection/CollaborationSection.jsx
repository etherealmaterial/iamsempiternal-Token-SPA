import React from "react";
import "./CollaborationSection.css";

const CollaborationSection = () => {
    return (
        <section className="collaboration-section">
            <div className="collaboration-container">
                <div className="collaboration-text">
                    <h2 className="section-title">Collaboration through Connection</h2>
                    <p className="section-description">
                        Our platform is designed to connect artists and fans through exclusive channels and immersive experiences. Explore new opportunities and be part of our vibrant community.
                    </p>
                    <button className="section-button">I'm Convinced!</button>
                </div>
                <div className="collaboration-illustration">
                    {/* Replace the src with your actual illustration path */}
                    <img src="path-to-your-illustration.png" alt="Collaboration Illustration" />
                </div>
            </div>
        </section>
    );
};

export default CollaborationSection;