import styled from "styled-components";

const InputSearch = styled.input`
  width: 20rem;
  height: 3.35rem;
  padding: 1rem 1rem;
  outline: none;
  border: 1px solid #f7f7f7;
  border-radius: 0.3rem 0rem 0rem 0.3rem;
  background-color: #f7f7f7;
  font-size: 1.3rem;
`;

const Button = styled.button`
  border-radius: 0rem 0.3rem 0.3rem 0rem;
  width: 4rem;
  height: 3.35rem;
  border: 1px solid #ff7800;
  font-size: 1.3rem;
  background-color: #ff7800;
  color: black;
  cursor: pointer;
`;
const Container = styled.div``;

const ButtonSearch = () => {
  return (
    <Container>
      <InputSearch />
      <Button>
        <i class="fa fa-search"></i>
      </Button>
    </Container>
  );
};

export default ButtonSearch;
