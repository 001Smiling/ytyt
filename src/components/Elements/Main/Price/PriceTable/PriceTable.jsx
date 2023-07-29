import React from 'react';
import DataPriceTable from "./DataPriceTable"
import { datatable } from '../../../Data/tableprice';
import groupBy from "lodash/groupBy";
import sumBy from "lodash/sumBy";

export default function PriceTable() {
    const tablecontext = datatable.map((point, id2) => (
        <DataPriceTable block={point.block} free={point.free} price={point.price} time={point.time} key={id2} />
    ))
    let name1 = groupBy(datatable, "name1");
    let name2 = groupBy(datatable, "name2");
    return (<>
        <thead>
            <tr className="mainprice-table__header mainprice-table__header-footer">
                <th className="mainprice-table__data" >Блок</th>
                {Object.keys(name1).map((key) => (
                    <th key={key} className="mainprice-table__data">{key}</th>
                ))}
                {Object.keys(name2).map((key) => (
                    <th key={key} className="mainprice-table__data">{key}</th>
                ))}
            </tr>
        </thead>
        <tbody className="mainprice-table__body">
            {tablecontext}
        </tbody>
        <tfoot>
            <tr className="mainprice-table__footer mainprice-table__header-footer">
                <th className="mainprice-table__data mainprice-res" >Итого</th>
                {Object.entries(name1).map(([key, values]) => (
                    <th key={key} className="mainprice-table__data mainprice-res">
                        {sumBy(values, "price")}
                    </th>
                ))}
                {Object.entries(name2).map(([key, values]) => (
                    <th key={key} className="mainprice-table__data mainprice-res">
                        {sumBy(values, "time")}
                    </th>
                ))}
            </tr>
        </tfoot>
    </>
    )
}