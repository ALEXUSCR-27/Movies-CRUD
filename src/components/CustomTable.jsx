import React from "react";
import '../styles/CustomTable.css';

export const CustomTable = ({data}) => {
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }
    const rows_header = Object.keys(data[0])

    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        {rows_header.map((header_name) => (
                            <th key={header_name}>
                                {header_name.charAt(0).toUpperCase() + header_name.slice(1)}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {rows_header.map ((header) => (
                                <td key={header}>
                                    {row[header]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}