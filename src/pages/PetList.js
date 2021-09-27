import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import PetItem from "./PetItem";
function PetList({user}) {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/pets")
      .then((r) => r.json())
      .then(setPets);
  }, []);

  function handleDeletePet(deletedPet) {
    setPets((pets) =>
      pets.filter((pet) => pet.id !== deletedPet.id)
    );
  }

  return (
    <Wrapper>
      {pets.length > 0 ? (
        pets.map((pet) => (
          <PetItem
              key={pet.id}
              pet={pet}
              isLogin={user}
              onDeletePet={handleDeletePet}
          />
        ))
      ) : (
        <>
          <h2>No Pets Found</h2>
          <Button as={Link} to="/new">
            Make a New Pet
          </Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

export default PetList;
