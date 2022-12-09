import { createGlobalStyle } from "styled-components";
import StarJediV1woff from './StarJediV1.woff'
import StarJediV1woff2 from './StarJediV1.woff2'

export default createGlobalStyle`
    @font-face {
        font-family: 'StarWars';
        src: local('StarWars'), local('StarWars'),
        url(${StarJediV1woff2}) format('woff2'),
        url(${StarJediV1woff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`