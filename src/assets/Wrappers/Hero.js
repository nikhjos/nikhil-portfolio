import styled from "styled-components";

const Wrapper = styled.section`
  .hero {
    width: 80vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80vh;
    font-family: "Anta", sans-serif;
    margin-top: 5rem;
  }

  .hero-intro {
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    justify-content: center;
  }

  .hero-intro h2 {
    font-size: 5rem;
    margin-bottom: 2rem;
  }

  .hero-intro span {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .hero-intro p {
    font-size: 1.2rem;
    line-height: 1.2;
    margin-bottom: 4rem;
  }

  .hero-image {
    display: flex;
    place-items: center;
    width: 45%;
  }
  .hero-image img {
    width: 100%;
    margin-right: 0;
  }
`;

export default Wrapper;
