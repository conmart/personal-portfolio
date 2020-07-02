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

const about = [
  'I grew up in Sonoma surrounded by beautiful hills and valleys, and lots of vineyards. Lots of vineyards. I spent my summers working on the family ranch doing the glamorous work of mending fences and re-roofing barns. I’m the only one out of my family that is in the tech industry and voluntarily lives in an urban environment. While the current state of affairs has me questioning why I’m paying city rent to stay inside a small apartment all day, ultimately what draws me to away from the country is the same thing that draws me to programing - both represent the cumulative progress of humanity.',
  'Cities are incredibly complex marvels of engineering. The sheer volume of people crammed into a 7x7 mile block of real estate is unprecedented in human history. Likewise the internet of things, our digital infrastructure that we depend on in this strange era is a constantly evolving explosion of new ideas the likes of which has never before been possible. Here is where the exciting changes are happening, here is where the future will be built.',
  'Zooming in from the big picture, what keeps me engaged and excited to come to work every day as a developer is the unique combination of skills needed in the role. From my time as a ranch hand I have learned the importance of a strong work ethic, and building quality products that will survive the elements as well as end users. From my time in sales I understand how to work effectively with all the stakeholders of a project and keep everyone happy. And like all developers, I love thinking critically and creatively to both solve and anticipate problems.',
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
  });
  document.getElementById('projectRow').innerHTML = newHTML;

  about.forEach(paragraph => {
    const pTag = document.createElement('P');
    const text = document.createTextNode(paragraph);
    pTag.appendChild(text);
    document.getElementById('story').appendChild(pTag);
  });
});
