let favourites=[];
let movies=[];
function listMovies(movielist){
	movies=movielist; 
			const list = document.getElementById('moviesList');
			let mvInnerHtml = '';
			movielist.forEach(movie => {				
				
				mvInnerHtml = mvInnerHtml +`
				
				<li>Title: </li> 
				<li>${movie.title}</li>					
				<li><img src = ${movie.posterPath} alt="" id="icon" class="img-fluid p-5"/></li>
				<li>Rating:</li> 
				<li>${movie.Rating}</li>
				<li>Releasing On: </li> 
				<li>${movie.releaseDate}</li>
				<li><button class="btn btn-primary" 
					onClick=addFavourite(${movie.id})>Add to Favourates</button></li>

					`;
				list.innerHTML = mvInnerHtml;
				return list;
});
}
function getMovies() {
	return fetch('http://localhost:3000/movies')
    .then(response=>{
        if(response.status == 200)
        {
            return Promise.resolve(response.json());
        }
        else
        {
            return Promise.reject(new Error('Unable to fetch the data'));
        }
    }).then(movielist=>{

		listMovies(movielist);
		   /* movies=movielist; 
			const list = document.getElementById('moviesList');
			let mvInnerHtml = '';
			movielist.forEach(movie => {				
				
				mvInnerHtml = mvInnerHtml +`
				
				<li>Title: </li> 
				<li>${movie.title}</li>					
				<li><img src = ${movie.posterPath} alt="" id="icon" class="img-fluid p-5"/></li>
				<li>Rating:</li> 
				<li>${movie.Rating}</li>
				<li>Releasing On: </li> 
				<li>${movie.releaseDate}</li>
				<li><button class="btn btn-primary" 
					onClick=addFavourite(${movie.id})>Add to Favourates</button></li>

					`;
				list.innerHTML = mvInnerHtml;
			});*/

		}).catch(err=>{
			console.error();}
		)
	}
      
function listFavourites(favouriteslist1){
    favourites=favouriteslist1;
			const list = document.getElementById('favouritesList');
			let fvInnerHtml = '';
			favouriteslist1.forEach(fav => {
				fvInnerHtml = fvInnerHtml +`
				<li>Title: </li> 
				<li>${fav.title}</li>					
				<li><img src = ${fav.posterPath} alt="" id="icon" class="img-fluid p-5"/></li>
				<li>Rating:</li> 
				<li>${fav.Rating}</li>
				<li>Releasing On: </li> 
				<li>${fav.releaseDate}</li>
					
					`; 
				list.innerHTML = fvInnerHtml;
			});
}

function getFavourites() {
	return fetch('http://localhost:3000/favourites')
    .then(response=>{
        if(response.status == 200)
        {
            return Promise.resolve(response.json());
        }
        else
        {
            return Promise.reject(new Error('Unable to fetch the data'));
        }
    }).then(favouriteslist1=>{
		listFavourites(favouriteslist1);
	       /* favourites=favouriteslist1;
			const list = document.getElementById('favouritesList');
			let fvInnerHtml = '';
			favouriteslist1.forEach(fav => {
				fvInnerHtml = fvInnerHtml +`
				<li>Title: </li> 
				<li>${fav.title}</li>					
				<li><img src = ${fav.posterPath} alt="" id="icon" class="img-fluid p-5"/></li>
				<li>Rating:</li> 
				<li>${fav.Rating}</li>
				<li>Releasing On: </li> 
				<li>${fav.releaseDate}</li>
					
					`; 
				list.innerHTML = fvInnerHtml;
			});*/
		}).catch(err=>{
            console.log('Error in displaying !!!');
        })
	}


function addFavourite(id) {
	
	 let mov = movies.filter(m=>{
	
		return m.id===id;
	});
	
	favourites = favourites.filter(f=>{
		return f.id==id;
	});
	
    if(favourites.length<0){
	
   return  fetch('http://localhost:3000/favourites',{
            method:'POST',
            body:JSON.stringify(mov[0]),
            headers:{
                'content-type':'application/json'
            }
        })
        .then(response=>{
            console.log('Record Added !!!');
			alert("Record Added !!!");			
			
        }).catch(err=>{
            console.log('Error in Adding !!!');
        })
	}
	else
	{
		alert("already added to Favourites");
	}
	getFavourites();
   }	
	
module.exports = {
	getMovies,
	getFavourites,
	addFavourite
};

// You will get error - Uncaught ReferenceError: module is not defined
// while running this script on browser which you shall ignore
// as this is required for testing purposes and shall not hinder
// it's normal execution


