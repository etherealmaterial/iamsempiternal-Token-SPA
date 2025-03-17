import React from "react";
import "./CodeSnippetSection.css";

const CodeSnippetSection = () => {
    return (
        <section className="code-snippet-section">
            <div className="code-snippet-container">
                {/* Left column: Code snippet box */}
                <div className="code-snippet-box">
          <pre>
            <code>
{`contract Whitelist {
    mapping(address => bool) public whitelist;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function addToWhitelist(address _address) public onlyOwner {
        whitelist[_address] = true;
    }

    function removeFromWhitelist(address _address) public onlyOwner {
        whitelist[_address] = false;
    }

    function isWhitelisted(address _address) public view returns (bool) {
        return whitelist[_address];
    }
}
`}
            </code>
          </pre>
                </div>

                {/* Right column: Explanation text */}
                <div className="code-snippet-text">
                    <h2>
                        We built <span className="highlight">SEMPI</span> on exclusivity,
                        with artists themselves doing artist takeovers in community channels!
                    </h2>
                    <p>
                        In this example, the <code>Whitelist</code> contract allows the owner to add or remove
                        addresses from the whitelist. The <code>isWhitelisted</code> function can be used to
                        check if an address is whitelisted.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CodeSnippetSection;