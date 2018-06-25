const Model = {
    apiKey: "flat_eric",
    artists: "artists",
    albums: "albums",
    tracks: "tracks",
    playlists: "playlists",
    comments: "comments",


    fetchResource(resource){
        const title = resource;
        fetch(`https://folksa.ga/api/${resource}?key=${Model.apiKey}&limit=300`)
        .then((response) => response.json())
        .then((resource) => {
          console.log(title,resource);
         // Controller.listResource(resource);
        });
    },
    
    fetchTenLatest(resource){
        const title = resource;
        fetch(`https://folksa.ga/api/${resource}?key=${Model.apiKey}&limit=10&sort=desc`)
        .then((response) => response.json())
        .then((resource) => {
            View.displayTenLatest(resource);
          console.log("Ten latest :",title,resource);
          //Controller.listResource(resource);
        });
    },

   

        
    
    postResource(resource,artist){
        fetch(`https://folksa.ga/api/${resource}?key=${Model.apiKey}`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(artist)
      })
      .then((response) => response.json())
      .then((artist) => {
        
        console.log("new artist :",artist);
        Model.fetchTenLatest(resource);
        console.log('this',resource)
        //Model.fetchResource(resource);
        View.displayCreatedArtist(artist); 
      });

   }
}

const Elements = {
    inputs: {
        inputArtistName: document.getElementById('artistName'),
        inputArtistGenre: document.getElementById('artistGenre'),
    },

    buttons: {
        artistFormButton: document.getElementById('artistFormButton'),
    }
}

const View = {
    displayCreatedArtist(artist){
        const div = document.getElementById('displayCreatedArtist');
        const artistInfo = document.createElement('p');
         artistInfo.innerText = `Your new artist is created ${artist.name}
         Artist genre is ${artist.genres}`;
         div.appendChild(artistInfo);
         //artist
    },
    displayTenLatest(artist){
        for(let resource of artist){
        const div = document.getElementById('tenLatest');
        const tenLatestinfo = document.createElement('ul');
        const tenLatestLi = document.createElement('li');
        tenLatestLi.innerText = resource.name;
        div.appendChild(tenLatestinfo);
        tenLatestinfo.appendChild(tenLatestLi);
        }
  
    }
    
}



const Controller = {
    artistName:"",
    artistGenre:"",
    
    createArtist(artistName,artistGenre){

        let artist = {
            name: artistName,
            born: "1947-02-13",
            gender: "male",
            genres: artistGenre, //Must be a comma separated string
            spotifyURL: "https://open.spotify.com/artist/6zHRqvws8dVeqL8D31ponr?si=QFWoLwwBTa-KrR3gUcLMYQ",
            coverImage: "https://img.discogs.com/D7eDvyQrOJIJlDX-ieliD0QmAG4=/500x500/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-71872-1426020311-7115.jpeg.jpg"
            
        }
        Model.postResource(Model.artists,artist);
        console.log(artist);
    },
     

    registerArtistButtonClickEventFor(artistNameInput,artistGenreInput){
        const button = Elements.buttons.artistFormButton;
        button.addEventListener('click', function getinputValues(){
            artistName = artistNameInput.value;
            artistGenre = artistGenreInput.value;
            Controller.createArtist(artistName,artistGenre);
            //console.log(Controller.artist.name, Controller.artist.genres);
        });
    
    },

    //fetchUpdateTenLatest(resources) {
       // for(let resource of resources ) {
            //View.displayTenLatest(resource)
            //console.log(`Resourse:` ,resource )
       // }
    //}

    
    
}

Model.fetchTenLatest(Model.artists);
Model.fetchResource(Model.albums);
Model.fetchResource(Model.artists);
Model.fetchResource(Model.tracks);
Model.fetchResource(Model.playlists);
Model.fetchResource(Model.comments);
Controller.registerArtistButtonClickEventFor(Elements.inputs.inputArtistName,Elements.inputs.inputArtistGenre);
