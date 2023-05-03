import React, {useState} from "react";
import ResultCard from "./ResultCard";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ResultContainer({results, setFavCharacter, searchFilter, dropdownFilter}) {
    
    const [fav, setFav] = useState("")

    function setFavCharacter(fav) {
        setFav(fav)
      }

    return (
        <main>

            <h3 className="header">Below is a list of characters that have featured in Rick and Morty</h3>
            <br></br>
            <h4 id="favouriteCharacterResult">Your favourite character is: <strong>{fav}</strong></h4>

            <Search searchFilter={searchFilter}/>
            <Dropdown dropdownFilter={dropdownFilter}/>

            {results.length === 0 ? <h4 className="not-found"><strong>Character not found... please search again!</strong></h4> : null}
            

            <Container className="results">
                <Row>
                    {results.map((result) => (
                    <Col key={result.id} sm={6} md={4} lg={3}>
                    <ResultCard setFavCharacter={setFavCharacter} result={result} />
                    </Col>
                    ))}
                </Row>
            </Container>

        </main>
    )
}

export default ResultContainer;