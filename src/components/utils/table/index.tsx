

interface ITable {
    headers:any;
    items:any;
    onClickRow?:any;
}

const Table = ({headers,items,onClickRow}:ITable) => {
    return (
        <table className="w-full text-sm">
            <thead>
                <tr>
                    {headers.map((header:string,idx:number) => (
                        <th key={idx} className="text-start text-gray-600">{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {items.map((obj:any,idx:number) => (
                    <tr onClick={() => onClickRow(obj)} key={idx} className="border-b-2 hover:bg-gray-200 cursor-pointer">
                        <td>{obj.productName}</td>
                        <td className="text-green-600 font-semibold">{obj.status}</td>
                        <td>{obj.supplier}</td>
                        <td>{obj.uom}</td>
                        <td>{obj.stock}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;