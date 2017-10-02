let myprojects = [
  {
    title : "Junket!",
    link : "https://vast-falls-69882.herokuapp.com/",
    picture : "http://www.travelweekly.com/uploadedImages/All_TW_Art/2016/032816/T0328COVERILLO2_HR.jpg?n=3385&width=1540&height=866&mode=crop&Anchor=MiddleCenter",
    description : "Check out Junket! to get travel tips for any upcoming destinations. Log in to share you own experiences and interact with other users."
  },
  {
    title : "Race to the Iron Throne",
    link : "https://conmart.github.io/racing-game/",
    picture : "https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg",
    description : "Race to be the ruler of Westeros in this GoT themed racing game"
  },
  {
    title : "iToilet",
    link : "https://pure-lake-31539.herokuapp.com/",
    picture : "https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/toilet.png",
    description : "Inspired by Seinfeld this app allows users to find usable restrooms when they're in a pinch. (Google Maps integration temporarily disabled)"
  }];




$(document).ready(function(){

  console.log('working :)');
  console.log(myprojects[0].title);

  let $displayProjects = $('.display-projects');
  let newHTML;
  myprojects.forEach((project) => {
    newHTML = `<div class="row">
      <div class="col m3 push-m2 center-align"><img src="${project.picture}"></div>

      <div class="col m1"></div>

      <div class="row">
        <div class="col m4 push-m3">
          <div class="card blue-grey">
            <div class="card-content white-text">
              <span class="card-title">${project.title}</span>
              <p>${project.description}</p>
            </div>
            <div class="card-action">
              <a href="${project.link}">Go to full project</a>
            </div>
          </div>
        </div>
      </div>`;


    console.log(newHTML);
    $displayProjects.append(newHTML);
  });








});
