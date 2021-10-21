import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    width: 100%;
    padding: 3.125rem 5rem;
    justify-content: center;
`
export const LoginArea = styled.div`
    display: flex;
    width: 73%;
    height: 615px;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 3px 8px -1px #000000;
    .left_login {
        align-items: center;
        background-color:#C2E1F6;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 615px;
        border-radius: 10px;
        padding: 0 20px;
        svg {
            margin-bottom: 20px;
        }
        p {
        font-weight: 700;
        margin-bottom: 20px
    }
        .p_create {
            margin-bottom: 65px;
        }
}
    .right_login {
        width: 50%;
        height: 615px;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
        padding: 0 20px;
    .div_icons {
        display: flex;
        justify-content: center;
            svg {
                width: 63px;
                margin: 0 10px;
            }
    }
    h1 {
        font-size: 28px;
    }
}
`
export const DivForm = styled.div`
    width: 100%;

`
export const DarkBlueButton = styled.button`
    background-color: #15374E;
    color: #ffffff;
    padding: 8px 30px;
    border-radius: 20px;

`
export const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
`
export const HorizontalLine = styled.div`
    width: 5rem;
    border-bottom: 2px black solid;
    opacity: 0.25;
`
export const DivLine = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const DivInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: initial;
    margin-bottom: 15px;

    span {
        font-weight: bold;
    }
`
export const InputForm = styled.input`
    width: 100%;
    padding: 9px 10px;
    background-color: #C2E1F6;
    border-radius: 10px;
`