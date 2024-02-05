import React from "react";

interface ChildProps {
    color: string;
    onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
    return <div>
        {color}
        <button onClick={onClick}>Click Me Child</button>
        </div>;
};


export const ChildFC: React.FC<ChildProps> = ({ color, onClick }) => {
    return <div>{color}
    <button onClick={onClick}>Click Me ChildFC</button>
    </div>;
};
