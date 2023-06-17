import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  width: 300px;
`;

export const Select = styled.select`
  padding: 0.5rem;
  width: 300px;
`;

export const DatePickerContainer = styled.div`
  .react-datepicker-wrapper {
    width: 300px;
  }

  .react-datepicker__input-container {
    display: block;
  }

  .react-datepicker__input-container input {
    width: 100%;
    padding: 0.5rem;
  }
`;

export const Button = styled.button`
  padding: 1rem 7rem;
  background-color: #2196f3;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const SuccessMessage = styled.p`
  margin-top: 1rem;
  font-weight: bold;
`;







