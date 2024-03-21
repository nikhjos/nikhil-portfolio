import styled from "styled-components";

const Wrapper = styled.section`
  .about {
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 30% 60%;
    column-gap: 10%;
    margin-bottom: 5rem;
  }

  .about-title {
    grid-column: 1 / span 2;
    text-align: center;
    margin-bottom: 3rem;
  }

  .aboutImg img {
    width: 20rem;
    object-position: bottom;
    border-radius: 50%;
    height: 25rem;
    border: 4px solid white;
  }

  .aboutInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
  }

  .aboutInfo p {
    font-size: 1.3rem;
    line-height: 2;
    align-self: center;
    font-family: "Raleway", sans-serif;
  }
`;

export default Wrapper;
