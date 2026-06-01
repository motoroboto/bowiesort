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
    checked: true,
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
    checked: false,
  },
  {
    name: "Remove Covers",
    key: "cover",
    tooltip: "Check this to remove all covers.",
    checked: false,
  },
  {
    name: "Bonus Tracks",
    key: "bside",
    tooltip: "This will include all bonus tracks for any slected albums",
    checked: true,
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
    name: "Letter to Hermione",
    img: "db1.jpg",
    opts: {
      albums: ["DB2"],
      bonus: [],
    },
  },
  {
    name: "Cygnet Committee",
    img: "db1.jpg",
    opts: {
      albums: ["DB2"],
      bonus: [],
    },
  },
  {
    name: "Janine",
    img: "db1.jpg",
    opts: {
      albums: ["DB2"],
      bonus: [],
    },
  },
  {
    name: "An Occassional Dream",
    img: "db1.jpg",
    opts: {
      albums: ["DB2"],
      bonus: [],
    },
  },
  {
    name: "The Wild Eyed Boy From Freecloud",
    img: "db1.jpg",
    opts: {
      albums: ["DB2"],
      bonus: [],
    },
  },
  {
    name: "God Knows I'm Good",
    img: "db1.jpg",
    opts: {
      albums: ["DB2"],
      bonus: [],
    },
  },
  {
    name: "Memory of a Free Festival",
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
    name: "Black Country Rock",
    img: "tmwstw.jpg",
    opts: {
      albums: ["TMWStW"],
      bonus: [],
    },
  },
  {
    name: "After All",
    img: "tmwstw.jpg",
    opts: {
      albums: ["TMWStW"],
      bonus: [],
    },
  },
  {
    name: "Running Gun Blues",
    img: "tmwstw.jpg",
    opts: {
      albums: ["TMWStW"],
      bonus: [],
    },
  },
  {
    name: "Saviour Machine",
    img: "tmwstw.jpg",
    opts: {
      albums: ["TMWStW"],
      bonus: [],
    },
  },
  {
    name: "She Shook Me Cold",
    img: "tmwstw.jpg",
    opts: {
      albums: ["TMWStW"],
      bonus: [],
    },
  },
  {
    name: "The Man Who Sold the World",
    img: "tmwstw.jpg",
    opts: {
      albums: ["TMWStW"],
      bonus: [],
    },
  },
  {
    name: "The Supermen",
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
    name: "Eight Line Poem",
    img: "hd.jpg",
    opts: {
      albums: ["HD"],
      bonus: [],
    },
  },
  {
    name: "Life On Mars?",
    img: "hd.jpg",
    opts: {
      albums: ["HD"],
      bonus: [],
    },
  },
  {
    name: "Kooks",
    img: "hd.jpg",
    opts: {
      albums: ["HD"],
      bonus: [],
    },
  },
  {
    name: "Quicksand",
    img: "hd.jpg",
    opts: {
      albums: ["HD"],
      bonus: [],
    },
  },
  {
    name: "Fill Your Heart",
    img: "hd.jpg",
    opts: {
      albums: ["HD"],
      bonus: [],
    },
  },
  {
    name: "Andy Warhol",
    img: "hd.jpg",
    opts: {
      albums: ["HD"],
      bonus: [],
    },
  },
  {
    name: "Song For Bob Dylan",
    img: "hd.jpg",
    opts: {
      albums: ["HD"],
      bonus: [],
    },
  },
  {
    name: "Queen Bitch",
    img: "hd.jpg",
    opts: {
      albums: ["HD"],
      bonus: [],
    },
  },
  {
    name: "The Bewlay Brothers",
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
    name: "Soul Love",
    img: "zs.jpg",
    opts: {
      albums: ["ZS"],
      bonus: [],
    },
  },
  {
    name: "Moonage Daydream",
    img: "zs.jpg",
    opts: {
      albums: ["ZS"],
      bonus: [],
    },
  },
  {
    name: "Starman",
    img: "zs.jpg",
    opts: {
      albums: ["ZS"],
      bonus: [],
    },
  },
  {
    name: "It Ain't Easy",
    img: "zs.jpg",
    opts: {
      albums: ["ZS"],
      bonus: [],
    },
  },
  {
    name: "Lady Stardust",
    img: "zs.jpg",
    opts: {
      albums: ["ZS"],
      bonus: [],
    },
  },
  {
    name: "Star",
    img: "zs.jpg",
    opts: {
      albums: ["ZS"],
      bonus: [],
    },
  },
  {
    name: "Hang On To Yourself",
    img: "zs.jpg",
    opts: {
      albums: ["ZS"],
      bonus: [],
    },
  },
  {
    name: "Ziggy Stardust",
    img: "zs.jpg",
    opts: {
      albums: ["ZS"],
      bonus: [],
    },
  },
  {
    name: "Suffragette City",
    img: "zs.jpg",
    opts: {
      albums: ["ZS"],
      bonus: [],
    },
  },
  {
    name: "Rock 'n' Roll Suicide",
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
    name: "Drive-In Saturday",
    img: "as.jpg",
    opts: {
      albums: ["AS"],
      bonus: [],
    },
  },
  {
    name: "Panic in Detroit",
    img: "as.jpg",
    opts: {
      albums: ["AS"],
      bonus: [],
    },
  },
  {
    name: "Cracked Actor",
    img: "as.jpg",
    opts: {
      albums: ["AS"],
      bonus: [],
    },
  },
  {
    name: "Time",
    img: "as.jpg",
    opts: {
      albums: ["AS"],
      bonus: [],
    },
  },
  {
    name: "The Prettiest Star",
    img: "as.jpg",
    opts: {
      albums: ["AS"],
      bonus: [],
    },
  },
  {
    name: "Let's Spend The Night Together",
    img: "as.jpg",
    opts: {
      albums: ["AS"],
      bonus: [],
    },
  },
  {
    name: "The Jean Genie",
    img: "as.jpg",
    opts: {
      albums: ["AS"],
      bonus: [],
    },
  },
  {
    name: "Lady Grinning Soul",
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
    name: "I Wish You Would",
    img: "pinups.jpg",
    opts: {
      albums: ["PU"],
      bonus: [],
      cover: true,
    },
  },
  {
    name: "See Emily Play",
    img: "pinups.jpg",
    opts: {
      albums: ["PU"],
      bonus: [],
      cover: true,
    },
  },
  {
    name: "Everything's Alright",
    img: "pinups.jpg",
    opts: {
      albums: ["PU"],
      bonus: [],
      cover: true,
    },
  },
  {
    name: "I Can't Explain",
    img: "pinups.jpg",
    opts: {
      albums: ["PU"],
      bonus: [],
      cover: true,
    },
  },
  {
    name: "Friday On My Mind",
    img: "pinups.jpg",
    opts: {
      albums: ["PU"],
      bonus: [],
      cover: true,
    },
  },
  {
    name: "Sorrow",
    img: "pinups.jpg",
    opts: {
      albums: ["PU"],
      bonus: [],
      cover: true,
    },
  },
  {
    name: "Don't Bring Me Down",
    img: "pinups.jpg",
    opts: {
      albums: ["PU"],
      bonus: [],
      cover: true,
    },
  },
  {
    name: "Shapes of Things",
    img: "pinups.jpg",
    opts: {
      albums: ["PU"],
      bonus: [],
      cover: true,
    },
  },
  {
    name: "Anyway, Anyhow, Anywhere",
    img: "pinups.jpg",
    opts: {
      albums: ["PU"],
      bonus: [],
      cover: true,
    },
  },
  {
    name: "Where Have All the Good Times Gone",
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
    name: "Sweet Thing",
    img: "dd.jpg",
    opts: {
      albums: ["DD"],
      bonus: [],
    },
  },
  {
    name: "Candidate",
    img: "dd.jpg",
    opts: {
      albums: ["DD"],
      bonus: [],
    },
  },
  {
    name: "Sweet Thing (Reprise)",
    img: "dd.jpg",
    opts: {
      albums: ["DD"],
      bonus: [],
    },
  },
  {
    name: "Rebel Rebel",
    img: "dd.jpg",
    opts: {
      albums: ["DD"],
      bonus: [],
    },
  },
  {
    name: "Rock 'n' Roll With Me",
    img: "dd.jpg",
    opts: {
      albums: ["DD"],
      bonus: [],
    },
  },
  {
    name: "We Are The Dead",
    img: "dd.jpg",
    opts: {
      albums: ["DD"],
      bonus: [],
    },
  },
  {
    name: "1984",
    img: "dd.jpg",
    opts: {
      albums: ["DD"],
      bonus: [],
    },
  },
  {
    name: "Big Brother",
    img: "dd.jpg",
    opts: {
      albums: ["DD"],
      bonus: [],
    },
  },
  {
    name: "1984/Dodo",
    img: "dd.jpg",
    opts: {
      albums: ["DD"],
      bonus: [],
      bside: true,
    },
  },
  {
    name: "Growin' Up",
    img: "dd.jpg",
    opts: {
      albums: ["DD"],
      bonus: [],
      cover: true,
      bside: true,
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
    name: "Fascination",
    img: "ya.jpg",
    opts: {
      albums: ["YA"],
      bonus: [],
    },
  },
  {
    name: "Right",
    img: "ya.jpg",
    opts: {
      albums: ["YA"],
      bonus: [],
    },
  },
  {
    name: "Somebody Up There Likes Me",
    img: "ya.jpg",
    opts: {
      albums: ["YA"],
      bonus: [],
    },
  },
  {
    name: "Across the Universe",
    img: "ya.jpg",
    opts: {
      albums: ["YA"],
      bonus: [],
      cover: true,
    },
  },
  {
    name: "Can You Hear Me",
    img: "ya.jpg",
    opts: {
      albums: ["YA"],
      bonus: [],
    },
  },
  {
    name: "Fame",
    img: "ya.jpg",
    opts: {
      albums: ["YA"],
      bonus: [],
    },
  },
  {
    name: "John, I'm Only Dancing (Again)",
    img: "gouster.jpg",
    opts: {
      albums: ["Gouster"],
      bonus: [],
    },
  },
  {
    name: "Somebody Up There Likes Me",
    img: "gouster.jpg",
    opts: {
      albums: ["Gouster"],
      bonus: [],
    },
  },
  {
    name: "Who Can I Be Now?",
    img: "gouster.jpg",
    opts: {
      albums: ["Gouster"],
      bonus: [],
    },
  },
  {
    name: "Right",
    img: "gouster.jpg",
    opts: {
      albums: ["Gouster"],
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
    name: "Word On A Wing",
    img: "sts.jpg",
    opts: {
      albums: ["StS"],
      bonus: [],
    },
  },
  {
    name: "TVC15",
    img: "sts.jpg",
    opts: {
      albums: ["StS"],
      bonus: [],
    },
  },
  {
    name: "Stay",
    img: "sts.jpg",
    opts: {
      albums: ["StS"],
      bonus: [],
    },
  },
  {
    name: "Wild Is The Wind",
    img: "sts.jpg",
    opts: {
      albums: ["StS"],
      bonus: [],
      cover: true,
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
    name: "What In The World",
    img: "low.jpg",
    opts: {
      albums: ["Low"],
      bonus: [],
    },
  },
  {
    name: "Sound and Vision",
    img: "low.jpg",
    opts: {
      albums: ["Low"],
      bonus: [],
    },
  },
  {
    name: "Always Crashing In the Same Car",
    img: "low.jpg",
    opts: {
      albums: ["Low"],
      bonus: [],
    },
  },
  {
    name: "Be My Wife",
    img: "low.jpg",
    opts: {
      albums: ["Low"],
      bonus: [],
    },
  },
  {
    name: "A New Career In A New Town",
    img: "low.jpg",
    opts: {
      albums: ["Low"],
      bonus: [],
      instrumental: true,
    },
  },
  {
    name: "Warszawa",
    img: "low.jpg",
    opts: {
      albums: ["Low"],
      bonus: [],
      instrumental: true,
    },
  },
  {
    name: "Art Decade",
    img: "low.jpg",
    opts: {
      albums: ["Low"],
      bonus: [],
      instrumental: true,
    },
  },
  {
    name: "Weeping Wall",
    img: "low.jpg",
    opts: {
      albums: ["Low"],
      bonus: [],
      instrumental: true,
    },
  },
  {
    name: "Subterraneans",
    img: "low.jpg",
    opts: {
      albums: ["Low"],
      bonus: [],
      instrumental: true,
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
    name: "''Heroes''",
    img: "heroes.jpg",
    opts: {
      albums: ["Heroes"],
      bonus: [],
    },
  },
  {
    name: "Sons of the Silent Age",
    img: "heroes.jpg",
    opts: {
      albums: ["Heroes"],
      bonus: [],
    },
  },
  {
    name: "Blackout",
    img: "heroes.jpg",
    opts: {
      albums: ["Heroes"],
      bonus: [],
    },
  },
  {
    name: "V-2 Schneider",
    img: "heroes.jpg",
    opts: {
      albums: ["Heroes"],
      bonus: [],
    },
  },
  {
    name: "Sense of Doubt",
    img: "heroes.jpg",
    opts: {
      albums: ["Heroes"],
      bonus: [],
    },
  },
  {
    name: "Moss Garden",
    img: "heroes.jpg",
    opts: {
      albums: ["Heroes"],
      bonus: [],
    },
  },
  {
    name: "Neuköln",
    img: "heroes.jpg",
    opts: {
      albums: ["Heroes"],
      bonus: [],
    },
  },
  {
    name: "The Secret Life of Arabia",
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
    name: "Move On",
    img: "lodger.jpg",
    opts: {
      albums: ["Lodger"],
      bonus: [],
    },
  },
  {
    name: "Yassassin (Turkish for ''Long Live'')",
    img: "lodger.jpg",
    opts: {
      albums: ["Lodger"],
      bonus: [],
    },
  },
  {
    name: "Red Sails",
    img: "lodger.jpg",
    opts: {
      albums: ["Lodger"],
      bonus: [],
    },
  },
  {
    name: "D.J.",
    img: "lodger.jpg",
    opts: {
      albums: ["Lodger"],
      bonus: [],
    },
  },
  {
    name: "Look Back In Anger",
    img: "lodger.jpg",
    opts: {
      albums: ["Lodger"],
      bonus: [],
    },
  },
  {
    name: "Boys Keep Swinging",
    img: "lodger.jpg",
    opts: {
      albums: ["Lodger"],
      bonus: [],
    },
  },
  {
    name: "Repetition",
    img: "lodger.jpg",
    opts: {
      albums: ["Lodger"],
      bonus: [],
    },
  },
  {
    name: "Red Money",
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
    name: "Scary Monsters (and Super Creeps)",
    img: "smasc.jpg",
    opts: {
      albums: ["SMaSC"],
      bonus: [],
    },
  },
  {
    name: "Ashes to Ashes",
    img: "smasc.jpg",
    opts: {
      albums: ["SMaSC"],
      bonus: [],
    },
  },
  {
    name: "Fashion",
    img: "smasc.jpg",
    opts: {
      albums: ["SMaSC"],
      bonus: [],
    },
  },
  {
    name: "Teenage Wildlife",
    img: "smasc.jpg",
    opts: {
      albums: ["SMaSC"],
      bonus: [],
    },
  },
  {
    name: "Scream Like A Baby",
    img: "smasc.jpg",
    opts: {
      albums: ["SMaSC"],
      bonus: [],
    },
  },
  {
    name: "Kingdom Come",
    img: "smasc.jpg",
    opts: {
      albums: ["SMaSC"],
      bonus: [],
    },
  },
  {
    name: "Because You're Young",
    img: "smasc.jpg",
    opts: {
      albums: ["SMaSC"],
      bonus: [],
    },
  },
  {
    name: "It's No Game (No. 2)",
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
      cover: true,
    },
  },
  {
    name: "Let's Dance",
    img: "dance.jpg",
    opts: {
      albums: ["Dance"],
      bonus: [],
    },
  },
  {
    name: "Without You",
    img: "dance.jpg",
    opts: {
      albums: ["Dance"],
      bonus: [],
    },
  },
  {
    name: "Ricochet",
    img: "dance.jpg",
    opts: {
      albums: ["Dance"],
      bonus: [],
    },
  },
  {
    name: "Criminal World",
    img: "dance.jpg",
    opts: {
      albums: ["Dance"],
      bonus: [],
    },
  },
  {
    name: "Cat People (Putting Out Fire)",
    img: "dance.jpg",
    opts: {
      albums: ["Dance"],
      bonus: [],
    },
  },
  {
    name: "Shake It",
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
    name: "God Only Knows",
    img: "tonight.jpg",
    opts: {
      albums: ["Tonight"],
      bonus: [],
      cover: true,
    },
  },
  {
    name: "Tonight",
    img: "tonight.jpg",
    opts: {
      albums: ["Tonight"],
      bonus: [],
    },
  },
  {
    name: "Neighborhood Threat",
    img: "tonight.jpg",
    opts: {
      albums: ["Tonight"],
      bonus: [],
    },
  },
  {
    name: "Blue Jean",
    img: "tonight.jpg",
    opts: {
      albums: ["Tonight"],
      bonus: [],
    },
  },
  {
    name: "Tumble and Twirl",
    img: "tonight.jpg",
    opts: {
      albums: ["Tonight"],
      bonus: [],
    },
  },
  {
    name: "I Keep Forgettin'",
    img: "tonight.jpg",
    opts: {
      albums: ["Tonight"],
      bonus: [],
    },
  },
  {
    name: "Dancing With The Big Boys",
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
    name: "Beat Of Your Drum",
    img: "nlmd.jpg",
    opts: {
      albums: ["NLMD"],
      bonus: [],
    },
  },
  {
    name: "Never Let Me Down",
    img: "nlmd.jpg",
    opts: {
      albums: ["NLMD"],
      bonus: [],
    },
  },
  {
    name: "Zeroes",
    img: "nlmd.jpg",
    opts: {
      albums: ["NLMD"],
      bonus: [],
    },
  },
  {
    name: "Glass Spider",
    img: "nlmd.jpg",
    opts: {
      albums: ["NLMD"],
      bonus: [],
    },
  },
  {
    name: "Shining Star (Makin' My Love)",
    img: "nlmd.jpg",
    opts: {
      albums: ["NLMD"],
      bonus: [],
    },
  },
  {
    name: "New York's In Love",
    img: "nlmd.jpg",
    opts: {
      albums: ["NLMD"],
      bonus: [],
    },
  },
  {
    name: "'87 and Cry",
    img: "nlmd.jpg",
    opts: {
      albums: ["NLMD"],
      bonus: [],
    },
  },
  {
    name: "Too Dizzy",
    img: "nlmd.jpg",
    opts: {
      albums: ["NLMD"],
      bonus: [],
    },
  },
  {
    name: "Bang Bang",
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
    name: "I Feel Free",
    img: "btwn.jpg",
    opts: {
      albums: ["BTWN"],
      bonus: [],
      cover: true,
    },
  },
  {
    name: "Black Tie / White Noise",
    img: "btwn.jpg",
    opts: {
      albums: ["BTWN"],
      bonus: [],
    },
  },
  {
    name: "Jump They Say",
    img: "btwn.jpg",
    opts: {
      albums: ["BTWN"],
      bonus: [],
    },
  },
  {
    name: "Nite Flights",
    img: "btwn.jpg",
    opts: {
      albums: ["BTWN"],
      bonus: [],
    },
  },
  {
    name: "Pallas Athena",
    img: "btwn.jpg",
    opts: {
      albums: ["BTWN"],
      bonus: [],
    },
  },
  {
    name: "Miracle Goodnight",
    img: "btwn.jpg",
    opts: {
      albums: ["BTWN"],
      bonus: [],
    },
  },
  {
    name: "Don't Let Me Down & Down",
    img: "btwn.jpg",
    opts: {
      albums: ["BTWN"],
      bonus: [],
    },
  },
  {
    name: "Looking for Lester",
    img: "btwn.jpg",
    opts: {
      albums: ["BTWN"],
      bonus: [],
    },
  },
  {
    name: "I Know It's Gonna Happen Someday",
    img: "btwn.jpg",
    opts: {
      albums: ["BTWN"],
      bonus: [],
    },
  },
  {
    name: "The Wedding Song",
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
    name: "South Horizon",
    img: "tbos.jpg",
    opts: {
      albums: ["TBoS"],
      bonus: [],
    },
  },
  {
    name: "The Mysteries",
    img: "tbos.jpg",
    opts: {
      albums: ["TBoS"],
      bonus: [],
    },
  },
  {
    name: "Bleed Like a Craze, Dad",
    img: "tbos.jpg",
    opts: {
      albums: ["TBoS"],
      bonus: [],
    },
  },
  {
    name: "Strangers When We Meet",
    img: "tbos.jpg",
    opts: {
      albums: ["TBoS"],
      bonus: [],
    },
  },
  {
    name: "Dead Against It",
    img: "tbos.jpg",
    opts: {
      albums: ["TBoS"],
      bonus: [],
    },
  },
  {
    name: "Untitled No. 1",
    img: "tbos.jpg",
    opts: {
      albums: ["TBoS"],
      bonus: [],
    },
  },
  {
    name: "Ian Fish, UK Heir",
    img: "tbos.jpg",
    opts: {
      albums: ["TBoS"],
      bonus: [],
    },
  },
  {
    name: "Buddha of Suburbia (Reprise)",
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
    name: "The Hearts Filthy Lesson",
    img: "outside.jpg",
    opts: {
      albums: ["Outside"],
      bonus: [],
    },
  },
  {
    name: "A Small Plot of Land",
    img: "outside.jpg",
    opts: {
      albums: ["Outside"],
      bonus: [],
    },
  },
  {
    name: "Segue: Baby Grace (A Horrid Cassette",
    img: "outside.jpg",
    opts: {
      albums: ["Outside"],
      bonus: [],
    },
  },
  {
    name: "Hallo Spaceboy",
    img: "outside.jpg",
    opts: {
      albums: ["Outside"],
      bonus: [],
    },
  },
  {
    name: "The Motel",
    img: "outside.jpg",
    opts: {
      albums: ["Outside"],
      bonus: [],
    },
  },
  {
    name: "I Have Not Been To Oxford Town",
    img: "outside.jpg",
    opts: {
      albums: ["Outside"],
      bonus: [],
    },
  },
  {
    name: "No Control",
    img: "outside.jpg",
    opts: {
      albums: ["Outside"],
      bonus: [],
    },
  },
  {
    name: "Segue: Algeria Touchshriek",
    img: "outside.jpg",
    opts: {
      albums: ["Outside"],
      bonus: [],
    },
  },
  {
    name: "The Voyeur of Utter Destruction (as Beauty)",
    img: "outside.jpg",
    opts: {
      albums: ["Outside"],
      bonus: [],
    },
  },
  {
    name: "Segue: Ramona A. Stone / I Am With Name",
    img: "outside.jpg",
    opts: {
      albums: ["Outside"],
      bonus: [],
    },
  },
  {
    name: "Wishful Beginnings",
    img: "outside.jpg",
    opts: {
      albums: ["Outside"],
      bonus: [],
    },
  },
  {
    name: "We Prick You",
    img: "outside.jpg",
    opts: {
      albums: ["Outside"],
      bonus: [],
    },
  },
  {
    name: "Segue: Nathan Adler Pt. 1",
    img: "outside.jpg",
    opts: {
      albums: ["Outside"],
      bonus: [],
    },
  },
  {
    name: "I'm Deranged",
    img: "outside.jpg",
    opts: {
      albums: ["Outside"],
      bonus: [],
    },
  },
  {
    name: "Thru' These Architect's Eyes",
    img: "outside.jpg",
    opts: {
      albums: ["Outside"],
      bonus: [],
    },
  },
  {
    name: "Segue: Nathan Adler Pt. 2",
    img: "outside.jpg",
    opts: {
      albums: ["Outside"],
      bonus: [],
    },
  },
  {
    name: "Strangers When We Meet",
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
    name: "Battle for Britain (The Letter)",
    img: "earthling.jpg",
    opts: {
      albums: ["Earthling"],
      bonus: [],
    },
  },
  {
    name: "Seven Years in Tibet",
    img: "earthling.jpg",
    opts: {
      albums: ["Earthling"],
      bonus: [],
    },
  },
  {
    name: "Dead Man Walking",
    img: "earthling.jpg",
    opts: {
      albums: ["Earthling"],
      bonus: [],
    },
  },
  {
    name: "Telling Lies",
    img: "earthling.jpg",
    opts: {
      albums: ["Earthling"],
      bonus: [],
    },
  },
  {
    name: "The Last Thing You Should Do",
    img: "earthling.jpg",
    opts: {
      albums: ["Earthling"],
      bonus: [],
    },
  },
  {
    name: "I'm Afraid of Americans",
    img: "earthling.jpg",
    opts: {
      albums: ["Earthling"],
      bonus: [],
    },
  },
  {
    name: "Law (Earthlings on Fire)",
    img: "earthling.jpg",
    opts: {
      albums: ["Earthling"],
      bonus: [],
    },
  },
  {
    name: "I'm Afraid of Americans (Nine Inch Nails V1 Mix)",
    img: "earthling.jpg",
    opts: {
      albums: ["Earthling"],
      bonus: [],
      bside: true,
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
    name: "Survive",
    img: "hours.jpg",
    opts: {
      albums: ["hours"],
      bonus: [],
    },
  },
  {
    name: "I'm Dreaming My Life",
    img: "hours.jpg",
    opts: {
      albums: ["hours"],
      bonus: [],
    },
  },
  {
    name: "Seven",
    img: "hours.jpg",
    opts: {
      albums: ["hours"],
      bonus: [],
    },
  },
  {
    name: "What's Really Happening?",
    img: "hours.jpg",
    opts: {
      albums: ["hours"],
      bonus: [],
    },
  },
  {
    name: "The Pretty Things Are Going To Hell",
    img: "hours.jpg",
    opts: {
      albums: ["hours"],
      bonus: [],
    },
  },
  {
    name: "New Angels of Promise",
    img: "hours.jpg",
    opts: {
      albums: ["hours"],
      bonus: [],
    },
  },
  {
    name: "Brilliant Adventure",
    img: "hours.jpg",
    opts: {
      albums: ["hours"],
      bonus: [],
    },
  },
  {
    name: "The Dreamers",
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
    name: "Slip Away",
    img: "heathen.jpg",
    opts: {
      albums: ["Heathen"],
      bonus: [],
    },
  },
  {
    name: "Slow Burn",
    img: "heathen.jpg",
    opts: {
      albums: ["Heathen"],
      bonus: [],
    },
  },
  {
    name: "Afraid",
    img: "heathen.jpg",
    opts: {
      albums: ["Heathen"],
      bonus: [],
    },
  },
  {
    name: "I've Been Waiting For You",
    img: "heathen.jpg",
    opts: {
      albums: ["Heathen"],
      bonus: [],
    },
  },
  {
    name: "I Would Be Your Slave",
    img: "heathen.jpg",
    opts: {
      albums: ["Heathen"],
      bonus: [],
    },
  },
  {
    name: "I Took A Trip On A Gemini Spaceship",
    img: "heathen.jpg",
    opts: {
      albums: ["Heathen"],
      bonus: [],
    },
  },
  {
    name: "5:15 The Angels Have Gone",
    img: "heathen.jpg",
    opts: {
      albums: ["Heathen"],
      bonus: [],
    },
  },
  {
    name: "Everyone Says 'Hi'",
    img: "heathen.jpg",
    opts: {
      albums: ["Heathen"],
      bonus: [],
    },
  },
  {
    name: "A Better Future",
    img: "heathen.jpg",
    opts: {
      albums: ["Heathen"],
      bonus: [],
    },
  },
  {
    name: "Heathen (The Rays)",
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
    name: "Never Get Old",
    img: "reality.jpg",
    opts: {
      albums: ["Reality"],
      bonus: [],
    },
  },
  {
    name: "The Loneliest Guy",
    img: "reality.jpg",
    opts: {
      albums: ["Reality"],
      bonus: [],
    },
  },
  {
    name: "Looking For Water",
    img: "reality.jpg",
    opts: {
      albums: ["Reality"],
      bonus: [],
    },
  },
  {
    name: "She'll Drive The Big Car",
    img: "reality.jpg",
    opts: {
      albums: ["Reality"],
      bonus: [],
    },
  },
  {
    name: "Days",
    img: "reality.jpg",
    opts: {
      albums: ["Reality"],
      bonus: [],
    },
  },
  {
    name: "Fall Dog Bombs The Moon",
    img: "reality.jpg",
    opts: {
      albums: ["Reality"],
      bonus: [],
    },
  },
  {
    name: "Try Some, Buy Some",
    img: "reality.jpg",
    opts: {
      albums: ["Reality"],
      bonus: [],
    },
  },
  {
    name: "Reality",
    img: "reality.jpg",
    opts: {
      albums: ["Reality"],
      bonus: [],
    },
  },
  {
    name: "Bring Me The Disco King",
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
    name: "The Stars (Are Out Tonight)",
    img: "tnd.jpg",
    opts: {
      albums: ["TND"],
      bonus: [],
    },
  },
  {
    name: "Love Is Lost",
    img: "tnd.jpg",
    opts: {
      albums: ["TND"],
      bonus: [],
    },
  },
  {
    name: "Where Are We Now?",
    img: "tnd.jpg",
    opts: {
      albums: ["TND"],
      bonus: [],
    },
  },
  {
    name: "Valentine's Day",
    img: "tnd.jpg",
    opts: {
      albums: ["TND"],
      bonus: [],
    },
  },
  {
    name: "If You Can See Me",
    img: "tnd.jpg",
    opts: {
      albums: ["TND"],
      bonus: [],
    },
  },
  {
    name: "I'd Rather Be High",
    img: "tnd.jpg",
    opts: {
      albums: ["TND"],
      bonus: [],
    },
  },
  {
    name: "Boss of Me",
    img: "tnd.jpg",
    opts: {
      albums: ["TND"],
      bonus: [],
    },
  },
  {
    name: "Dancing Out In Space",
    img: "tnd.jpg",
    opts: {
      albums: ["TND"],
      bonus: [],
    },
  },
  {
    name: "How Does The Grass Grow?",
    img: "tnd.jpg",
    opts: {
      albums: ["TND"],
      bonus: [],
    },
  },
  {
    name: "(You Will) Set The World On Fire",
    img: "tnd.jpg",
    opts: {
      albums: ["TND"],
      bonus: [],
    },
  },
  {
    name: "You Feel So Lonely You Could Die",
    img: "tnd.jpg",
    opts: {
      albums: ["TND"],
      bonus: [],
    },
  },
  {
    name: "Heat",
    img: "tnd.jpg",
    opts: {
      albums: ["TND"],
      bonus: [],
    },
  },
  {
    name: "Love Is Lost (Hello Steve Reich Mix by James Murphy for the DFA)",
    img: "tnd.jpg",
    opts: {
      albums: ["TND"],
      bonus: [],
      bside: true,
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
  {
    name: "Lazarus",
    img: "blackstar.jpg",
    opts: {
      albums: ["blackstar"],
      bonus: [],
    },
  },
  {
    name: "Sue (Or In A Season of Crime)",
    img: "blackstar.jpg",
    opts: {
      albums: ["blackstar"],
      bonus: [],
    },
  },
  {
    name: "Girl Loves Me",
    img: "blackstar.jpg",
    opts: {
      albums: ["blackstar"],
      bonus: [],
    },
  },
  {
    name: "Dollar Days",
    img: "blackstar.jpg",
    opts: {
      albums: ["blackstar"],
      bonus: [],
    },
  },
  {
    name: "I Can't Give Everything Away",
    img: "blackstar.jpg",
    opts: {
      albums: ["blackstar"],
      bonus: [],
    },
  },
];
