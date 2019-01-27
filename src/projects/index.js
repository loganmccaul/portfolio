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

import Usage from './usage';

export default [
  {
    id: 'work',
    name: 'Work',
    projects: [
      Usage,
    ],
  },
  {
    id: 'fun',
    name: 'Fun',
    projects: [],
  },
];
