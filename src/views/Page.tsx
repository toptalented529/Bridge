import React from "react";
import styled from "styled-components";
import { Flex,Text } from "dbx-swap-uikit";
import SubNav from "components/Menu/SubNav";
import Settings from "components/Settings";
import { AlignJustify } from "react-feather";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width:550px;
  padding: 200px 16px;
  min-height: calc(100vh - 64px);
  background-size: 150%;
  // background: black;
  // background: ${({ theme }) => (theme.isDark ? "#1e2c37" : "#E5E5E5")};
  background-color: #1e2c37;
  background-image: url("stableBg.svg");
  `;
const Div = styled.div`
  position: relative;
  max-width: 639px;  
  width: 100%;
  background-color: ${({ theme }) => (theme.isDark ? "transparent" :"transparent")};
  border: solid;
  border-width: thick;
  border-color:#31b5e1;
  border-radius: 32px;
  box-shadow: -1px -1px 10px 5px #31b5e1 !important;
  padding: 1rem;
  padding-top: 30px;

`;
const SDiv = styled.div`
display:flex;
align-items:center;
flex-direction:row;
width: 100%;
max-width:642px;
height: 102px;
flex-grow: 0;
margin: 18px 0 0;
padding: 2vw 2vw 2vw 2vw;
object-fit: contain;
border-radius: 32px;
-webkit-backdrop-filter: blur(24px);
backdrop-filter: blur(24px);
border: solid 0.5px #fff;
background-color: #312c47;
`;

const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return (
    <StyledPage {...props}>
       {/* <div style ={{display:"flex",flexDirection:"row"}}>
       <Text fontSize="35px" color="#fff">Make a Swap with &nbsp;</Text> <Text fontSize="35px" color="#d4307a">Parsec</Text>
       </div>
       <Text fontSize="16px" color="#d9d9d9" style ={{margin:"1vw 4vw 3vw 6vw"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text> */}
      <Div>
        <Settings>
          {/* <SubNav /> */}
          {children}
        </Settings>
      </Div>
      {/* <SDiv>  
        <img src="/diamond.png" alt="diamond" style ={{zIndex:"4",width:"105px",height:"107px",marginTop:"-30px"}} />
      <div style ={{display:"flex",flexDirection:"row", paddingLeft:"65px"}}>
       <Text fontSize="20px" color="#fff">Lorem ipsum lorem &nbsp;</Text> <Text fontSize="20px" color="#d4307a">Parsec</Text>
       </div>
      </SDiv> */}
      <Flex flexGrow={1} />
    </StyledPage>
  );
};

export default Page;
