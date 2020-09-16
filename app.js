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
  'I grew up in Sonoma surrounded by beautiful hills, valleys, and vineyards. Lots of vineyards. My first exposure to real work was spending summers on the family ranch doing glamorous jobs such as mending fences, re-roofing barns, and laying septic lines. As grueling as it was at times, building physical things was also strangely satisfying, and it is rewarding to go back today and see things I build a decade ago still standing and serving their purpose.',
  'At UC Berkeley I studied psychology because I loved learning about human behavior and how the brain works. This in turn allowed me to better understand myself and the actions of those around me. During this time I had the luxury of exploring other fields and actually got my first taste of computer science by taking an introductory class on a whim. I loved learning about computers and building programs in a digital environment, but discovered this passion too late to justify pursuing a degree.',
  'After graduation I had launched my career in sales which fit in nicely with my psychology background. I enjoy working with people and loved the social, high energy sales environment but something always felt missing. I decided to take a step back and revisit my interest in computer science and get back into building things.',
  'I have been thrilled with my career change and love being part of such an active and innovative community. There is always more to learn and play around with and the possibilities of what you can create are seemingly limitless. I love helping people, solving problems, and building quality products and have finally found a path that allows me to do all three.',
];

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 1; i < 5; i++) {
    const span = document.createElement('SPAN');
    span.setAttribute('class', `circle c${i}`);
    document.getElementById('circles').appendChild(span);
  }

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
    document.getElementById('aboutContent').appendChild(pTag);
  });
});
