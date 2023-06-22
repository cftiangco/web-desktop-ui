import { MdDelete,MdOutlineAddCircle,MdEditDocument } from "react-icons/md";
import TabCategory from "../../utils/TabCategory";
import Table from "../../utils/table";

const Inventory = () => {

    const headers = ['Product Name','Status','Supplier','UOM','Stock']
    const items = [
        {productName:'Towel X2 100',status:'In Stock',supplier:'Jorge Trading Corp',uom:'Box',stock:86},
        {productName:'Original Tissue Roll L200',status:'In Stock',supplier:'Quezon City Cottom and Wood Inc.',uom:'Piece',stock:11},
    ]

    const handleOnClickRow = (value:any) => {
        console.log(`row:`,value);
    }

    return (
        <div>
            
            <div className="border-b-2 h-10 w-full items-center hidden"></div>

            <div className="flex">
                <div className="h-screen w-48 border-r-2 flex items-start content-center justify-center">
                    <div className="w-full mt-10 flex flex-col gap-1 items-center text-start">
                        <TabCategory label="Products" />
                        <TabCategory label="Purchase Order" />
                        <TabCategory label="Suppliers" />
                        <TabCategory label="History" />
                    </div>
                </div>
                <div className="w-full">

                    <div className="h-8 w-full mx-1 flex items-center gap-2 border-b-2">
                        <div className="flex items-center justify-around p-1 m- 1 gap-2 w-48">
                            <MdDelete className="cursor-pointer hover:text-gray-500" />
                            <MdEditDocument className="cursor-pointer hover:text-gray-500"/>
                            <MdOutlineAddCircle className="cursor-pointer hover:text-gray-500"/>
                        </div>
                        <input type="text" placeholder="Search here" className="px-2 h-8 w-full outline-none border rounded"/>
                        <div className="me-2">
                            <button className="outline-none">Search</button>
                        </div>
                    </div>
            
                    <div className="w-full">
                        <Table 
                            headers={headers}
                            items={items}
                            onClickRow={handleOnClickRow}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Inventory;