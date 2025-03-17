import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                {/* Quick Links */}
                <div className="footer-column">
                    <h4>Quick links</h4>
                    <ul>
                        <li><a href="#etherscan">Etherscan Contract</a></li>
                        <li><a href="#whitepaper">Whitepaper</a></li>
                        <li><a href="#ico">ICO</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-column">
                    <h4>CONTACT</h4>
                    <p>@IAMSEMPITERNALIO</p>
                    <p>@iamsempiternal</p>
                    <p>hellofriend@iamsempiternal.io</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Copyright @thealchemist 2025</p>
            </div>
        </footer>
    );
};

export default Footer;