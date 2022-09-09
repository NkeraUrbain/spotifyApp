

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup,FormControl, Button, Row, Card } from "react-bootstrap";
import { useState,useEffect } from 'react';
import React from 'react';

const CLIENT_ID="9cdee85530994754a61c178580b1434d";
const CLIENT_SECRET="d23b98c9da934ee9a254644fb1a7e1d9";

function MusicPlayer() { 
const [searchInput, setSearchInput]= useState("");
const [accessToken, setAccessToken]= useState("");
const [albums, setAlbums] = useState([]);
const [ albumID, setAlbumID]= useState('7AFT8fGI07iOK064OqxItM')
  useEffect(()=>{
    var authParameters={
     method:'POST',
     headers:{
      'Content-Type':'application/x-www-form-urlencoded'
     },
     body:'grant_type=client_credentials&client_id=' +CLIENT_ID +'&client_secret=' +CLIENT_SECRET

    }
    fetch('https://accounts.spotify.com/api/token',authParameters)
    .then(result=> result.json())
    .then(data=> setAccessToken(data.access_token))
}, [])

//search
async function search(){
console.log('search for' + searchInput); 


var searchParameters={
method:'GET',
headers: {
'Content-Type':'application/json',
'Authorization': 'Bearer ' + accessToken
  }
}

var artistID= await fetch('https://api.spotify.com/v1/search?q='+ searchInput +'&type=artist',searchParameters)
.then(response=> response.json())
.then(data=> { return data.artists.items[0].id})
console.log("artist ID is" + artistID);

var returnedAlbums= await fetch('https://api.spotify.com/v1/artists/' + artistID +'/albums'+'?include_groups=album&market=US&limit=50',searchParameters)
.then(response=>response.json())
.then(data=>{
  console.log(data);
  setAlbums(data.items);
});
}
console.log( albums)
return (
    <div className="App">
      <Container>
        <InputGroup className="mb-3" size="lg" >
          <FormControl
          placeholder="search For Artist"
          type="input"
          onKeyDown={event=>{
            if (event.key == "enter"){
              search();
            }
          }
        }
        onChange={event=> setSearchInput(event.target.value)}
          />
          <button onClick= {search}>
            search
          </button>
          </InputGroup>
        </Container>

          <Container>
            <Row className="mx-2 d-flex bg-dark" row row-cols-4>
              {albums.map((album,i)=>{
                console.log(album);
                return <Card onClick={()=>{
                  setAlbumID(album.id)
                }} style={{ width: '22rem', margin: '5px' }}>
                <Card.Img src={album.images[0].url
} className="cardImg col-3"  />
                <Card.Body>
                  <Card.Title className="font-weight-bold">{album.name}</Card.Title>
   
                </Card.Body>
              </Card>
              }
                )}
          
            </Row>         
            <iframe
            src={'https://open.spotify.com/embed/album/'+albumID+'?utm_source=generator'} width='100%' height="380"
            >

            </iframe>
          </Container>
            
    </div>
  );
}

export default MusicPlayer;