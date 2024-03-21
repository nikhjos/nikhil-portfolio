import styled from "styled-components";

const Wrapper = styled.section`
  #contact {
    width: 80vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .contact-title {
    text-align: center;
    margin-bottom: 4rem;
  }

  .contact {
    display: flex;
    justify-content: space-between;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex-basis: 50%;
    align-items: start;
    padding: 4rem 0rem;
  }

  .info {
    width: 80%;
  }

  .info i {
    font-size: 2rem;
    text-align: center;
  }

  .info h2 {
    font-weight: 900;
  }

  .info p {
    line-height: 2;
    font-size: 1.2rem;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: end;
    padding: 4rem 0rem;
  }

  .sub-heading {
    text-align: center;
    width: 80%;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100%;
    width: 80%;
  }

  form div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    width: 100%;
  }

  form div label {
    font-size: 1.5rem;
  }

  form div input {
    font-size: 2rem;
  }

  form div textarea {
    height: 5rem;
  }
`;

export default Wrapper;
