import { useState, useEffect } from "react";
import "./Header.css";

const MIN_SEARCH_LENGTH = 5;

const Header = ({ onSearch }) => {

    const [text, setText] = useState("");

    useEffect(() => {
        if (text.length > MIN_SEARCH_LENGTH) {
            onSearch(text)
        }
    }, [text]);

    return <header>
        <span>🎵</span>
        <input
            type="text"
            placeholder="Search..."
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
    </header>;
}

export default Header;