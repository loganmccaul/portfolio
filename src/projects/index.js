/*
 Exports projects to be displayed in cards. Projects follow the below structure.

 #################### Project Structure ####################
 ! indicates required field

 id: String! (Used to generate details route and id)
 section: String! (Either work or fun)
 name: String!
 category: String
 cardDescription: String!
 image: Asset!
 cardImageTranslation: String! (Controls the clipped image on the card, Format of translate(x%, y%))
 liveLink: String
 codeLink: String
 details: String!
*/

export default [
  {
    id: 'usage',
    section: 'work',
    name: 'Usage',
    category: 'IBM Cloud',
    cardDescription: `Love to play with owner's hair tie run outside as soon as door open for jumps
                        off balcony gives owner dead mouse at present then poops in litter
                        box snatches yarn and fights with dog cat chases laser then plays in grass
                        finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows.`,
    image: 'usage.png',
    cardImageTranslation: 'transform: translate(-32%, -51%) scale(.5)',
    liveLink: 'https://cloud.ibm.com/billing/usage',
    restrictedLive: true,
    details: 'Test',
  },
  {
    id: 'search',
    section: 'work',
    name: 'Global Search',
    category: 'IBM Cloud',
    cardDescription: `Love to play with owner's hair tie run outside as soon as door open for jumps
                        off balcony gives owner dead mouse at present then poops in litter
                        box snatches yarn and fights with dog cat chases laser then plays in grass
                        finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows.`,
    image: 'search.png',
    cardImageTranslation: 'transform: translate(-41%, -25%) scale(.5)',
    liveLink: 'https://cloud.ibm.com/',
    restrictedLive: true,
    details: 'Test',
  },
  {
    id: 'cloudfoundry',
    section: 'work',
    name: 'Cloud Foundry',
    category: 'IBM Cloud',
    cardDescription: `Love to play with owner's hair tie run outside as soon as door open for jumps
                        off balcony gives owner dead mouse at present then poops in litter
                        box snatches yarn and fights with dog cat chases laser then plays in grass
                        finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows.`,
    image: 'cloudfoundry.png',
    cardImageTranslation: 'transform: translate(-41%, -32%) scale(.5)',
    liveLink: 'https://cloud.ibm.com/account/cloudfoundry',
    restrictedLive: true,
    details: 'Test',
  },
  {
    id: 'listener',
    section: 'fun',
    name: 'Listener',
    category: 'Logan\'s Lil',
    cardDescription: `Love to play with owner's hair tie run outside as soon as door open for jumps
                        off balcony gives owner dead mouse at present then poops in litter
                        box snatches yarn and fights with dog cat chases laser then plays in grass
                        finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows.`,
    image: 'listener.png',
    cardImageTranslation: 'transform: translate(-32%, -51%) scale(.5)',
    liveLink: 'https://loganslillistener.mybluemix.net',
    details: 'Test',
  },
  {
    id: 'soundbox',
    section: 'fun',
    name: 'Soundbox',
    category: 'Logan\'s Lil',
    cardDescription: `Love to play with owner's hair tie run outside as soon as door open for jumps
                        off balcony gives owner dead mouse at present then poops in litter
                        box snatches yarn and fights with dog cat chases laser then plays in grass
                        finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows.`,
    image: 'soundbox.png',
    cardImageTranslation: 'transform: translate(-35%, -29%) scale(.5)',
    liveLink: 'https://loganslilsoundbox.mybluemix.net',
    details: 'Test',
  },
];
