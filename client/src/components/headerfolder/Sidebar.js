import React,{useState} from 'react';
import styled from 'styled-components';
import { androidMenu } from "react-icons-kit/ionicons/androidMenu";
import { Icon } from "react-icons-kit";
import COLORS from '../../constants';



function Sidebar() {
    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () =>  setSidebar(!sidebar); 
    return (
        <>
        <MySidebar>
            <MenuBars>
            <Icon icon={androidMenu} size={40} onClick={showSidebar} />
            </MenuBars>
        </MySidebar>
        <nav style={navStyles(sidebar)}>
            <NavMenuItems>
               
                <ExitSidebar onClick={showSidebar}>X</ExitSidebar>
               
                <NavItem>
                    First filter
                </NavItem>

                <NavItem>
                    Second filter
                </NavItem>

                <NavItem>
                    Third filter
                </NavItem>

                <NavItem>
                    Fourth filter
                </NavItem>

            </NavMenuItems>
        </nav>
        </>
    )
}

//   

const MySidebar = styled.div`
    background-color: ${COLORS.darkBlue};
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center; 
`;

const MenuBars = styled.div`
    margin-left: 2rem;
    font-size: 2rem;
    background-color: none;
`;

const ExitSidebar = styled.button`
    /* margin-left: 2rem; */
    font-size: 50px;
    background-color: none;
    border: 1px solid white;
    border-radius: 50%;
    padding: 10px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items:center;
`;

const navStyles = (isActive) =>{
    const [leftValue, milliSecs] = isActive ? ['-2%','850ms'] : ['-100%','350ms'];

return {
    marginTop: '0px',
    backgroundColor: `${COLORS.darkBlue}`,
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: `${leftValue}`,
    padding: '50px',
    marginLeft: '0px',
    transition: `${milliSecs}`,
    
    }

}


const NavMenuItems = styled.ul`
   
   list-style: none;
  

`;
// const NavbarToggle = styled.li`
//    background-color: black;
//     list-style: none;
//     display:flex;
//     justify-content:center;
//     align-items:center;
//     width: 100px;
//     height: 100px;
// `;

const NavItem = styled.li`
     padding: 32px 0px 32px 0px; 
`;

export default Sidebar
