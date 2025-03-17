import React, { useState, useEffect } from "react";
import "./HeroSection.css";

const HeroSection = () => {
    // For demonstration, set a target date/time for the countdown:
    const targetDateString = "2025-03-22T00:00:00Z"; // e.g., 22 March 2025, midnight UTC
    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        const targetDate = new Date(targetDateString).getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                // Time's up, clear and optionally handle an "expired" state
                setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((distance / (1000 * 60)) % 60);
            const seconds = Math.floor((distance / 1000) % 60);

            setTimeLeft({
                days: String(days).padStart(2, "0"),
                hours: String(hours).padStart(2, "0"),
                minutes: String(minutes).padStart(2, "0"),
                seconds: String(seconds).padStart(2, "0"),
            });
        };

        // Update immediately, then every second:
        updateCountdown();
        const timer = setInterval(updateCountdown, 1000);

        return () => clearInterval(timer);
    }, [targetDateString]);

    return (
        <section className="hero-section">
            <div className="hero-container">
                <h1 className="hero-heading">Sempiternal Token.</h1>
                <p className="hero-subheading">
                    The utility token built by music lovers, for music lovers.
                </p>

                <div className="countdown-wrapper">
                    <div className="countdown-item">
                        <span className="countdown-number">{timeLeft.days}</span>
                        <span className="countdown-label">days</span>
                    </div>
                    <div className="countdown-item">
                        <span className="countdown-number">{timeLeft.hours}</span>
                        <span className="countdown-label">hours</span>
                    </div>
                    <div className="countdown-item">
                        <span className="countdown-number">{timeLeft.minutes}</span>
                        <span className="countdown-label">minutes</span>
                    </div>
                    <div className="countdown-item">
                        <span className="countdown-number">{timeLeft.seconds}</span>
                        <span className="countdown-label">seconds</span>
                    </div>
                </div>

                <button className="hero-cta">Whitelist my Ethereum Address</button>
                <p className="hero-note">
                    All ICO participants gain lifetime access to our community.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;