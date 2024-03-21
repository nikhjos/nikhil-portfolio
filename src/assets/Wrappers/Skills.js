import styled from "styled-components";

const Wrapper = styled.section`
  #mySkills {
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin: 0 auto;
    height: 70vh;

    justify-content: baseline;
  }

  .skills {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 2rem;
    column-gap: 2rem;
  }

  .skillTitle {
    text-align: center;
    margin-bottom: 3rem;
  }

  .skill {
    padding: 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
  }

  .skill i {
    font-size: 2rem;
  }

  .skill p {
    font-size: 2rem;
    font-family: "anta", sans-serif;
  }
`;

export default Wrapper;
