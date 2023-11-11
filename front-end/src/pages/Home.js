import { Link } from "react-router-dom";
import styled from "styled-components";
import main from "../assets/main.svg";
import { Redirect } from "react-router-dom";
import { useGlobalContext } from "../context";
function Home() {
  const { user } = useGlobalContext();
  return (
    <>
      {user && <Redirect to="/dashboard" />}
      <Wrapper className="page">
        <div className="info">
          <h2>
            <span>Notes</span>
            Taking
          </h2>
          <p>
            Introducing our sleek and intuitive note-taking application,
            designed to seamlessly capture and organize your thoughts in the
            digital age. Elevate your productivity with user-friendly features
            that make jotting down ideas a breeze.
          </p>
          <p>
            Effortlessly create, edit, and categorize notes with a clean
            interface, ensuring that your information is always at your
            fingertips. Whether you're in a meeting, class, or simply inspired
            on the go, our app is your go-to companion for efficient
            note-taking. Stay organized, boost efficiency, and unlock the power
            of your ideas with our innovative note-taking solution.
          </p>

          <Link to="/login" className="btn">
            Login
          </Link>
          <Link to="/register" className="btn">
            Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  h2 {
    font-weight: 700;
  }
  h2 span {
    color: var(--primary-500);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 6rem;
    .main-img {
      display: block;
    }
  }
  .btn {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
`;

export default Home;
