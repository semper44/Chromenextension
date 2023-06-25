/* eslint-disable no-unused-vars */
import styled from 'styled-components'


export const ScrollBar = styled.div`

&::-webkit-scrollbar {
  //  scrollbar-color: #d4aa70 #e4e4e4;

  width: 5px;

}

 &::-webkit-scrollbar-track {
  border-radius: 100px;
  background-color: transparent; 
 }

&::-webkit-scrollbar-thumb {
  background-color: transparent; 
  border-radius: 100px;
}


`;