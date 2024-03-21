import styled from "styled-components";

const Wrapper = styled.section`
  .navbar-bg {
    background-color: black;
    width: 100vw;
    height: 5rem;
    position: fixed;
    top: 0;
    z-index: 20;
  }
  .navbar-center {
    width: 80vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    margin: 0 auto;
  }

  .logo {
    border-radius: 50%;
    border: 2px solid white;
    padding: 0.6rem;
    cursor: pointer;
    color: white;
    display: grid;
    place-items: center;
    transition: transform 0.3s ease-in-out;
  }

  /* work below effect */

  .logo:hover {
    transform: scale(1.02);
  }

  .logo h2 {
    font-weight: 900;
    font-style: oblique;
    font-family: "Anta", sans-serif;
  }

  .navlinks {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2.5rem;
  }

  .navlinks a {
    color: white;
    font-size: 1.2rem;
    font-family: "Anta", sans-serif;
    transition: border 0.2s ease-in-out;
    position: relative;
  }

  .navlinks a::before {
    content: "";
    position: absolute;
    height: 5px;
    border-radius: 50%;
    background-color: white;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
  }

  .navlinks a:hover::before {
    width: 5px;
  }

  .theme {
    display: grid;
    place-items: center;
  }

  .theme button {
    font-size: 1.4rem;
    padding: 0.3rem;
    cursor: pointer;
    background: transparent;
    border: 0;
    outline: 0;
    color: white;
  }
`;

export default Wrapper;
