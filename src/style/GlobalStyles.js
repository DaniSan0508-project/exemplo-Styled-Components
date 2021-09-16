import styled,{ createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        font-size: 16px;
        margin: 0;
        padding: 0;
    }

`;

export const Container = styled.div`
    width: 900px;
    margin: 0 auto;
    background-color: red;
`;