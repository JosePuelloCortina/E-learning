import styled from 'styled-components';
import { Link } from 'react-router-dom';






export const Contenedor = styled.div`

display:flex;
justify-content: center;
align-items:center;
width: 100%;
height: 100%;
background-color: black;
min-height: 100vh;




`;


export const ImageFondo = styled.img`

 width: 100%;
height: 100%;
object-fit: cover; 
position: absolute; 



@media (max-width:750px) {
  

  object-fit: contain;

  
}

`;

export const LinktoHome = styled(Link)`

   z-index:1;
 
   left: 0px;
   bottom:0px;
  color:black;
  font-size: 4rem;
  text-decoration: none;
  padding: 10px 70px;
  border-radius: 75px 75px 75px 75px;
  background: linear-gradient(
    18deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #fff;
    background: linear-gradient(0deg, blue 0%, #0b0b0b 100%);
    box-shadow: 0px 0px 7px rgba(255, 255, 255, 0.2);
    transform: scale(1.03);
  }

  @media (max-width:750px) {
  
    font-size: 1rem;
   
 }
`;
