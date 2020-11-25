import React, {useState} from 'react';
import styled from 'styled-components';
import COLORS from '../../constants';

function Pagination({paginate, currentPage, barBottom, barPosition, setBarPosition}) {
    

    const itemsPerPage = 10;
    const pageNumbers = [];


    for (let i = 1; i <= itemsPerPage; i++) {
        pageNumbers.push(i);
      }


    

    return (
        <Containter>
        <Wrapper>
        { !barBottom && <Bar barPosition={barPosition}/>}
            <Ul>
            
           {pageNumbers.map( number => {
               return (
                <Li className={currentPage === number ? 'current' : ''}
                    onMouseOver={() => setBarPosition((number * 10) - 10)}
                    onMouseOut={() => setBarPosition((currentPage * 10) - 10)}
                    onClick={() => paginate(number)}>
                    {number}
                   
                </Li>
               )
           })}
           </Ul>
           
           { barBottom && <Bar barPosition={barPosition}/>}
        </Wrapper>
        </Containter>
    )
}

export default Pagination

const Containter = styled.div`
    display: flex;
    justify-content: center;
`;

const Wrapper = styled.div`
	width: 50vw;
	height: 80px;
	line-height: 80px;
	background-color: white;
    
    
`;

const Ul = styled.ul`
    	display: flex;
		padding: 0;
		margin: 0;
		box-shadow: 0 10px 20px 0 rgba(black, 0.25);
`;

const Bar = styled.div`
    width: 10%;
    background-color:${COLORS.yellowgreen};
    height: 5px;
    position: relative;
    left: ${props => props.barPosition}%;
    bottom: 0;
   
    transition: 0.5s ease;
`;

const Li = styled.li`
    flex: 1;
    list-style: none;
    text-align: center;
    position: relative;
    font-size: 20px;
    font-weight: bold;
    transition: 0.5s ease;
    cursor: pointer;
    user-select: none;
    &.current {
		/* background-color:#86c023; */
		color: ${COLORS.yellowgreen};
	}
    
`;



