import React from 'react'
import Menu from '../Menu'
import Footer from '../Footer'
import styled from 'styled-components'

const Main = styled.main`
    background-color: var(--white)
    color: var(--black)
    flex: 1;
    padding: 50px 5% 5%;
`

function PageDefault({children}){
    return(
        <>
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    )
}

export default PageDefault