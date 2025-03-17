import React from 'react';
import './TheTeam.css';

const TheTeam = () => {
    return (
        <section className="theteam-section">
            <h2 className="theteam-title">The team behind IAMSEMPITERNAL.</h2>

            <div className="theteam-container">
                {/* Example tab-like structure for multiple team members */}
                <div className="theteam-tabs">
                    <button className="tab-btn active">@neonalchemy.eth // @thealchemist</button>
                    <button className="tab-btn">@steve.eth</button>
                </div>

                {/* Active tab content */}
                <div className="theteam-tabcontent active">
                    <p className="theteam-description">
                        Our technical lead is also the creator of Neon Alchemy, a utility token,
                        and is the CTO and Co-Founder of Aspyr Technology, a network of Blockchain
                        PaaS solutions facilitated by the industry-first Aspyr Token. You can find
                        Scott hanging out in our Discord server, or feel welcome to DM directly.
                    </p>

                    <div className="progress-container">
                        <div className="progress-header">
                            <h4>SEMPI Platform Dev:</h4>
                            <span className="progress-percentage">70%</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: '70%' }} />
                        </div>
                    </div>

                    <p className="theteam-trusted">
                        We are trusted by 50,000+ team members in over 170 countries
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TheTeam;