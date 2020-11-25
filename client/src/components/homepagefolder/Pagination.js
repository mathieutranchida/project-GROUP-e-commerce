import React from 'react';
import styled from 'styled-components';

function Pagination({ paginate, currentPage }) {
   const itemsPerPage = 10;
    const pageNumbers = [];

    for (let i = 1; i <= itemsPerPage; i++) {
        pageNumbers.push(i);
      }

    return (
        <Wrapper>
            <Layout>
            {pageNumbers.map(number =>{
                return (
                    <PageNumber 
                        onClick={() => paginate(number)} 
                        key={number}
                        className={currentPage === number ? 'current' : ''}
                        >
                            {number}
                        </PageNumber>)
            })}

            </Layout>
        </Wrapper>
    )
}

export default Pagination

const Wrapper = styled.div`
  text-align: center;
  margin: 0px;
  
`;

const Layout = styled.div`
    display: inline-block;
	height: 40px;
	//margin-top: 70px;
	padding: 0 5px;
	border-radius: 35px;
	background-color: #eee;
`;

const PageNumber = styled.a`
    display: block;
	padding: 0 15px;
	float: left;
	transition: 400ms ease;
	color: #595959;
	font-size: 20px;
	letter-spacing: 0.1em;
	line-height: 40px;

    text-decoration: none;

    &:hover,
	&.current {
		background-color:#86c023;
		color: #fff;
	}

`;


