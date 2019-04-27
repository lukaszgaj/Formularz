import styled from "styled-components";

interface Props {
    isValid: boolean,
    optional?: boolean,
}

export const TextInputCell = styled.input`
  background: ${(p: Props) => p.isValid || p.optional ? 'white' : 'lightcoral'};
`;