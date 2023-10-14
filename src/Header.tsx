import { useEffect, useState } from "react";

interface TitleProps {
    text: string;
    size: number;
}

const Header = ({ text, size }: TitleProps) => {
    const [displayedText, setDisplayedText] = useState('');
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        if (textIndex < text.length) {
            const timeoutInd = setTimeout(() => {
                setDisplayedText(text.substring(0, textIndex + 1));
                setTextIndex(textIndex + 1);
            }, 100);
            return () => clearTimeout(timeoutInd);
        }
    }, [text, textIndex]);

    const HeadingSize = `h${size}` as keyof JSX.IntrinsicElements;

    return (
        <HeadingSize>{displayedText}</HeadingSize>
    );
}

export default Header;