let myprojects = [
  {
    title : "Crypto-Exchange",
    link : "https://pure-headland-49327.herokuapp.com/",
    picture : "https://steemit-production-imageproxy-upload.s3.amazonaws.com/DQmZ1oqMG55JzH59usAiynrUdamCoGJykacyZsFeHrcSfW2",
    description : "Create an account on Crypto-Exchange to get up to date price information for the hottest cryptocurrencies, and $20,000 in fake USD to simulate investing in this new and volitile market."
  },
  {
    title : "Spork",
    link : "https://polar-tor-20830.herokuapp.com/",
    picture : "https://storage.googleapis.com/lg_meetup_images/street-food-tracking.jpg",
    description : "Spork is a social platform where aspiring and veteran chefs can upload, favorite, review, and search recipes. Users can also follow their favorite chefs on the platform to make sure they don't miss out on any new dishes. Bon appetit!"
  },
  {
    title : "Junket!",
    link : "https://vast-falls-69882.herokuapp.com/",
    picture : "http://www.travelweekly.com/uploadedImages/All_TW_Art/2016/032816/T0328COVERILLO2_HR.jpg?n=3385&width=1540&height=866&mode=crop&Anchor=MiddleCenter",
    description : "Check out Junket! to get travel tips for any upcoming destinations. Log in to share you own experiences and interact with other users."
  }];




$(document).ready(function(){

  console.log('working :)');
  console.log(myprojects[0].title);

  $(".button-collapse").sideNav();

  let $projectCards = $('.project-cards');
  let newHTML;
  myprojects.forEach((project) => {
    newHTML = `
    <div class="col s12 m6 l6">
      <a href="${project.link}">
      <div class="card">
        <div class="card-image">
          <img src="${project.picture}">
          <span class="card-title">${project.title}</span>
        </div>
        <div class="card-content">
          <p>${project.description}</p>
        </div>
      </div>
    </div>`;


    console.log(newHTML);
    $projectCards.append(newHTML);
  });








});
