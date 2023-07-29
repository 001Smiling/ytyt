import React from 'react';

function DataPriceTable(data) {

    return (<>
        <tr className="mainprice-table__row">
            <td className="mainprice-table__rowblok">{data.block}</td>
            <td className="mainprice-table__rowblok">{data.price} {data.free}</td>
            <td className="mainprice-table__rowblok">{data.time}</td>
        </tr>
    </>
    );
}

export default DataPriceTable;