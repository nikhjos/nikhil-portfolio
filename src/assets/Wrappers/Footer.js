import styled from "styled-components";

const Wrapper = styled.section`
  #footer {
    background-color: black;
  }

  .footer {
    width: 80vw;
    margin: 0 auto;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .footer-links a {
    color: white;
  }
`;

export default Wrapper;
