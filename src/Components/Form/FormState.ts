export interface FormState {
    isSubmitDisabled: boolean,
    statusOfInputs: {name: string, isValid: boolean}[],
}
