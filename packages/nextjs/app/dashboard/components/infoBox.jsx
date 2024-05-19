import React from "react";

export function InfoBox({ cardTitle, displayNumber, icon }) {
    return (
        <div className="bg-base-100 rounded-md shadow-md">
            <div className="flex flex-row gap-4">
                <div className="w-1/2"><span className="font-medium text-sm self-start">{cardTitle}</span></div>
                <div className="w-1/2 place-content-end">{icon && React.createElement(icon, { className: "h-5 w-5" })}</div>
            </div>
            <h1 className="px-4 py-2 font-bold text-lg">{displayNumber}</h1>
        </div>
    );
}