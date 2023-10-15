import { useEffect, useState } from "react";
import "../styles/Heading.css";

interface TitleProps {
    text : string;
    size ?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Header = ({ text, size = 1 }: TitleProps) => {
    const [displayedText, setDisplayedText] = useState('');
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        if (textIndex < text.length) {
            const timeoutInd = setTimeout(() => {
                setDisplayedText(text.substring(0, textIndex + 1));
                setTextIndex(textIndex + 1);
            }, 50);
            return () => clearTimeout(timeoutInd);
        }
    }, [text, textIndex]);

    const HeadingSize = `h${size}` as keyof JSX.IntrinsicElements;
    const caretFontSize = `${0.8 * size}rem`;

    return (
        <div className="heading-container">
            <HeadingSize className="heading-text">{displayedText}{textIndex < text.length ? <span className="blinking-caret" style={{ fontSize: caretFontSize }}>|</span> : null}</HeadingSize>
        </div>
    );
}

export default Header;