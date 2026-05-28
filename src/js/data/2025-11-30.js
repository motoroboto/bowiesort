// dataSetVersion = "2019-11-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSetVersion = "2025-11-30";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Albums",
    key: "albums",
    tooltip: "Check this to restrict to certain albums.",
    checked: false,
    sub: [
      { name: "David Bowie (1967)", key: "DB1" },
      { name: "David Bowie (1969)", tooltip: "aka Space Oddity", key: "DB2" },
      { name: "The Man Who Sold the World", key: "TMWStW" },
      { name: "Hunky Dory", key: "HD" },
      {
        name: "The Rise and Fall of Ziggy Stardust and the Spiders From Mars",
        key: "ZS",
      },
      { name: "Aladdin Sane", key: "AS" },
      { name: "Pin Ups", key: "PU" },
      { name: "Diamond Dogs", key: "DD" },
      { name: "Young Americans", key: "YA" },
      { name: "Station to Station", key: "StS" },
      { name: "Low", key: "Low" },
      { name: "''Heroes&#34;", key: "Heroes&#34;" },
      { name: "Lodger", key: "Lodger" },
      { name: "Scary Monsters ...and Super Creeps", key: "SMaSC" },
      { name: "Let's Dance", key: "Dance" },
      { name: "Tonight", key: "Tonight" },
      { name: "Never Let Me Down", key: "NLMD" },
      { name: "Black Tie White Noise", key: "BTWN" },
      { name: "The Buddha of Suburbia", key: "TBoS" },
      {
        name: "1. Outside",
        tooltip: "aka 1. Outside (The Nathan Adler Diaries- A Hyper Cycle)",
        key: "Outside",
      },
      { name: "Earthling", key: "Earthling" },
      { name: "'hours...'", key: "hours" },
      { name: "Heathen", key: "Heathen" },
      { name: "Reality", key: "Reality" },
      { name: "The Next Day", key: "TND" },
      { name: "★", key: "blackstar" },
    ],
  },
  {
    name: "Expanded Releases",
    key: "bonus",
    tooltip: "Check these to include non-mainline releases.",
    checked: false,
    sub: [
      { name: "Early Pre-Album Tracks", key: "PAT", checked: false },
      { name: "The Gouster", key: "Gouster", checked: false },
      { name: "Absolute Beginners", key: "AB", checked: false },
      { name: "Labyrinth", key: "Labyrinth", checked: false },
      { name: "Tin Machine", key: "TM", checked: false },
      { name: "Tin Machine II", key: "TMII", checked: false },
      { name: "The Leon Suites", key: "Leon", checked: false },
      { name: "The Nomad Soul", key: "Nomad", checked: false },
      { name: "Toy", key: "Toy", checked: false },
      { name: "Never Let Me Down (2008)", key: "NLMD08", checked: false },
      { name: "The Next Day Extra EP", key: "TNDEE", checked: false },
    ],
  },

  {
    name: "Remove Duplicates",
    key: "duplicate",
    tooltip:
      "This will remove any songs that appear on two releases in basically the same form.",
  },
  {
    name: "Remove Covers",
    key: "cover",
    tooltip: "Check this to remove all covers.",
  },
  {
    name: "Bonus Tracks",
    key: "bside",
    tooltip: "This will include all bonus tracks for any slected albums",
    checked: false,
  },
  {
    name: "Remove Instrumentals",
    key: "instrumental",
    tooltip: "Check this to remove all instrumentals.",
    checked: false,
  },
];

dataSet[dataSetVersion].songData = [
  {
    name: "Uncle Arthur",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
      bonus: [],
    },
  },
  {
    name: "Sell Me A Coat",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
      bonus: [],
    },
  },
  {
    name: "Rubber Band",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
      bonus: [],
    },
  },
  {
    name: "Love You Till Tuesday",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
      bonus: [],
    },
  },
  {
    name: "There Is A Happy Land",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
      bonus: [],
    },
  },
  {
    name: "We Are Hungry Men",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
      bonus: [],
    },
  },
  {
    name: "When I Live My Dream",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
      bonus: [],
    },
  },
  {
    name: "Little Bombardier",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
      bonus: [],
    },
  },
  {
    name: "Silly Boy Blue",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
      bonus: [],
    },
  },
  {
    name: "Come and Buy My Toys",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
      bonus: [],
    },
  },
  {
    name: "Join the Gang",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
      bonus: [],
    },
  },
  {
    name: "She's Got Medals",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
      bonus: [],
    },
  },
  {
    name: "Maid of Bond Street",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
      bonus: [],
    },
  },
  {
    name: "Please Mr. Gravedigger",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
      bonus: [],
    },
  },
  {
    name: "Space Oddity",
    img: "db2.jpg",
    opts: {
      albums: ["DB2"],
      bonus: [],
    },
  },
  {
    name: "Unwashed and Somewhat Slightly Dazed",
    img: "db1.jpg",
    opts: {
      albums: ["DB2"],
      bonus: [],
    },
  },
  {
    name: "The Width of A Circle",
    img: "tmwstw.jpg",
    opts: {
      albums: ["TMWStW"],
      bonus: [],
    },
  },
  {
    name: "All the Madmen",
    img: "tmwstw.jpg",
    opts: {
      albums: ["TMWStW"],
      bonus: [],
    },
  },
  {
    name: "Changes",
    img: "hd.jpg",
    opts: {
      albums: ["HD"],
      bonus: [],
    },
  },
  {
    name: "Oh! You Pretty Things",
    img: "hd.jpg",
    opts: {
      albums: ["HD"],
      bonus: [],
    },
  },
  {
    name: "Five Years",
    img: "zs.jpg",
    opts: {
      albums: ["ZS"],
      bonus: [],
    },
  },
  {
    name: "Velvet Goldmine",
    img: "zs.jpg",
    opts: {
      albums: ["ZS"],
      bonus: [],
      bside: true,
    },
  },
  {
    name: "Watch That Man",
    img: "as.jpg",
    opts: {
      albums: ["AS"],
      bonus: [],
    },
  },
  {
    name: "Aladdin Sane (1913-1938-197?)",
    img: "as.jpg",
    opts: {
      albums: ["AS"],
      bonus: [],
    },
  },
  {
    name: "Rosalyn",
    img: "pinups.jpg",
    opts: {
      albums: ["PU"],
      bonus: [],
      cover: true,
    },
  },
  {
    name: "Here Comes the Night",
    img: "pinups.jpg",
    opts: {
      albums: ["PU"],
      bonus: [],
      cover: true,
    },
  },
  {
    name: "Future Legend",
    img: "dd.jpg",
    opts: {
      albums: ["DD"],
      bonus: [],
    },
  },
  {
    name: "Diamond Dogs",
    img: "dd.jpg",
    opts: {
      albums: ["DD"],
      bonus: [],
    },
  },
  {
    name: "Young Americans",
    img: "ya.jpg",
    opts: {
      albums: ["YA"],
      bonus: [],
    },
  },
  {
    name: "Win",
    img: "ya.jpg",
    opts: {
      albums: ["YA"],
      bonus: [],
    },
  },
  {
    name: "Station to Station",
    img: "sts.jpg",
    opts: {
      albums: ["StS"],
      bonus: [],
    },
  },
  {
    name: "Golden Years",
    img: "sts.jpg",
    opts: {
      albums: ["StS"],
      bonus: [],
    },
  },
  {
    name: "Speed of Life",
    img: "low.jpg",
    opts: {
      albums: ["Low"],
      bonus: [],
      instrumental: true,
    },
  },
  {
    name: "Breaking Glass",
    img: "low.jpg",
    opts: {
      albums: ["Low"],
      bonus: [],
    },
  },
  {
    name: "Beauty and the Beast",
    img: "heroes.jpg",
    opts: {
      albums: ["Heroes"],
      bonus: [],
    },
  },
  {
    name: "Joe the Lion",
    img: "heroes.jpg",
    opts: {
      albums: ["Heroes"],
      bonus: [],
    },
  },
  {
    name: "Fantastic Voyage",
    img: "lodger.jpg",
    opts: {
      albums: ["Lodger"],
      bonus: [],
    },
  },
  {
    name: "African Night Fright",
    img: "lodger.jpg",
    opts: {
      albums: ["Lodger"],
      bonus: [],
    },
  },
  {
    name: "It's No Game (No. 1)",
    img: "smasc.jpg",
    opts: {
      albums: ["SMaSC"],
      bonus: [],
    },
  },
  {
    name: "Up The Hill Backwards",
    img: "smasc.jpg",
    opts: {
      albums: ["SMaSC"],
      bonus: [],
    },
  },
  {
    name: "Modern Love",
    img: "dance.jpg",
    opts: {
      albums: ["Dance"],
      bonus: [],
    },
  },
  {
    name: "China Girl",
    img: "dance.jpg",
    opts: {
      albums: ["Dance"],
      bonus: [],
    },
  },
  {
    name: "Loving the Alien",
    img: "tonight.jpg",
    opts: {
      albums: ["Tonight"],
      bonus: [],
    },
  },
  {
    name: "Don't Look Down",
    img: "tonight.jpg",
    opts: {
      albums: ["Tonight"],
      bonus: [],
    },
  },
  {
    name: "Day-In Day-Out",
    img: "nlmd.jpg",
    opts: {
      albums: ["NLMD"],
      bonus: [],
    },
  },
  {
    name: "Time Will Crawl",
    img: "nlmd.jpg",
    opts: {
      albums: ["NLMD"],
      bonus: [],
    },
  },
  {
    name: "The Wedding",
    img: "btwn.jpg",
    opts: {
      albums: ["BTWN"],
      bonus: [],
    },
  },
  {
    name: "You've Been Around",
    img: "btwn.jpg",
    opts: {
      albums: ["BTWN"],
      bonus: [],
    },
  },
  {
    name: "Buddha of Suburbia",
    img: "tbos.jpg",
    opts: {
      albums: ["TBoS"],
      bonus: [],
    },
  },
  {
    name: "Sex and the Church",
    img: "tbos.jpg",
    opts: {
      albums: ["TBoS"],
      bonus: [],
    },
  },
  {
    name: "Leon Takes Us Outside",
    img: "outside.jpg",
    opts: {
      albums: ["Outside"],
      bonus: [],
    },
  },
  {
    name: "Outside",
    img: "outside.jpg",
    opts: {
      albums: ["Outside"],
      bonus: [],
    },
  },
  {
    name: "Little Wonder",
    img: "earthling.jpg",
    opts: {
      albums: ["Earthling"],
      bonus: [],
    },
  },
  {
    name: "Looking For Satellites",
    img: "earthling.jpg",
    opts: {
      albums: ["Earthling"],
      bonus: [],
    },
  },
  {
    name: "Thursday's Child",
    img: "hours.jpg",
    opts: {
      albums: ["hours"],
      bonus: [],
    },
  },
  {
    name: "Something In The Air",
    img: "hours.jpg",
    opts: {
      albums: ["hours"],
      bonus: [],
    },
  },
  {
    name: "Sunday",
    img: "heathen.jpg",
    opts: {
      albums: ["Heathen"],
      bonus: [],
    },
  },
  {
    name: "Cactus",
    img: "heathen.jpg",
    opts: {
      albums: ["Heathen"],
      bonus: [],
    },
  },
  {
    name: "New Killer Star",
    img: "reality.jpg",
    opts: {
      albums: ["Reality"],
      bonus: [],
    },
  },
  {
    name: "Pablo Picasso",
    img: "reality.jpg",
    opts: {
      albums: ["Reality"],
      bonus: [],
    },
  },
  {
    name: "The Next Day",
    img: "tnd.jpg",
    opts: {
      albums: ["TND"],
      bonus: [],
    },
  },
  {
    name: "Dirty Boys",
    img: "tnd.jpg",
    opts: {
      albums: ["TND"],
      bonus: [],
    },
  },
  {
    name: "★",
    img: "blackstar.jpg",
    opts: {
      albums: ["blackstar"],
      bonus: [],
    },
  },
  {
    name: "'Tis A Pity She Was A Whore",
    img: "blackstar.jpg",
    opts: {
      albums: ["blackstar"],
      bonus: [],
    },
  },
];
