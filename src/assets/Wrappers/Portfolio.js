import styled from "styled-components";

const Wrapper = styled.section`
  #portfolios {
    width: 80vw;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 80vh;
  }

  .title {
    text-align: center;
    margin-bottom: 4rem;
  }

  .projects {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }

  .singleProject {
    position: relative;
  }

  img {
    width: 400px;
    height: 300px;
  }

  .btn-container {
    position: absolute;
    bottom: 0rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 1rem;
    background: black;
    padding: 0.5rem 1rem 0rem 1rem;
  }

  .btn-container a {
    font-size: 2rem;
    color: white;
  }
`;

export default Wrapper;
