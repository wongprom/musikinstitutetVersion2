const Model = {
    apiKey: "flat_eric",
    artists: "artists",
    albums: "albums",
    tracks: "tracks",
    playlists: "playlists",
    comments: "comments",


    fetchResource(resource){
        const title = resource;
        fetch(`https://folksa.ga/api/${resource}?key=${Model.apiKey}`)
        .then((response) => response.json())
        .then((resource) => {
          console.log(title,resource);
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
    
}



const Controller = {


   // const artistFormButton = document.getElementById('artistFormButton');
    //artistFormButton.addEventListener('click', getinputValue(artistname,artistgenre)){

   
    
    registerArtistButtonClickEventFor(artistNameInput,artistGenreInput){
        const button = Elements.buttons.artistFormButton;
        button.addEventListener('click', function getinputValues(){
          //const inputValue = Elements.inputs.inputArtistName;
            console.log(artistNameInput.value,artistGenreInput.value);
        });
    
    }
    
    
}
Model.fetchResource(Model.albums);
Model.fetchResource(Model.artists);
Model.fetchResource(Model.tracks);
Model.fetchResource(Model.playlists);
Model.fetchResource(Model.comments);
Controller.registerArtistButtonClickEventFor(Elements.inputs.inputArtistName,Elements.inputs.inputArtistGenre);



