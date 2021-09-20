import React from "react";
import { DataGrid } from "@material-ui/data-grid";

interface IProps {
    id: number,
    name: string,
}

const columns = [
    {
        field:"name",
        headerName: "Name",
        width: 200
    }
]


export const Table: React.FC<IProps>= ({id, name}) => {
    const rows = [
        {
            id,
            name,

        }
    ]
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
};
