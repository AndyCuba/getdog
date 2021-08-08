import styled, { keyframes } from 'styled-components';
import video from '../../images/video.jpg';
import frame from '../../images/homeFrame.jpg';

const translateIn = keyframes`
    from {
        display: none;
        transform: translate( 100%, 0);
    }
    to {
        display: block;
        transform: translate( 0%, 0);
    }
`;

const HomeWrapper = styled.div`
    position: relative;
    background: url(${video}) center/cover;
    width: 1280px;
    height: 720px;
`;

const HomeFrame = styled.div`
    background: url(${frame}) center/cover;
    position: fixed;
    right: 0;
    top: 220px;
    width: 251px;
    height: 357px;
    animation: 1s ${translateIn} linear;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

const HomeButton = styled.button`
    width: 156px;
    height: 52px;
    margin-bottom: 10px;
    background-color: #86D3F4;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    border: 1px solid #4E4E4E;
    text-transform: uppercase;
    &:hover {
        background-color: black;
        color: #86D3F4;
    }
    &:active {
        transform: scale(0.95);
    }
`;


export { HomeWrapper, HomeFrame, HomeButton };