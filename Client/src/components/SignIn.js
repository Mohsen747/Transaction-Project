import React, { useState } from 'react';
import styled from 'styled-components';
import googleLogo from '../Imgs/google_logo.png'; // Adjust the path as needed


const SignIn = () => {
  // State to manage form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add your authentication logic
    // If authentication is successful, you can redirect the user to another page
  };

  return (
    <Wrapper>
      <InnerWrap>
        <SignInContainer>
          <h2>Sign In To</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <label>Email:</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>Password:</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <ButtonContainer>
                <SignInButton type="submit">Sign In</SignInButton>
                <GoogleButton>
                  <GoogleLogo src={googleLogo} alt="Google Logo" />
                  Sign In with Google
                </GoogleButton>
              </ButtonContainer>
              <CreateAccountLink>
                Don't have an account? <a href="/signup">Create an account</a>
                </CreateAccountLink>

            </FormGroup>
          </Form>
        </SignInContainer>
      </InnerWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  background-color: #1c1b1b;
  color: white;
`;

const InnerWrap = styled.div`
  height: 100%;
  width: 30%;
  margin: auto;
`;

const SignInContainer = styled.div`
  margin-top: 65px;
  border-radius: 3%;
  background-color: #313131;
  color: white;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Input = styled.input`
  border: none;
  border-radius: 5px;
  height: 28px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  background-color: white;
  color: black;
  padding-left: 15px;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%; /* Make sure the container takes up the full width */
`;

const SignInButton = styled.button`
  color: #02a4d3;
  height: 40px;
  width: 48%; /* Adjust the width as needed */
  border: 1px solid;
  border-color: #04d9ff;
  background-color: black;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    color: black;
    background-color: #02a4d3;
    transition-timing-function: ease-in-out;
    transition-duration: 450ms;
  }
`;

const GoogleSignIn = styled.div`
  margin-top: 20px;
`;

const GoogleButton = styled.button`
  color: #02a4d3;
  height: 40px;
  width: 48%; /* Adjust the width as needed */
  border: 1px solid;
  border-color: #02a4d3;
  background-color: black;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
    color: black;
    background-color: #02a4d3;
    transition-timing-function: ease-in-out;
    transition-duration: 450ms;
  }
`;

const GoogleLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;
const CreateAccountLink = styled.div`
  color: white; /* Change the color to your desired color */
  font-size: 16px; /* Adjust the font size as needed */
  margin-top: 14px; /* Add margin to create spacing between the link and other elements */
  text-align: center; /* Center the text horizontally */
`; 
export default SignIn;
