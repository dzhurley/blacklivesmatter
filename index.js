const chants = [
  { text: 'BLACK LIVES MATTER!', width: '12rem' },
  { text: 'DEFUND THE POLICE!', width: '11rem' },
  { text: "HANDS UP, DON'T SHOOT!", width: '8rem' },
  { text: 'HEY HEY, HO HO, THESE RACIST COPS HAVE GOT TO GO!', width: '11rem' },
  { text: "I CAN'T BREATHE!", width: '10rem' },
  { text: 'NO JUSTICE, NO PEACE!', width: '7rem' },
  { text: 'SAY HER NAME!', width: '8rem' },
  { text: 'SAY HIS NAME!', width: '8rem' },
  { text: 'SAY THEIR NAME!', width: '10rem' },
];

// Far more names should be in this list, let me know and I'll add them
const names = [
  'Aaron Campbell',
  'Ahmaud Arbery',
  'Aiyana Stanley-Jones',
  'Akai Gurley',
  'Akiel Denkins',
  'Alfred Olango',
  'Alton Sterling',
  'Anthony Hill',
  'Anthony Lamar Smith',
  'Antonio Martin',
  'Ariane McCree',
  'Atatiana Jefferson',
  'Botham Jean',
  'Brandon Webber',
  'Brendon Glenn',
  'Breonna Taylor',
  'Chad Robertson',
  'Charly Keunang',
  'Christian Taylor',
  'Christopher Kalonji',
  'Christopher Whitfield',
  'Danny Ray Thomas',
  'Dante Parker',
  'Darius Tarver',
  'David McAtee',
  'DeAndre Ballard',
  'DeJuan Guillory',
  'De’Von Bailey',
  'Dontre Hamilton',
  'D’ettrick Griffin',
  'Emmett Till',
  'Eric Garner',
  'Eric Logan',
  'Ezell Ford',
  'Finan H. Berhe',
  'Freddie Gray',
  'George Floyd',
  'Gregory Gunn',
  'Gregory Hill Jr',
  'JaQuavion Slaton',
  'Jamar Clark',
  'Jamarion Robinson',
  'Jamee Johnson',
  'Jason Washington',
  'Jemel Roberson',
  'Jerame Reid',
  'Jimmy Atchison',
  'John Crawford III',
  'Jonathan Ferrell',
  'Jonathan Hart',
  'Jordan Baker',
  'Jordan Edwards',
  'Julius Johnson',
  'Kajieme Powell',
  'Keaton Otis',
  'Keith Lamont Scott',
  'Kendra James',
  'Kendrec McDade',
  'Kwame Jones',
  'Laquan McDonald',
  'Larnell Bruce',
  'Larry Jackson Jr',
  'Manuel Loggins Jr',
  'Mario Woods',
  'Maurice Granton',
  'Michael Brown',
  'Michael Dean',
  'Miles Hall',
  'Monika Diamond',
  'Natasha McKenna',
  'Nina Pop',
  'Patrick Harmon',
  'Philando Castile',
  'Quanice Hayes',
  'Quintonio LeGrier',
  'Ramarley Graham',
  'Regis Korchinski-Paquet',
  'Rekia Boyd',
  'Robert Lawrence White',
  'Rumain Brisbon',
  'Ryan Twyman',
  'Samuel David Mallard',
  'Samuel DuBose',
  'Sandra Bland',
  'Sean Reed',
  'Stephon Clark',
  'Steven Demarco Taylor',
  'Tamir Rice',
  'Tanisha Anderson',
  'Terence Crutcher',
  'Terrance Franklin',
  'Terrell Johnson',
  'Terrence Crutcher',
  'Terrence Sterling',
  'Tony McDade',
  'Tony Robinson',
  'Trayvon Martin',
  'Victor White III',
  'Walter Scott',
  'Wardel Davis',
  'Wendell Allen',
  'William Green',
  'Willie Bo McCoy',
  'Willie McCoy',
  'Yassin Mohamed',
];

// Far more resources should be in this list, let me know and I'll add them
const resources = [
  { url: 'https://blacklivesmatter.com/', name: 'BLACK LIVES MATTER' },
  { url: 'https://www.dontshootpdx.org/', name: "DON'T SHOOT PDX" },
  { url: 'http://www.portlandcopwatch.org/', name: 'PORTLAND COP WATCH' },
  { url: 'https://www.blackvisionsmn.org/', name: 'BLACK VISIONS COLLECTIVE' },
  { url: 'https://www.reclaimtheblock.org/', name: 'RECLAIM THE BLOCK' },
  { url: 'https://www.theokraproject.com/', name: 'THE OKRA PROJECT' },
  { url: 'https://bailproject.org/', name: 'THE BAIL PROJECT' },
  { url: 'https://www.cuapb.org/', name: 'COMMUNITIES UNITED AGAINST POLICE BRUTALITY' },
  { url: 'https://www.knowyourrightscamp.com/', name: 'KNOW YOUR RIGHTS CAMP' },
  { url: 'https://fairfight.com/', name: 'FAIR FIGHT' },
  { url: 'https://www.joincampaignzero.org/', name: 'CAMPAIGN ZERO' },
  { url: 'https://www.nlg.org/massdefenseprogram/', name: 'NATIONAL LAWYERS GUILD MASS DEFENSE PROGRAM' },
  { url: 'https://colorofchange.org/', name: 'COLOR OF CHANGE' },
  { url: 'https://cpj.org/', name: 'COMMITTEE TO PROTECT JOURNALISTS' },
  { url: 'https://www.formyblock.org/', name: 'MY BLOCK, MY HOOD, MY CITY' },
  { url: 'https://www.paalf.org/', name: 'PAALF' },
  { url: 'https://www.blackvotersmatterfund.org/', name: 'BLACK VOTERS MATTER' },
  { url: 'https://www.showingupforracialjustice.org/', name: 'SHOWING UP FOR RACIAL JUSTICE' },
  { url: 'https://www.nationalcouncil.us/', name: 'NATIONAL COUNCIL FOR INCARCERATED AND FORMERLY INCARCERATED WOMEN AND GIRLS' },
  { url: 'https://www.localmedia.org/journalism-fund-for-black-newspapers/', name: 'THE BLACK JOURNALISM FUND' },
  { url: 'https://www.spirithouse-nc.org/harm-free-zone', name: 'HARM FREE ZONE' },
  { url: 'https://www.blackfoodjustice.org/', name: 'NATIONAL BLACK FOOD & JUSTICE ALLIANCE' },
  { url: 'https://nicjr.org/', name: 'THE NATIONAL INSTITUTE FOR CRIMINAL JUSTICE REFORM' },
  { url: 'https://www.pciti.net/', name: 'THE PROFESSIONAL COMMUNITY INTERVENTION TRAINING INSTITUTE' },
];

// https://dribbble.com/shots/3912686-Skin-tone-colors
const tones = [
  '#fceccd', '#fae4ca', '#f7d3ab', '#c8753d', '#a05c2e',
  '#f4dca6', '#f2cca5', '#ecbc88', '#a06233', '#764625',
  '#ecbb9c', '#eab19b', '#e39a7d', '#a04f30', '#7c4131',
  '#df966a', '#de8969', '#d7744f', '#814126', '#603126',
];

const diameter = 42;

const ua = navigator.userAgent.toLowerCase();
const isSafari = ua.indexOf('safari') > -1 && ua.indexOf('chrome') < 0;

const signRate = 0.04;
let animatingCall = false;
let signScroll = 0;
let sign;
const animateCall = () => {
  if (!animatingCall) {
    animatingCall = true;
    const el = document.createElement('section');
    el.classList.add('sign');

    const chant = random(chants);
    el.textContent = chant.text;
    el.style.width = chant.width;

    const x = random(100, width - 100);
    const y = random(100, height - 100);
    el.style.left = `calc(12.5vw + ${x}px)`;
    el.style.top = `${y}px`;
    el.style.opacity = 0;

    document.body.appendChild(el);
    sign = { x, y, maxed: false, el };
  }
};

const ul = document.querySelector('ul');

let crowdScroll = 0;
const loop = time => {
  requestAnimationFrame(loop);
  if (frameCount % 2 === 0) {
    ul.scrollTop += 1;
    crowdScroll -= 0.5;

    if (animatingCall) {
      signScroll -= 0.5;
      sign.el.style.top = `${sign.y - signScroll}px`;

      if (!sign.maxed) {
        sign.el.style.opacity = parseFloat(sign.el.style.opacity) + signRate;
        if (sign.el.style.opacity >= 1.7) {
          sign.maxed = true;
        }
      } else {
        sign.el.style.opacity -= signRate;
      }
      if (sign.el.style.opacity <= 0) {
        sign.el.remove();
        delete sign;
        signScroll = 0;
        animatingCall = false;
      }
    }

    if (crowdScroll % 42 === 0) {
      const li = ul.querySelector('li');
      li.remove();
      ul.appendChild(li);
      if (isSafari) {
        ul.scrollTop -= li.getBoundingClientRect().height + 16;
      }
    }
  }

  if (crowdScroll < 0 && crowdScroll % 100 === 0) {
    people.unshift(people.pop());
    clear();
    crowdScroll += diameter;
  }
};

let people = [];
const setupPeople = () => {
  const rows = Math.round((height * 1.5) / diameter);
  const columns = Math.round(width / diameter);
  for (let i = 0; i < rows; i++) {
    people.push([]);
    for (let j = 0; j < columns; j++) {
      people[i].push({
        index: j,
        jitter: random(0, 18),
        size: random(0.9, 1.4),
        tone: random(tones),
      });
    }
    shuffle(people[i], true);
  }
};

function setup() {
  createCanvas(windowWidth * 0.75, windowHeight);
  ul.innerHTML = shuffle(names).reduce(
    (list, name) => list + `<li>${name}</li>`,
    '',
  );
  requestAnimationFrame(loop);
  setupPeople();
  textSize(16);
  textFont('Menlo');

  const info = document.querySelector('.info');
  info.innerHTML = shuffle(resources)
    .map(
      resource =>
        `<a href="${resource.url}" target="_blank" rel="noopener noreferrer">${resource.name}</a>`,
    )
    .concat(
      `<a class="source" href="https://github.com/dzhurley/blacklivesmatter" target="_blank" rel="noopener noreferrer">(SOURCE)</a>`,
    )
    .join('');

  const toggle = document.querySelector('.toggle');
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    info.classList.toggle('open');
  });
}

function draw() {
  people.forEach((row, i) => {
    row.forEach(person => {
      if (person.index !== 0 && person.index !== row.length - 1) {
        fill(person.tone);
        circle(
          person.index * diameter + person.jitter,
          i * diameter + person.jitter - windowHeight * 0.5 - crowdScroll,
          diameter * person.size,
        );
      }
    });
  });

  if (second() % 5 === 0) {
    animateCall();
  }
}

function windowResized() {
  resizeCanvas(windowWidth * 0.75, windowHeight);
  people = [];
  clear();
  setupPeople();
}
