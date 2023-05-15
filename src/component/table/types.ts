import { MUIDataTableColumnDef } from "mui-datatables";

export interface ITableProps { 
    columns: MUIDataTableColumnDef[], 
    data: any,
    title: string
}