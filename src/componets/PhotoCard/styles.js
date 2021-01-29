import styled from 'styled-components'
import { fadeIn } from '../styles/animations'

export const ImgWrapper = styled.div`
    margin-top: 5px;
    border-radius: 1px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
`

export const Image = styled.img`
    ${fadeIn({ time: '1s' })}
    box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    padding-top: 4px;
    & svg {
        margin-right: 4px
    }
`
