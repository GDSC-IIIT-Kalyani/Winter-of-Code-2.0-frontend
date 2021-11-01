import mojo from '../../../assets/organizations/moja-global.png';
import llvm from '../../../assets/organizations/llvm.png';
import geeta from '../../../assets/organizations/gitaInit.png';
import hoppscotch from '../../../assets/organizations/Hoppscotch.png';
import autoDL from '../../../assets/organizations/auto-dl.png';
import jina from '../../../assets/organizations/jinaAi.png';
import edualgo from '../../../assets/organizations/edualgoalt.png';

const SliderData = [
  {
    org_name: 'Moja Global',
    title: 'FLINT-UI',
    Ideas: ['Implement E2E and unit-testing for FLINT-UI'],
    mentors: [
      { name: 'Shloka Gupta', email: 'shlokaprincess101@gmail.com' },
      { name: 'Rajiv Singh', email: 'rajivperfect007@gmail.com' },
      { name: 'Anirudh Panda', email: 'anirudhpandaofficial@gmail.com' },
    ],
    repo_link: 'https://github.com/moja-global/FLINT-UI',
    org_img: mojo,
    tags: 'all web',
  },
  {
    org_name: 'Moja Global',
    title: 'FLINT-Cloud',
    Ideas: ['Implement testing for FLINT-Cloud'],
    mentors: [
      { name: 'Shloka Gupta', email: 'shlokaprincess101@gmail.com' },
      { name: 'Rajiv Singh', email: 'rajivperfect007@gmail.com' },
      { name: 'Anirudh Panda', email: 'anirudhpandaofficial@gmail.com' },
    ],
    repo_link: 'https://github.com/moja-global/FLINT.cloud',
    org_img: mojo,
    tags: 'all web cloud',
  },
  {
    org_name: 'Moja Global',
    title: 'Community Website',
    Ideas: ['Implement new features for the community website.'],
    mentors: [
      { name: 'Shloka Gupta', email: 'shlokaprincess101@gmail.com' },
      { name: 'Rajiv Singh', email: 'rajivperfect007@gmail.com' },
      { name: 'Anirudh Panda', email: 'anirudhpandaofficial@gmail.com' },
    ],
    repo_link: 'https://github.com/moja-global/community-website',
    org_img: mojo,
    tags: 'all web',
  },
  {
    org_name: 'Moja Global',
    title: 'Moja Global docs',
    Ideas: [' Improve docs for moja global'],
    mentors: [
      { name: 'Shloka Gupta', email: 'shlokaprincess101@gmail.com' },
      { name: 'Rajiv Singh', email: 'rajivperfect007@gmail.com' },
      { name: 'Anirudh Panda', email: 'anirudhpandaofficial@gmail.com' },
    ],
    repo_link: 'https://github.com/moja-global/moja_global_docs',
    org_img: mojo,
    tags: 'all docs',
  },
  {
    org_name: 'LLVM',
    title: 'LLVM flang',
    Ideas: [
      'Requires decent knowledge up to C++17 and compilers.',
      'Go through the huge codebase to get a feel of the codebase.Find and work on issues.',
    ],
    mentors: [
      { name: 'Nimish Mishra', email: 'nimish_bt18@iiitkalyani.ac.in' },
    ],
    repo_link: 'https://github.com/llvm/llvm-project',
    org_img: llvm,
    tags: 'all compiler',
  },
  {
    org_name: 'The Gita Initiative',
    title: 'The Gita API',
    Ideas: [
      'Implement a search on translations and commentary schemas, the desired search would be similar as in v1 of our app and can be taken as a reference for the same sample working is available at https://bhagavadgita.io/search?query=krishna',
      'Add Sanskrit audio recitation to the schema, Here the contributor is supposed to scrape and process the recitations available from public domain and get the required audioFiles and those would be added to the verse schema , We’ll decide on the recitation sources mutually',
      'Reciprocate the same to our Gql Repo',
      'Can solve Pending Issues at repo',
    ],
    mentors: [
      { name: 'Anubhav Gupta', email: 'anubhavgupta2260@gmail.com' },
      { name: 'Palak Thapar', email: 'P.thapar99@gmail.com' },
    ],
    repo_link: 'https://github.com/gita/bhagavad-gita-api',
    org_img: geeta,
    tags: 'all web',
  },
  {
    org_name: 'Gita Initiative',
    title: 'Gita Flutter App',
    Ideas: [
      'Add desired changes once to the MVP along with our Flutter Engineer',
      'Add Components and Develop Design from Figma File',
      'Refinement of PreExisting UI',
    ],
    mentors: [
      { name: 'Anubhav Gupta', email: 'anubhavgupta2260@gmail.com' },
      { name: 'Palak Thapar', email: 'P.thapar99@gmail.com' },
    ],
    repo_link: 'https://github.com/gita/Bhagavad-Gita-App',
    org_img: geeta,
    tags: 'all app',
  },
  {
    org_name: 'Gita Initiative',
    title: 'Gita Frontend',
    Ideas: [
      'Build UI Components from Figma Design',
      'Interact with backend to show data',
      'Refinement of PreExisting UI',
    ],
    mentors: [
      { name: 'Anubhav Gupta', email: 'anubhavgupta2260@gmail.com' },
      { name: 'Palak Thapar', email: 'P.thapar99@gmail.com' },
    ],
    repo_link: 'https://github.com/gita/Bhagavad-Gita-App',
    org_img: geeta,
    tags: 'all web',
  },
  {
    org_name: 'Auto DL',
    title: 'Auto-DL',
    Ideas: ['Please look at the issues in the repository and resolve them'],
    mentors: [{ name: 'Aditya Srivastava', email: 'adi@auto-dl.tech' }],
    repo_link: 'https://github.com/Auto-DL/Auto-DL',
    org_img: autoDL,
    tags: 'all app',
  },
  {
    org_name: 'Auto DL',
    title: 'AutoDL Website',
    Ideas: ['Please look at the issues in the repository and resolve them'],
    mentors: [{ name: 'Aditya Srivastava', email: 'adi@auto-dl.tech' }],
    repo_link: 'https://github.com/Auto-DL/auto-dl.github.io',
    org_img: autoDL,
    tags: 'all web',
  },
  {
    org_name: 'Auto DL',
    title: 'Recommendation System ',
    Ideas: ['Please look at the issues in the repository and resolve them'],
    mentors: [{ name: 'Aditya Srivastava', email: 'adi@auto-dl.tech' }],
    repo_link: 'https://github.com/Auto-DL/Recommendation-System',
    org_img: autoDL,
    tags: 'all ml',
  },
  {
    org_name: 'Auto DL',
    title: 'Deployment-Flask',
    Ideas: ['Please look at the issues in the repository and resolve them'],
    mentors: [{ name: 'Aditya Srivastava', email: 'adi@auto-dl.tech' }],
    repo_link: 'https://github.com/Auto-DL/Deployment-Flask',
    org_img: autoDL,
    tags: 'all web cloud',
  },
  {
    org_name: 'Auto DL',
    title: 'k8s-deployment',
    Ideas: ['Please look at the issues in the repository and resolve them'],
    mentors: [{ name: 'Aditya Srivastava', email: 'adi@auto-dl.tech' }],
    repo_link: 'https://github.com/Auto-DL/k8s-deployment',
    org_img: autoDL,
    tags: 'all app cloud',
  },
  {
    org_name: 'Hoppscotch',
    title: 'Web Client',
    Ideas: [
      'OpenAPI specifications support',
      'API documentation generator',
      'Workspaces',
    ],
    mentors: [{ name: '--', email: null }],
    repo_link: 'https://github.com/hoppscotch/hoppscotch',
    org_img: hoppscotch,
    tags: 'all web',
  },
  {
    org_name: 'Jina AI',
    title: 'Build with Jina',
    Ideas: [
      "<a href = 'https://github.com/jina-ai/jina/issues/3650'>Build using Jina : Shazam using Jina - enter an audio and search which song is it </a>",
      "<a href = 'https://github.com/jina-ai/jina/issues/3649'>Build using Jina : Pet image classification - upload image of your pet, find which breed it is/ info about it</a>",
      "<a href = 'https://github.com/jina-ai/jina/issues/3648'>Build using Jina : Movie recommender search engine!</a>",
      "<a href = 'https://github.com/jina-ai/jina/issues/3647'>Build using Jina : Build a search for weird data (not audio/text/image/video) but any other data!</a>",
      "<a href = 'https://github.com/jina-ai/jina/issues/3646'>Build using Jina : Match the manga - capture the expression and see which manga character fits you</a>",
      "<a href = 'https://github.com/jina-ai/jina/issues/3645'>Build using Jina : Find your celebrity twin image search!</a>",
      "<a href = 'https://github.com/jina-ai/jina/issues/3651'>Feature improvement : Meme search - support multilingual search for memes</a>",
      "<a href = 'https://github.com/jina-ai/jina/issues/3652'>Build using Jina : Product look-alike - enter a product, search for similar products</a>",
    ],
    mentors: [{ name: '--', email: null }],
    repo_link: 'https://github.com/jina-ai/jina/issues/3650',
    org_img: jina,
    tags: 'all ml',
  },
  {
    org_name: 'Jina AI',
    title: 'Write a Blog',
    Ideas: [
      '<a href="https://github.com/jina-ai/jina/issues/3643">Write a blog on - "Jina and open source - what actually Jina is"',
      '<a href="https://github.com/jina-ai/jina/issues/3642">Write a blog on - "What is neural search and how does Jina use neural search?"',
    ],
    mentors: [{ name: '--', email: null }],
    repo_link: 'https://github.com/jina-ai/jina/issues/3643',
    org_img: jina,
    tags: 'all doc',
  },
  {
    org_name: 'Edualgo Academy',
    title: 'Grokking-ML',
    Ideas: [
      'Implement Machine Learning in Finance, any model on financial usage of ML will be considered. Priority will be given to RNN models for the prediction of Stock trends.',
      'Implement Pose Detection using Computer Vision. Pose detections on Yoga, Sleep Posture, Gym posture and dance postures will be given priority.',
    ],
    mentors: [
      { name: 'Abhijit Tripathy', email: 'founder@edualgoacademy.com' },
    ],
    repo_link: 'https://github.com/edualgo/Grokking-Machine-Learning',
    org_img: edualgo,
    tags: 'all ml',
  },
  {
    org_name: 'Edualgo Academy',
    title: 'Tango',
    Ideas: [
      'Implement templates of Django framework for eCommerce, saas, homepage, portfolio, magazine template, showcase, startup etc.',
      'Implement the same as a python module.',
    ],
    mentors: [
      { name: 'Abhijit Tripathy', email: 'founder@edualgoacademy.com' },
    ],
    repo_link: 'https://github.com/edualgo/Tango',
    org_img: edualgo,
    tags: 'all web',
  },
];
export default SliderData;
