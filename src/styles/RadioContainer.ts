import styled from "styled-components";

const RadioContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap');
    font-family: Roboto, sans-serif;
    label {
        color: rgb(255, 255, 255);
        position: relative;
        display: flex;
        width: 200px;
        padding: 3px 0px 0 60px;
        margin: 10px 0 20px 0;
        color: #ffffff;
    }

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
        border-radius: 25px;
    }

    :hover input ~ .checkmark {
        background-color: #bca0dc;
    }

    input:checked ~ .checkmark {
        background-color: #bca0dc;
    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    input:checked ~ .checkmark:after {
        display: block;
    }

    .checkmark:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;

export default RadioContainer;