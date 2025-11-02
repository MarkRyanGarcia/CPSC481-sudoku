// import tailwindcss from "@tailwindcss/vite";
import { useState } from "react";

type Cell = {
    value: number | null;
    isFixed: boolean;
};

// Initialize grid with proper Cell objects
const emptyGrid: Cell[][] = Array.from({ length: 9 }, () =>
    Array.from({ length: 9 }, () => ({ value: null, isFixed: false }))
);

export default function Grid() {
    const [grid, setGrid] = useState(emptyGrid);

    const handleChange = (row: number, col: number, value: string) => {
        const num = value === "" ? null : Number(value);
        if (num === null || (num >= 1 && num <= 9)) {
            setGrid(prev => {
                const newGrid = prev.map(r => r.map(c => ({ ...c })));
                newGrid[row][col].value = num;
                return newGrid;
            });
        }
    };

    return (
        <div className="grid grid-cols-9 gap-1">
            {grid.map((row, rIdx) =>
                row.map((cell, cIdx) => (
                    <input
                        key={`${rIdx}-${cIdx}`}
                        type="text"
                        value={cell.value ?? ""}
                        onChange={e => handleChange(rIdx, cIdx, e.target.value)}
                        className={`w-10 h-10 text-center border ${cell.isFixed ? "bg-gray-200" : "bg-white"
                            }`}
                        maxLength={1}
                        disabled={cell.isFixed}
                    />
                ))
            )}
        </div>
    );
}