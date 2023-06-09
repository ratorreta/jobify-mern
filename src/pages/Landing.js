import React from 'react'
import logo from "../assets/images/logo.svg"
import main from "../assets/images/main.svg"
import styled from "styled-components"

function Landing() {
  return <Wrapper>
    <nav>
        <img src={logo} alt="jobify" className='logo' />
    </nav>
     <div className="container page">
        {/* info column */}
        <div className="info">
            <h1>job <span>tracking</span> app</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className='btn btn-hero'>Login/Register</button>
        </div>

        {/* image column */}
        <img src={main} alt="job hunt" className='img main-img' />

     </div>
     


    </Wrapper>
}

const Wrapper = styled.main`
nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-heigth);
    display: flex;
    align-items: center;
}
.page {
    min-height: calc(100vh - var(--nav-heigth));
    display: grid;
    align-items: center;
    margin-top: -3rem;
}
h1 {
    font-weight: 700;
    span{
        color: var(--primary-500);
    }
}
p {
    color: var(--grey-600);
}
.main-img {
    display: none;
}
@media (min-width:992px) {
    .page {
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem;
    }
    .main-img {
        display: block;
    }
}
`


export default Landing