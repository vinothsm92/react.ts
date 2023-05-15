import { MUIDataTableColumnDef } from "mui-datatables";

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

export interface IModalProps {
    isOpenModal: boolean;
    handleClick: () => void;
    columns: MUIDataTableColumnDef[];
    title: string;
}