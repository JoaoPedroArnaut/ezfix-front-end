import styled from "styled-components";


export const Section = styled.section`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    padding: 3.125rem 5rem;
`


export const WhiteArea = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 5.31rem;
    padding: 5px 10px;
    border-radius: 10px;
    width: 100%;
    margin-top: 2.5rem;
    box-shadow: 0px 6px 13px -8px #000000;

    h2 {
        font-weight: bold;
    }
    h3 {
        font-size: 0.875rem;
        margin-top: 5px;
        font-weight: 600;
    }
    p {
        font-size: 0.813rem;
        margin-top: 5px;
    }
`
export const DivAddNew = styled.div `
    display: flex;
    flex-direction: column;
    height: 5.31rem;
    width: 100%;
    align-items: center;
    margin-top: 2.5rem;

    p {
        font-weight: 600;
    }
`
export const VerticalLine = styled.div `
    height: 18.75rem;
    border-right: 2px solid #000000;
    align-self: center;
    opacity: 0.25;
`
