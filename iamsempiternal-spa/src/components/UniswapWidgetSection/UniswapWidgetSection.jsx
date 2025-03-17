import React from 'react';
import './UniswapWidgetSection.css';

const UniswapWidgetSection= () => {
    return (
        <section className="uniswap-swap-section">
            <h2 className="uniswap-swap-heading">Swap Your Tokens</h2>
            <div className="uniswap-swap-container">
                <iframe
                    src="https://app.uniswap.org/#/swap"
                    title="Uniswap Swap Interface"
                    className="uniswap-swap-iframe"
                    allow="clipboard-write"
                />
            </div>
        </section>
    );
};

export default UniswapWidgetSection