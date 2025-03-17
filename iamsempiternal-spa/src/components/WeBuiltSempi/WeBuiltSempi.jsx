import React from "react";
import "./CodeSnippetSection.css";

// For demo, we'll store the code snippet as a multiline string.
// You could also import it from a separate file or fetch it, etc.
const codeSnippet = `contract Whitelist {
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
}`;

const CodeSnippetSection = () => {
    return (
        <section className="code-section">
            <div className="code-section__container">
                {/* Left side: code block */}
                <div className="code-section__block">
                    <pre>{codeSnippet}</pre>
                </div>

                {/* Right side: heading + text */}
                <div className="code-section__text">
                    <h2>
                        We built SEMPI on exclusivity,
                        <br />
                        with artists themselves doing artist takeovers
                        <br />
                        in community channels!
                    </h2>
                    <p>
                        In this example, the <strong>Whitelist</strong> contract allows the owner
                        to add or remove addresses from the whitelist. The{" "}
                        <code>isWhitelisted</code> function can be used to check if an
                        address is whitelisted.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CodeSnippetSection;