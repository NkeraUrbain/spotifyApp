import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup,FormControl, Button, Row, Card } from "react-bootstrap";
import { useState,useEffect } from 'react';

const CLIENT_ID="9cdee85530994754a61c178580b1434d";
const CLIENT_SECRET="d23b98c9da934ee9a254644fb1a7e1d9";



function App() { 
const [searchInput, setSearchInput]= useState("");
const [accessToken, setAccessToken]= useState("");
  useEffect(()=>{
    var authParameters={
     method:'POST',
     headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
     },
     body: 'grant_type=client_credentials &client_id='+CLIENT_ID +'&client_secret=' +CLIENT_SECRET

    }
    fetch('https://accounts.spotify.com/api/token',authParameters)
    .then(result=> result.json())
    .then(data=> console.log(data))
}, [])
  return (
    <div className="App">
      <Container>
        <InputGroup className="mb-3" size="lg" >
          <FormControl
          placeholder="search For Artist"
          type="input"
          onKeyDown={event=>{
            if (event.key == "enter"){
              console.log("pressed enter");
            }
          }
        }
        onChange={event=> setSearchInput(event.target.value)}
          />
          <button onClick={()=>{ console.log("clicked button")}}>
            search
          </button>
          </InputGroup>
        </Container>

          <Container>
            <Row className="mx-2"row row-cols-4>
            <Card>
              <Card.Img src="#"/>
              <Card.Body>
                <Card.Title>Album Name</Card.Title>

              </Card.Body>
            </Card>
           
            </Row>
            
          </Container>
            
    </div>
  );
}

export default App;

