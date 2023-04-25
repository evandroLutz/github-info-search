import styled from "styled-components";

const UserPicContainer = styled.div`
    width: 250px;
    height: 250px;
    margin-right: 10px;
    background-color: #52307c;
    overflow: hidden;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 30%;
    @media (max-width: 1570px){
        width: unset;
        height: unset;
    }

    img {
        width: 90%;
        object-fit: cover;
        @media (max-width: 1570px){
            width: 150px;
            height: 150px;
        }
    }
`;

export default UserPicContainer;
