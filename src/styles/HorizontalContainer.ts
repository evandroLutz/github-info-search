import styled from "styled-components";

const HorizontalContainer = styled.div`
    background-color: #3c1361;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin: 30px;
    border-radius: 25px;
    box-shadow: #52307c 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    padding: 30px;
    height: fit-content;
    @media (max-width: 1570px){
        margin: 0;
        border-radius: 0;
        margin: 30px 0;
        gap: 10px;
    }
`;

export default HorizontalContainer;