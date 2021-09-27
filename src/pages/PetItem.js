import styled from "styled-components";
import { Box } from "../styles";
function PetItem({pet,isLogin, onDeletePet}) {
    const { id, name, image, user } = pet;
    function handleDeletePet() {
        fetch(process.env.REACT_APP_API_URL + `/pets/${id}`, {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            onDeletePet(pet);
          }
        });
      }
      
    return (
        <Pet>
            <Box>
                <img src={image} alt={name} />
                <h2>{name}</h2>
                <p>Owner by {user.user_name}</p>
                {
                    (isLogin) ? (
                        <button onClick={handleDeletePet}>Delete Pet</button>
                    ):(
                        <>
                        </>
                    )
                }
            </Box>
        </Pet>

    );
  }

  const Pet = styled.article`
  margin-bottom: 24px;
`;

export default PetItem;
  