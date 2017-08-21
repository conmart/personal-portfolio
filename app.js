let myprojects = [
  {
    title : "Memory Game",
    link : "https://www.mindgames.com/Memory+Games",
    picture : "http://www.memozor.com/templates/memoire/images/memory_game_adults_cards_games.jpg"
  },
  {
    title : "Search Engine",
    link : "https://www.google.com",
    picture : "https://extensions.gnome.org/extension-data/icons/icon_1057.png"
  },
  {
    title : "Film Database",
    link : "http://www.imdb.com",
    picture : "http://www.bearcastmedia.com/wp-content/uploads/2016/09/movies.jpg"
  }];




$(document).ready(function(){

  console.log('working :)');
  console.log(myprojects[0].title);


  for (let i=0; i<myprojects.length; i++) {
    let output = `<div><img src=${myprojects[i].picture}>
      <h4><a href=${myprojects[i].link}>${myprojects[i].title}</a></h4></div>`;
    console.log(output);
    $('.display-projects').append(output);
  };




});
