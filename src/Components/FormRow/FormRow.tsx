import * as React from 'react';
import {ReactElement} from 'react';
import {FormRowProps} from "./FormRowProps";
import {FormRowState} from "./FormRowState";
import {FormRowComponent} from "../../UI/Components/FormRowComponent";
import {RowModel} from "../../Models/rowModel";
import {editableCellModel} from "../../Models/editableCellModel";
import {TextInputCell} from "../../UI/Cells/TextInputCell";
import {CheckboxCell} from "../../UI/Cells/ChekboxCell";
import {SelectCell} from "../../UI/Cells/SelectCell";
import {Cell} from "../../UI/Cells/Cell";

export class FormRow extends React.Component<FormRowProps, FormRowState> {

    constructor(props: FormRowProps) {
        super(props);
        this.state = {
            isValid: false,
        }
    }

    private renderRow = (row: RowModel): ReactElement => {
        return (
            <>
                <Cell>{row.name}</Cell>
                {this.renderEditableCell(row.type)}
            </>
        )
    };

    private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {regex, optional, name} = this.props.row;
        if (regex && !optional) {
            if (name === 'Numer mieszkania' && e.currentTarget.value === '') {
                this.setState({
                    isValid: true,
                }, () => {
                    // IMPORTANT TIP -> HANDLER HERE IS CALLED AS SETSTATE CALLBACK, DUE TO THE FACT
                    // THAT SETSTATE IS ASYNC
                    this.props.handler(name, this.state.isValid);
                });
            } else {
                this.setState({
                    isValid: regex.test(e.currentTarget.value),
                }, () => {
                    this.props.handler(name, this.state.isValid);
                });
            }
        }
    };

    private renderEditableCell = (cellType: editableCellModel): ReactElement => {
        if (cellType === 'text-input') {
            return (
                <Cell>
                    <TextInputCell
                        isValid={this.state.isValid}
                        optional={this.props.row.optional}
                        onChange={this.handleChange}
                        maxLength={50}/>
                </Cell>
            )
        } else if (cellType === 'checkbox') {
            return (
                <Cell>
                    <CheckboxCell type='checkbox'/>
                </Cell>
            )
        }
        return (
            <Cell>
                <SelectCell>
                    <option>Kobieta</option>
                    <option>Mężczyzna</option>
                </SelectCell>
            </Cell>
        )
    };

    componentDidMount(): void {
        if (this.props.row.name === 'Numer mieszkania') {
            this.setState({
                isValid: true,
            }, () => {
                this.props.handler(this.props.row.name, this.state.isValid);
            })
        } else {
            this.props.handler(this.props.row.name, this.state.isValid);
        }
    }

    render() {
        return (
            <FormRowComponent>
                {this.renderRow(this.props.row)}
            </FormRowComponent>
        );
    };
}