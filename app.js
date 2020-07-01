// const myProjects = [
//   {
//     title : "Crypto-Exchange",
//     link : "https://pure-headland-49327.herokuapp.com/",
//     picture : "https://steemit-production-imageproxy-upload.s3.amazonaws.com/DQmZ1oqMG55JzH59usAiynrUdamCoGJykacyZsFeHrcSfW2",
//     description : "Create an account on Crypto-Exchange to get up to date price information for the hottest cryptocurrencies, and $20,000 in fake USD to simulate investing in this new and volitile market."
//   },
//   {
//     title : "Spork",
//     link : "https://polar-tor-20830.herokuapp.com/",
//     picture : "https://storage.googleapis.com/lg_meetup_images/street-food-tracking.jpg",
//     description : "Spork is a social platform where aspiring and veteran chefs can upload, favorite, review, and search recipes. Users can also follow their favorite chefs on the platform to make sure they don't miss out on any new dishes. Bon appetit!"
//   },
//   {
//     title : "Junket!",
//     link : "https://vast-falls-69882.herokuapp.com/",
//     picture : "https://www.travelweekly.com/uploadedImages/All_TW_Art/2016/032816/T0328COVERILLO2_HR.jpg?n=3385&width=1540&height=866&mode=crop&Anchor=MiddleCenter",
//     description : "Check out Junket! to get travel tips for any upcoming destinations. Log in to share you own experiences and interact with other users."
//   }];

const myProjects = [
  {
    title: 'Dayta, 2020',
    href: 'https://github.com/conmart/dayta',
    img: 'assets/imgs/Dayta-cal.png',
    description: 'An app for keeping track of day to day activities.',
    tech: 'React, Firebase, Firestore',
  },
  {
    title: 'Nim, 2020',
    href: 'https://agitated-almeida-f6ccfb.netlify.app/',
    img: 'assets/imgs/nim.png',
    description: 'A mathematical game of strategy, challenge your neighbor!',
    tech: 'React',
  },
  {
    title: 'Crypto-Exchange, 2017',
    href: 'https://pure-headland-49327.herokuapp.com/',
    img: 'assets/imgs/crypto.png',
    description: 'C-E pulls in real time market data via CryptoCompare to simulate investing in various cryptocurrencies.',
    tech: 'MongoDB, Express, Node.js',
  },
  {
    title: 'Spork, 2017',
    href: 'https://polar-tor-20830.herokuapp.com/',
    img: 'assets/imgs/spork2.png',
    description: 'A social recipe app to share your love of cooking.',
    tech: 'Ruby on Rails',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  let newHTML = '';
  myProjects.forEach(project => {
    newHTML +=
      `<a class="projectCard" href="${project.href}" target="_blank">
        <img src="${project.img}" />
        <div class="projectInfo">
          <div class="projectTitle">
            ${project.title}
          </div>
          <div class="description">
            ${project.description}
          </div>
          <div class="tech">
            Build with: ${project.tech}
          </div>
        </div>
      </a>`;
  })
  document.getElementById('projectRow').innerHTML = newHTML;
});
