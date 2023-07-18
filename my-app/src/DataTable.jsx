import React from "react";
import { DataItem } from "./DataItem";
import './dataTable.css';

export const DataTable =  ({result}) => { 
  return (
    <div className="dataTable">
      {result.map(data => (
        <DataItem key={data.id} dataItem={data}/>
      ))}
    </div>
  );
};
