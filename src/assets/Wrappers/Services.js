import styled from "styled-components";

const Wrapper = styled.section`
  #services {
    width: 80vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    height: 70vh;
  }

  .service-title {
    text-align: center;
    margin-bottom: 4rem;
  }

  .services {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .service {
    padding: 2rem;

    text-align: center;
  }

  .service i {
    font-size: 4rem;
  }

  .service h2 {
    font-family: "anta";
  }

  .service p {
    line-height: 2;
  }
`;

export default Wrapper;
