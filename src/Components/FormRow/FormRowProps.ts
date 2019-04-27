import {RowModel} from "../../Models/rowModel";

export interface FormRowProps {
    row: RowModel,
    handler: (rowName: string, isValid: boolean) => void,
}