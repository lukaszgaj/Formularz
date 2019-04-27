import * as React from 'react';
import {FormState} from "./FormState";
import {FormProps} from "./FormProps";
import {FormComponent} from "../../UI/Components/FormComponent";
import {rowsContainer} from "../../Data/rowsContainer";
import {FormRow} from "../FormRow/FormRow";
import {ReactElement} from "react";
import {ButtonsWrapper} from "../../UI/Util/ButtonsWrapper";
import {SubmitButton} from "../../UI/Buttons/SubmitButton";
import {Wrapper} from "../../UI/Util/Wrapper";

export class Form extends React.Component<FormProps, FormState> {

    constructor(props: FormProps) {
        super(props);
        this.state = {
            isSubmitDisabled: true,
            statusOfInputs: [],
        }
    }

    fieldsCount = rowsContainer.filter(row => {
        return row.regex;
    }).length;

    private renderRaws = (): ReactElement[] => {
        const elements: ReactElement[] = [];
        rowsContainer.forEach(row => {
            elements.push(
                <FormRow row={row} key={row.name} handler={this.pushStatusOfInputToState}/>
            )
        });
        return elements;
    };

    private pushStatusOfInputToState = (rowName: string, isValid: boolean): void => {
        const index = this.state.statusOfInputs.findIndex( element => {
            return element.name === rowName;
        });
        if (index === -1) {
            const expectedStatus = this.state.statusOfInputs;
            expectedStatus.push({name: rowName, isValid});
            this.setState({
                statusOfInputs: expectedStatus,
            })
        } else {
            const copy = this.state.statusOfInputs;
            copy[index].isValid = isValid;
            this.setState({
                statusOfInputs: copy,
            })
        }
        this.checkIfUserCanSubmit();
    };

    private checkIfUserCanSubmit = () => {
        const {statusOfInputs} = this.state;
        if (statusOfInputs.length < this.fieldsCount - 1) {
            return;
        }

        const validElementsCount = statusOfInputs.filter(input => {
            return input.isValid === true;
        }).length;

        if (validElementsCount !== this.fieldsCount) {
            this.setState({
                isSubmitDisabled: true,
            })
        } else {
            this.setState({
                isSubmitDisabled: false,
            })
        }
    };

    render() {
        return (
            <>
                <Wrapper>
                    <FormComponent>
                        {this.renderRaws()}
                    </FormComponent>
                </Wrapper>
                <ButtonsWrapper>
                    <SubmitButton disabled={this.state.isSubmitDisabled}>Submit</SubmitButton>
                </ButtonsWrapper>
            </>
        );
    };
}