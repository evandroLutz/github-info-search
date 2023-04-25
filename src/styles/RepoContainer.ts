import styled from "styled-components";

const RepoContainer = styled.div`
    width: -webkit-fill-available;
    color: #f0f0f0;
    border-radius: 25px;
    /* padding: 16px; */
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    height: fit-content;
    margin: 30px;
    @media (max-width: 1570px){
        flex-wrap: nowrap;
        flex-direction: column;
    }
`;
   
export default RepoContainer;
    