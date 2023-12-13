import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";
import UpickCover from "../../assets/UpickCover.png"
import MoonNewsCover from "../../assets/MoonNewsCover.png"
import MoonNewsMain from "../../assets/MoonNewsMain.png"
import UpickMain from "../../assets/UpickMain.png"

export const projectsData = [
  {
    id: 1,
    CoverImage: UpickCover,
    image: UpickMain,
    title: 'UPICK',
    category: 'IOS',
    technologies: ['SwiftUI', 'TMDB API', 'StreamingServiceInfo API', 'FirebaseAuth', 'Alamofire'],
    description: 'Upick is a movie picking app i built using the TMDB API, you can filter by Streaming Services, Genres, Year of release and so on to find the perfect movie for you, the app includes Bookmarking functionality aswell as Sign in with apple',
    githubLink: 'https://github.com/johnnybasgallop/UPICK',
  },

  {
    id: 2,
    CoverImage: MoonNewsCover,
    image: MoonNewsMain,
    title: 'Moon News',
    category: 'IOS',
    technologies: ['SwiftUI', 'Lottie', "Some API"],
    description: 'Moon News is a News App targeted specifically towards the Space enthusiast, covering everything from Rockets and SpaceX all the way to Black holes and the deep cosmos, I built this for my dads birthday since he loves space and reading the news in the morning',
    githubLink: 'https://github.com/johnnybasgallop/moonNews',
  },
 
];

// projects
export const projectsNav = [
{name: "All"},

  {
    name: "IOS",
  },

  {
    name: "Web",
  },
];
