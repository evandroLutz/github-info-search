import styled from "styled-components";

const DropDown = styled.select`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap');
    font-family: Roboto, sans-serif;
    color: rgb(255, 255, 255);
    width: 200px;
    height: 50px;
    outline: none;
    color: rgb(124, 82, 149);
    padding: 10px;
    gap: 10px;
    display: flex;
    align-items: center;
    option:hover {
        background-color: #bca0dc;
    }
`;

export default DropDown;
