import React, {useState} from "react";
import AddCharacter from "./AddCharacter";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewCard from "./NewCard";

function NewCharacterContainer() {

    const [characters, setCharacters] = useState([])

    function handleAddCharacter(newCharacter) {
        const newCharacters = [...characters, newCharacter];
        
        setCharacters(newCharacters)
    }

    function remove(id) {
        const deleteCharacters = characters.filter( (character) => character.id !== id)
    
        setCharacters(deleteCharacters);
      }

    return (
        <div className="add">
           
            <AddCharacter characters={characters} onAddCharacter={handleAddCharacter} />
            
            <Container>
                <Row>
                    {characters.map((character) => (
                    <Col key={character.id} sm={6} md={4} lg={3}>
                    <NewCard remove={remove} character={character} />
                    </Col>
                    ))}
                </Row>
            </Container>
            
        </div>
    )
}

export default NewCharacterContainer;