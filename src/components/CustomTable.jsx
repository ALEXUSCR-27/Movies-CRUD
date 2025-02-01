import React from "react";
import '../styles/CustomTable.css';
import { delete_registry } from "../services/crud_services";

export const CustomTable = ({data, edit}) => {
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }
    const rows_header = Object.keys(data[0])

    const handleRowDelete = async (row) => {
        console.log(row)
        const movieID = {
            peliculaID:row
        }
        const request_reponse = await delete_registry(movieID);
        if (request_reponse.status === 200) {
            alert("LA PELICULA CON EL ID "+row+" FUE ELIMINADA DE FORMA EXITOSA!!");
            
        }
    }

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
                        <th>
                            Options
                        </th>
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
                            <td>
                                <button onClick={() => edit(row)}>Edit</button>
                                <button onClick={() => handleRowDelete(row["peliculaID"])}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}