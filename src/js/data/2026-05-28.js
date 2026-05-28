// dataSetVersion = "2019-11-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSetVersion = "2026-05-28";
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
    checked: true,
    sub: [
      { name: "Early Pre-Album Tracks", key: "PAT", checked: false },
      { name: "The Gouster", key: "Gouster" },
      { name: "Absolute Beginners", key: "AB" },
      { name: "Labyrinth", key: "Labyrinth" },
      { name: "Tin Machine", key: "TM" },
      { name: "Tin Machine II", key: "TMII" },
      { name: "The Leon Suites", key: "Leon" },
      { name: "The Nomad Soul", key: "Nomad" },
      { name: "Toy", key: "Toy" },
      { name: "Never Let Me Down (2008)", key: "NLMD08" },
      { name: "The Next Day Extra EP", key: "TNDEE" },
    ],
  },
  {
    name: "Remove Duplicates",
    key: "duplicates",
    tooltip:
      "This will remove any songs that appear on two releases in basically the same form.",
  },
  {
    name: "Remove Covers",
    key: "covers",
    tooltip: "Check this to remove all covers.",
  },
  {
    name: "Remove Instrumentals",
    key: "instrumentals",
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
    },
  },
  {
    name: "Rubber Band",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
    },
  },
  {
    name: "Love You Till Tuesday",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
    },
  },
  {
    name: "There Is A Happy Land",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
    },
  },
  {
    name: "We Are Hungry Men",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
    },
  },
  {
    name: "When I Live My Dream",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
    },
  },
  {
    name: "Little Bombardier",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
    },
  },
  {
    name: "Silly Boy Blue",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
    },
  },
  {
    name: "Come and Buy My Toys",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
    },
  },
  {
    name: "Join the Gang",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
    },
  },
  {
    name: "She's Got Medals",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
    },
  },
  {
    name: "Maid of Bond Street",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
    },
  },
  {
    name: "Please Mr. Gravedigger",
    img: "db1.jpg",
    opts: {
      albums: ["DB1"],
    },
  },
  {
    name: "Space Oddity",
    img: "db2.jpg",
    opts: {
      albums: ["DB2"],
    },
  },
  {
    name: "Unwashed and Somewhat Slightly Dazed",
    img: "db2.jpg",
    opts: {
      albums: ["DB2"],
    },
  },
  {
    name: "Dummy Song 1",
    img: "TMWStW.jpg",
    opts: {
      albums: ["TMWStW"],
    },
  },
  {
    name: "Dummy Song 2",
    img: "TMWStW.jpg",
    opts: {
      albums: ["TMWStW"],
    },
  },
  {
    name: "Dummy Song 1",
    img: "db1.jpg",
    opts: {
      albums: ["HD"],
    },
  },
  {
    name: "Dummy Song 2",
    img: "db1.jpg",
    opts: {
      albums: ["HD"],
    },
  },
  {
    name: "Dummy Song 1",
    img: "db1.jpg",
    opts: {
      albums: ["ZS"],
    },
  },
  {
    name: "Dummy Song 2",
    img: "db1.jpg",
    opts: {
      albums: ["ZS"],
    },
  },
  {
    name: "Dummy Song 1",
    img: "db1.jpg",
    opts: {
      albums: ["AS"],
    },
  },
  {
    name: "Dummy Song 2",
    img: "db1.jpg",
    opts: {
      albums: ["AS"],
    },
  },
  {
    name: "Dummy Song 1",
    img: "db1.jpg",
    opts: {
      albums: ["PU"],
    },
  },
  {
    name: "Dummy Song 2",
    img: "db1.jpg",
    opts: {
      albums: ["PU"],
    },
  },
  {
    name: "Dummy Song 1",
    img: "db1.jpg",
    opts: {
      albums: ["DD"],
    },
  },
  {
    name: "Dummy Song 2",
    img: "db1.jpg",
    opts: {
      albums: ["DD"],
    },
  },
  {
    name: "Dummy Song 1",
    img: "db1.jpg",
    opts: {
      albums: ["YA"],
    },
  },
  {
    name: "Dummy Song 2",
    img: "db1.jpg",
    opts: {
      albums: ["YA"],
    },
  },
  {
    name: "Dummy Song 1",
    img: "db1.jpg",
    opts: {
      albums: ["StS"],
    },
  },
  {
    name: "Dummy Song 2",
    img: "db1.jpg",
    opts: {
      albums: ["StS"],
    },
  },
  {
    name: "Dummy Song 1",
    img: "db1.jpg",
    opts: {
      albums: ["Low"],
    },
  },
  {
    name: "Dummy Song 2",
    img: "db1.jpg",
    opts: {
      albums: ["Low"],
    },
  },
  {
    name: "Dummy Song 1",
    img: "db1.jpg",
    opts: {
      albums: ["Heroes"],
    },
  },
  {
    name: "Dummy Song 2",
    img: "db1.jpg",
    opts: {
      albums: ["Heroes"],
    },
  },
  {
    name: "Dummy Song 1",
    img: "db1.jpg",
    opts: {
      albums: ["Lodger"],
    },
  },
  {
    name: "Dummy Song 2",
    img: "db1.jpg",
    opts: {
      albums: ["Lodger"],
    },
  },
  {
    name: "Dummy Song 1",
    img: "db1.jpg",
    opts: {
      albums: ["SMaSC"],
    },
  },
  {
    name: "Dummy Song 2",
    img: "db1.jpg",
    opts: {
      albums: ["SMaSC"],
    },
  },
  {
    name: "Dummy Song 1",
    img: "db1.jpg",
    opts: {
      albums: ["Dance"],
    },
  },
  {
    name: "Dummy Song 2",
    img: "db1.jpg",
    opts: {
      albums: ["Dance"],
    },
  },
  {
    name: "Dummy Song 1",
    img: "db1.jpg",
    opts: {
      albums: ["Tonight"],
    },
  },
  {
    name: "Dummy Song 2",
    img: "db1.jpg",
    opts: {
      albums: ["Tonight"],
    },
  },
  {
    name: "Dummy Song 1",
    img: "db1.jpg",
    opts: {
      albums: ["NLMD"],
    },
  },
  {
    name: "Dummy Song 2",
    img: "db1.jpg",
    opts: {
      albums: ["NLMD"],
    },
  },
  {
    name: "Dummy Song 1",
    img: "db1.jpg",
    opts: {
      albums: ["BTWN"],
    },
  },
  {
    name: "Dummy Song 2",
    img: "db1.jpg",
    opts: {
      albums: ["BTWN"],
    },
  },
  {
    name: "Dummy Song 1",
    img: "db1.jpg",
    opts: {
      albums: ["TBoS"],
    },
  },
  {
    name: "Dummy Song 2",
    img: "db1.jpg",
    opts: {
      albums: ["TBoS"],
    },
  },
  {
    name: "Dummy Song 1",
    img: "db1.jpg",
    opts: {
      albums: ["Outside"],
    },
  },
  {
    name: "Dummy Song 2",
    img: "db1.jpg",
    opts: {
      albums: ["Outside"],
    },
  },
  {
    name: "Dummy Song 1",
    img: "db1.jpg",
    opts: {
      albums: ["Earthling"],
    },
  },
  {
    name: "Dummy Song 2",
    img: "db1.jpg",
    opts: {
      albums: ["Earthling"],
    },
  },
  {
    name: "Dummy Song 1",
    img: "db1.jpg",
    opts: {
      albums: ["hours"],
    },
  },
  {
    name: "Dummy Song 2",
    img: "db1.jpg",
    opts: {
      albums: ["hours"],
    },
  },
  {
    name: "Dummy Song 1",
    img: "db1.jpg",
    opts: {
      albums: ["Heathen"],
    },
  },
  {
    name: "Dummy Song 2",
    img: "db1.jpg",
    opts: {
      albums: ["Heathen"],
    },
  },
  {
    name: "Dummy Song 1",
    img: "db1.jpg",
    opts: {
      albums: ["Reality"],
    },
  },
  {
    name: "Dummy Song 2",
    img: "db1.jpg",
    opts: {
      albums: ["Reality"],
    },
  },
  {
    name: "Dummy Song 1",
    img: "db1.jpg",
    opts: {
      albums: ["TND"],
    },
  },
  {
    name: "Dummy Song 2",
    img: "db1.jpg",
    opts: {
      albums: ["TND"],
    },
  },
  {
    name: "Dummy Song 1",
    img: "db1.jpg",
    opts: {
      albums: ["blackstar"],
    },
  },
  {
    name: "Dummy Song 2",
    img: "db1.jpg",
    opts: {
      albums: ["blackstar"],
    },
  },
];
