import {editableCellModel} from "./editableCellModel";

export interface RowModel {
    name: string,
    type: editableCellModel,
    regex?: RegExp,
    optional?: boolean,
}