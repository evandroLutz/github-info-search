import styled from "styled-components";

const Repo = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap');
    font-family: Roboto, sans-serif;
    background: rgb(60, 19, 97);
    color: rgb(255, 255, 255);
    padding: 16px;
    border-radius: 25px;
    height: 80px;
    box-shadow: grey 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    a, div{
        text-decoration: none;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        cursor: pointer;
    }
    svg, span{
        color: #7c5295 !important;
    }
`;
   
export default Repo;
    