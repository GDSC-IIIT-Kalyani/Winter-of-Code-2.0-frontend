import mojo from "../../../assets/organizations/moja-global.png";
import llvm from "../../../assets/organizations/llvm.png";
import geeta from "../../../assets/organizations/gitaInit.png";
import hoppscotch from "../../../assets/organizations/Hoppscotch.png";
import autoDL from "../../../assets/organizations/auto-dl.png";
import jina from "../../../assets/organizations/jinaAi.png";
import edualgo from "../../../assets/organizations/abc.jpg";
import skit from "../../../assets/organizations/skit.png";
import asyn from "../../../assets/organizations/asyncAPI4.png";
import gdsc from "../../../assets/organizations/gdsc.png";

const SliderData = [
  {
    org_name: "Moja Global",
    title: "FLINT-UI",
    Ideas: ["Implement E2E and unit-testing for FLINT-UI"],
    mentors: [
      { name: "Shloka Gupta", email: "shlokaprincess101@gmail.com" },
      { name: "Rajiv Singh", email: "rajivperfect007@gmail.com" },
      { name: "Anirudh Panda", email: "anirudhpandaofficial@gmail.com" },
    ],
    repo_link: "https://github.com/moja-global/FLINT-UI",
    org_img: mojo,
    tags: "all web",
    org_tag: "all mojo"
  },
  {
    org_name: "Moja Global",
    title: "FLINT-Cloud",
    Ideas: ["Implement testing for FLINT-Cloud"],
    mentors: [
      { name: "Shloka Gupta", email: "shlokaprincess101@gmail.com" },
      { name: "Rajiv Singh", email: "rajivperfect007@gmail.com" },
      { name: "Anirudh Panda", email: "anirudhpandaofficial@gmail.com" },
    ],
    repo_link: "https://github.com/moja-global/FLINT.cloud",
    org_img: mojo,
    tags: "all web cloud",
    org_tag: "all mojo"
  },
  {
    org_name: "Moja Global",
    title: "Community Website",
    Ideas: ["Implement new features for the community website."],
    mentors: [
      { name: "Shloka Gupta", email: "shlokaprincess101@gmail.com" },
      { name: "Rajiv Singh", email: "rajivperfect007@gmail.com" },
      { name: "Anirudh Panda", email: "anirudhpandaofficial@gmail.com" },
    ],
    repo_link: "https://github.com/moja-global/community-website",
    org_img: mojo,
    tags: "all web",
    org_tag: "all mojo"
  },
  {
    org_name: "Moja Global",
    title: "Moja Global docs",
    Ideas: [" Improve docs for moja global"],
    mentors: [
      { name: "Shloka Gupta", email: "shlokaprincess101@gmail.com" },
      { name: "Rajiv Singh", email: "rajivperfect007@gmail.com" },
      { name: "Anirudh Panda", email: "anirudhpandaofficial@gmail.com" },
    ],
    repo_link: "https://github.com/moja-global/moja_global_docs",
    org_img: mojo,
    tags: "all docs",
    org_tag: "all mojo"
  },
  {
    org_name: "LLVM",
    title: "LLVM flang",
    Ideas: [
      "Requires decent knowledge up to C++17 and compilers.",
      "Go through the huge codebase to get a feel of the codebase.Find and work on issues.",
    ],
    mentors: [
      { name: "Nimish Mishra", email: "nimish_bt18@iiitkalyani.ac.in" },
    ],
    repo_link: "https://github.com/llvm/llvm-project",
    org_img: llvm,
    tags: "all compiler",
    org_tag: "all llvm"
  },
  {
    org_name: "The Gita Initiative",
    title: "The Gita API",
    Ideas: [
      "Implement a search on translations and commentary schemas, the desired search would be similar as in v1 of our app and can be taken as a reference for the same sample working is available at https://bhagavadgita.io/search?query=krishna",
      "Add Sanskrit audio recitation to the schema, Here the contributor is supposed to scrape and process the recitations available from public domain and get the required audioFiles and those would be added to the verse schema , We’ll decide on the recitation sources mutually",
      "Reciprocate the same to our Gql Repo",
      "Can solve Pending Issues at repo",
    ],
    mentors: [
      { name: "Anubhav Gupta", email: "anubhavgupta2260@gmail.com" },
      { name: "Palak Thapar", email: "P.thapar99@gmail.com" },
    ],
    repo_link: "https://github.com/gita/bhagavad-gita-api",
    org_img: geeta,
    tags: "all web",
    org_tag: "all geeta"
  },
  {
    org_name: "The Gita Initiative",
    title: "Gita Flutter App",
    Ideas: [
      "Add desired changes once to the MVP along with our Flutter Engineer",
      "Add Components and Develop Design from Figma File",
      "Refinement of PreExisting UI",
    ],
    mentors: [
      { name: "Anubhav Gupta", email: "anubhavgupta2260@gmail.com" },
      { name: "Palak Thapar", email: "P.thapar99@gmail.com" },
    ],
    repo_link: "https://github.com/gita/Bhagavad-Gita-App",
    org_img: geeta,
    tags: "all app",
    org_tag: "all geeta"
  },
  {
    org_name: "The Gita Initiative",
    title: "Gita Frontend",
    Ideas: [
      "Build UI Components from Figma Design",
      "Interact with backend to show data",
      "Refinement of PreExisting UI",
    ],
    mentors: [
      { name: "Anubhav Gupta", email: "anubhavgupta2260@gmail.com" },
      { name: "Palak Thapar", email: "P.thapar99@gmail.com" },
    ],
    repo_link: "https://github.com/gita/bg-frontend",
    org_img: geeta,
    tags: "all web",
    org_tag: "all geeta"
  },
  {
    org_name: "Auto DL",
    title: "Auto-DL",
    Ideas: ["Please look at the issues in the repository and resolve them"],
    mentors: [{ name: "Aditya Srivastava", email: "adi@auto-dl.tech" }],
    repo_link: "https://github.com/Auto-DL/Auto-DL",
    org_img: autoDL,
    tags: "all app",
    org_tag: "all autodl"
  },
  {
    org_name: "Auto DL",
    title: "AutoDL Website",
    Ideas: ["Please look at the issues in the repository and resolve them"],
    mentors: [{ name: "Aditya Srivastava", email: "adi@auto-dl.tech" }],
    repo_link: "https://github.com/Auto-DL/auto-dl.github.io",
    org_img: autoDL,
    tags: "all web",
    org_tag: "all autodl"
  },
  {
    org_name: "Auto DL",
    title: "Recommendation System ",
    Ideas: ["Please look at the issues in the repository and resolve them"],
    mentors: [{ name: "Aditya Srivastava", email: "adi@auto-dl.tech" }],
    repo_link: "https://github.com/Auto-DL/Recommendation-System",
    org_img: autoDL,
    tags: "all ml",
    org_tag: "all autodl"
  },
  {
    org_name: "Auto DL",
    title: "Deployment-Flask",
    Ideas: ["Please look at the issues in the repository and resolve them"],
    mentors: [{ name: "Aditya Srivastava", email: "adi@auto-dl.tech" }],
    repo_link: "https://github.com/Auto-DL/Deployment-Flask",
    org_img: autoDL,
    tags: "all web cloud",
    org_tag: "all autodl"
  },
  {
    org_name: "Auto DL",
    title: "k8s-deployment",
    Ideas: ["Please look at the issues in the repository and resolve them"],
    mentors: [{ name: "Aditya Srivastava", email: "adi@auto-dl.tech" }],
    repo_link: "https://github.com/Auto-DL/k8s-deployment",
    org_img: autoDL,
    tags: "all app cloud",
    org_tag: "all autodl"
  },
  {
    org_name: "Hoppscotch",
    title: "Web Client",
    Ideas: [
      "OpenAPI specifications support",
      "API documentation generator",
      "Workspaces",
    ],
    mentors: [
      { name: "Liyas Thomas", email: "liyascthomas@gmail.com" },
      { name: "Andrew Bastin", email: "andrewbastin.k@gmail.com" },
    ],
    repo_link: "https://github.com/hoppscotch/hoppscotch",
    org_img: hoppscotch,
    tags: "all web",
    org_tag: "all hoppscotch"
  },
  {
    org_name: "Jina AI",
    title: "Build with Jina",
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
    mentors: [{ name: "Jyoti Bisht", email: "jyoti.bisht@jina.ai" }],
    repo_link: "https://github.com/jina-ai/jina/issues/3650",
    org_img: jina,
    tags: "all ml",
    org_tag: "all jina"
  },
  {
    org_name: "Jina AI",
    title: "Write a Blog",
    Ideas: [
      '<a href="https://github.com/jina-ai/jina/issues/3643">Write a blog on - "Jina and open source - what actually Jina is"',
      '<a href="https://github.com/jina-ai/jina/issues/3642">Write a blog on - "What is neural search and how does Jina use neural search?"',
    ],
    mentors: [{ name: "Jyoti Bisht", email: "jyoti.bisht@jina.ai" }],
    repo_link: "https://github.com/jina-ai/jina/issues/3643",
    org_img: jina,
    tags: "all doc",
    org_tag: "all jina"
  },
  {
    org_name: "Edualgo Academy",
    title: "Grokking-ML",
    Ideas: [
      "Implement Machine Learning in Finance, any model on financial usage of ML will be considered. Priority will be given to RNN models for the prediction of Stock trends.",
      "Implement Pose Detection using Computer Vision. Pose detections on Yoga, Sleep Posture, Gym posture and dance postures will be given priority.",
    ],
    mentors: [
      { name: "Abhijit Tripathy", email: "founder@edualgoacademy.com" },
    ],
    repo_link: "https://github.com/edualgo/Grokking-Machine-Learning",
    org_img: edualgo,
    tags: "all ml",
    org_tag: "all edulago"
  },
  {
    org_name: "Edualgo Academy",
    title: "Tango",
    Ideas: [
      "Implement templates of Django framework for eCommerce, saas, homepage, portfolio, magazine template, showcase, startup etc.",
      "Implement the same as a python module.",
    ],
    mentors: [
      { name: "Abhijit Tripathy", email: "founder@edualgoacademy.com" },
    ],
    repo_link: "https://github.com/edualgo/Tango",
    org_img: edualgo,
    tags: "all web",
    org_tag: "all edualgo"
  },
  {
    org_name: "Skit AI",
    title: "kaldis serve",
    Ideas: ["COMMING SOON"],
    mentors: [
      { name: "Achintya Shankhdhar", email: "achintya.shankhdhar@skit.ai" },
      { name: "Swaraj", email: "swaraj@vernacular.ai" },
      { name: "Sanchit Ahuja", email: "sanchit.ahuja@skit.ai" },
      { name: "Vipul Sharma", email: "vipul@skit.ai" },
      { name: "Pushkal Katara", email: "pushkal@skit.ai" },
      { name: "Jaivarsan", email: "jaivarsan@skit.ai" },
    ],
    repo_link: "https://github.com/skit-ai/kaldi-serve",
    org_img: skit,
    tags: "all ml",
    org_tag: "all skit"
  },
  {
    org_name: "Skit AI",
    title: "Dialogy",
    Ideas: ["COMMING SOON"],
    mentors: [
      { name: "Achintya Shankhdhar", email: "achintya.shankhdhar@skit.ai" },
      { name: "Swaraj", email: "swaraj@vernacular.ai" },
      { name: "Sanchit Ahuja", email: "sanchit.ahuja@skit.ai" },
      { name: "Vipul Sharma", email: "vipul@skit.ai" },
      { name: "Pushkal Katara", email: "pushkal@skit.ai" },
      { name: "Jaivarsan", email: "jaivarsan@skit.ai" },
    ],
    repo_link: "https://github.com/skit-ai/dialogy",
    org_img: skit,
    tags: "all ml",
    org_tag: "all skit"
  },
  {
    org_name: "Skit AI",
    title: "sentinel",
    Ideas: ["COMMING SOON"],
    mentors: [
      { name: "Achintya Shankhdhar", email: "achintya.shankhdhar@skit.ai" },
      { name: "Swaraj", email: "swaraj@vernacular.ai" },
      { name: "Sanchit Ahuja", email: "sanchit.ahuja@skit.ai" },
      { name: "Vipul Sharma", email: "vipul@skit.ai" },
      { name: "Pushkal Katara", email: "pushkal@skit.ai" },
      { name: "Jaivarsan", email: "jaivarsan@skit.ai" },
    ],
    repo_link: "https://github.com/skit-ai/sentinel",
    org_img: skit,
    tags: "all ml",
    org_tag: "all skit"
  },
  {
    org_name: "Skit AI",
    title: "EEVEE",
    Ideas: ["COMMING SOON"],
    mentors: [
      { name: "Achintya Shankhdhar", email: "achintya.shankhdhar@skit.ai" },
      { name: "Swaraj", email: "swaraj@vernacular.ai" },
      { name: "Sanchit Ahuja", email: "sanchit.ahuja@skit.ai" },
      { name: "Vipul Sharma", email: "vipul@skit.ai" },
      { name: "Pushkal Katara", email: "pushkal@skit.ai" },
      { name: "Jaivarsan", email: "jaivarsan@skit.ai" },
    ],
    repo_link: "https://github.com/skit-ai/eevee",
    org_img: skit,
    tags: "all ml",
    org_tag: "all skit"
  },
  {
    org_name: "Skit AI",
    title: "St Record",
    Ideas: ["COMMING SOON"],
    mentors: [
      { name: "Achintya Shankhdhar", email: "achintya.shankhdhar@skit.ai" },
      { name: "Swaraj", email: "swaraj@vernacular.ai" },
      { name: "Sanchit Ahuja", email: "sanchit.ahuja@skit.ai" },
      { name: "Vipul Sharma", email: "vipul@skit.ai" },
      { name: "Pushkal Katara", email: "pushkal@skit.ai" },
      { name: "Jaivarsan", email: "jaivarsan@skit.ai" },
    ],
    repo_link: "https://github.com/skit-ai/st-record",
    org_img: skit,
    tags: "all ml",
    org_tag: "all skit"
  },
  {
    org_name: "Skit AI",
    title: "TTS Middleware",
    Ideas: ["COMMING SOON"],
    mentors: [
      { name: "Achintya Shankhdhar", email: "achintya.shankhdhar@skit.ai" },
      { name: "Swaraj", email: "swaraj@vernacular.ai" },
      { name: "Sanchit Ahuja", email: "sanchit.ahuja@skit.ai" },
      { name: "Vipul Sharma", email: "vipul@skit.ai" },
      { name: "Pushkal Katara", email: "pushkal@skit.ai" },
      { name: "Jaivarsan", email: "jaivarsan@skit.ai" },
    ],
    repo_link: "https://github.com/skit-ai/tts-middleware",
    org_img: skit,
    tags: "all ml",
    org_tag: "all skit"
  },
  {
    org_name: "AsyncAPI",
    title: "AsyncAPI",
    Ideas: [
      "<a target ='_blank' href = 'https://github.com/asyncapi/parser-js/issues/157'>ISSUE 1</a>",
      "<a target ='_blank' href = 'https://github.com/asyncapi/parser-js/issues/252'>ISSUE 2</a>",
      "<a target ='_blank' href = 'https://github.com/asyncapi/parser-js/issues/99'>ISSUE 3</a>",
      "<a target ='_blank' href = 'https://github.com/asyncapi/generator/issues/369'>ISSUE 4</a>",
      "<a target ='_blank' href = 'https://github.com/asyncapi/website/issues/204'>ISSUE 5</a>",
      "<a target ='_blank' href = 'https://github.com/asyncapi/website/issues/267'>ISSUE 6</a>",
    ],
    mentors: [{ name: "Khadija Sidhpuri", email: "ksidhpuri@gmail.com" }],
    repo_link: "https://github.com/asyncapi",
    org_img: asyn,
    tags: "all app",
    org_tag: "all asyn"
  },
  //
  //UNFINISHED
  //
  //

  //
  // PROJECTS OF GDSC IIIT KALYANI
  //
  {
    org_name: "GDSC IIIT KALYANI",
    title: "Cogniwapp",
    Ideas: ["Explore the project and come up with your own ideas"],
    mentors: [
      { name: "Vijay Shankar", email: "499_bt19@iiitkalyani.ac.in" },
      { name: "Pallav Saxena", email: "pallav20578@iiitkalyani.ac.in" },
      { name: "Vineel Sai", email: "vineelsai26@gmail.com" },
    ],
    repo_link: "https://github.com/GDSC-IIIT-Kalyani/CogniWapp",
    org_img: gdsc,
    tags: "all app",
    org_tag: "all gdsc"
  },
  {
    org_name: "GDSC IIIT KALYANI",
    title: "RAKSHA",
    Ideas: ["Explore the project and come up with your own ideas"],
    mentors: [{ name: "Isha Shaw", email: "461_bt19@iiitkalyani.ac.in" }],
    repo_link: "https://github.com/GDSC-IIIT-Kalyani/RAKSHA",
    org_img: gdsc,
    tags: "all ml web py",
    org_tag: "all gdsc"
  },
  {
    org_name: "GDSC IIIT KALYANI",
    title: "WOC 2.0 WEBSITE",
    Ideas: ["Explore the project and come up with your own ideas"],
    mentors: [
      { name: "Prayag Biswas", email: "tirtha070@gmail.com" },
      { name: "Akshit Chodhary", email: "akshit.chodhary@gmail.com" },
    ],
    repo_link:
      "https://github.com/GDSC-IIIT-Kalyani/Winter-of-Code-2.0-frontend",
    org_img: gdsc,
    tags: "all web",
    org_tag: "all gdsc"
  },
  {
    org_name: "GDSC IIIT KALYANI",
    title: "MediCare",
    Ideas: ["Explore the project and come up with your own ideas"],
    mentors: [
      { name: "Medhir Manoj", email: "474_bt19@iiitkalyani.ac.in" },
      { name: "Isha Shaw", email: "461_bt19@iiitkalyani.ac.in" },
    ],
    repo_link: "https://github.com/GDSC-IIIT-Kalyani/MediCare-Prime",
    org_img: gdsc,
    tags: "all ml web py",
    org_tag: "all gdsc"
  },
  {
    org_name: "GDSC IIIT KALYANI",
    title: "Certificate generator",
    Ideas: ["Explore the project and come up with your own ideas"],
    mentors: [
      { name: "GDSC IIIT KALYANI", email: "dsc.iiitkalyani@gmail.com" },
    ],
    repo_link:
      "https://github.com/GDSC-IIIT-Kalyani/WOC-certificate-generator-Hactoberfest2021",
    org_img: gdsc,
    tags: "all py",
    org_tag: "all gdsc"
  },

  //
  // OTHER GDSC PROJECTS
  //
  {
    org_name: "Dezenix",
    title: "Frontend Reactjs",
    Ideas: ["Explore the project and come up with your own ideas"],
    mentors: [
      { name: "Raja Kumar Singh", email: "rajasingh8889@gmail.com" },
      { name: "Shree Mishra", email: "mishrashree18@gmail.com" },
    ],
    repo_link: "https://github.com/Dezenix/frontend-reactjs",
    org_img: gdsc,
    tags: "all web",
    org_tag: "all gdsc"
  },
  {
    org_name: "Dezenix",
    title: "Frontend HTML CSS JS",
    Ideas: ["Explore the project and come up with your own ideas"],
    mentors: [
      { name: "Soumya Banerjee", email: "soumyabanerjee783@gmail.com" },
      { name: "Pranay Gupta", email: "pgupta@duck.com" },
      { name: "Pallavi Upadhyay", email: "upallavi1812@gmail.com" },
    ],
    repo_link: "https://github.com/Dezenix/frontend-html-css-js",
    org_img: gdsc,
    tags: "all web",
    org_tag: "all gdsc"
  },
  {
    org_name: "Dezenix",
    title: "Website Screens",
    Ideas: ["Explore the project and come up with your own ideas"],
    mentors: [
      { name: "Govind Singh Ranawat", email: "govindkrsingh0605@gmail.com" },
      { name: "Ayush Ajay", email: "ayushajay07@gmail.com" },
    ],
    repo_link: "https://github.com/Dezenix/website-screens",
    org_img: gdsc,
    tags: "all web",
    org_tag: "all gdsc"
  },
  {
    org_name: "Dezenix",
    title: "Native Frontend Flutter",
    Ideas: ["Explore the project and come up with your own ideas"],
    mentors: [
      {
        name: "Naveena Ramesh Vardhini J",
        email: "naveenarameshvardhini@gmail.com",
      },
    ],
    repo_link: "https://github.com/Dezenix/native-frontend-flutter",
    org_img: gdsc,
    tags: "all app",
    org_tag: "all gdsc"
  },
  {
    org_name: "Dezenix",
    title: "Mobile Screens",
    Ideas: ["Explore the project and come up with your own ideas"],
    mentors: [
      {
        name: "Naveena Ramesh Vardhini J",
        email: "naveenarameshvardhini@gmail.com",
      },
      { name: "Garvitraj Pandey", email: "garvitraj.reachme@gmail.com" },
    ],
    repo_link: "https://github.com/Dezenix/mobile-screens",
    org_img: gdsc,
    tags: "all web",
    org_tag: "all gdsc"
  },
  {
    org_name: "GDSC BIT Mesra off Campus Deoghar",
    title: "WOC21",
    Ideas: ["Explore the project and come up with your own ideas"],
    mentors: [{ name: "Akash Dip", email: "akash.bitd@gmail.com" }],
    repo_link: "https://github.com/Developer-Student-Club-BIT-Deoghar/WOC21",
    org_img: gdsc,
    tags: "all web",
    org_tag: "all gdsc"
  },

  {
    org_name: "GDSC LNCT",
    title: "GDSC LNCT App",
    Ideas: ["Explore the project and come up with your own ideas"],
    mentors: [{ name: "Adarsh Soni", email: "adarshsoni6729@gmail.com" }],
    repo_link: "https://github.com/dsclnct/DSC-App",
    org_img: gdsc,
    tags: "all app",
    org_tag: "all gdsc"
  },
  {
    org_name: "GDSC IIEST",
    title: "Todo CLI",
    Ideas: ["Explore the project and come up with your own ideas"],
    mentors: [
      { name: "Abhiroop Mukherjee", email: "abhiroop.m25902@gmail.com" },
    ],
    repo_link: "https://github.com/dsc-iiest/todo-cli",
    org_img: gdsc,
    tags: "all app",
    org_tag: "all gdsc"
  },
  {
    org_name: "GDSC LBCE",
    title: "Main Website",
    Ideas: ["1.This is a community website for GDSC of Dr. Lankapalli College of Engineering to showcase past and future events, displaying our motto, core team members, leads and our projects.",
    "2. For the Requirment details <a target ='_blank' href='https://docs.google.com/document/d/1-x4Ds8WQW8wJVayKYp5GVFQF_PkJu5LO/edit'>Refer from here</a>"
  ],
    mentors: [{ name: "Ashish Pradhan", email: "ashishad14@gmail.com" }],
    repo_link: "https://github.com/Gdsc-Lbce/GDSC_LBCE_Website",
    org_img: gdsc,
    tags: "all web",
    org_tag: "all gdsc"
  },
  {
    org_name: "GSDC I2IT",
    title: "Clippin n grafting-Backend",
    Ideas: ["Explore the project and come up with your own ideas"],
    mentors: [{ name: "Akhil Bhalerao", email: "iamakhil1408@gmail.com" }],
    repo_link:
      "https://github.com/Google-Developer-Student-Club-I2IT/Clippin_n_grafting-Backend",
    org_img: gdsc,
    tags: "all web",
    org_tag: "all gdsc"
  },
  {
    org_name: "GDSC USICT",
    title: "Laayak App",
    Ideas: [
      "Build a professional UI for both light and dark themes",
      "Build a feature to download the class attendance in multiple formats such as csv, pdf, etc",
      "Add a portal for the teacher to upload marks and build a page for the students to see their progress in graph formats",
      "In-app notifications whenever an update is pushed",
      "Add an Admin Level Artechiture",
      "Add Cross Browser support to the App",
      "<b>Build the backend of the app through NodeJs and make use of APIs</b>",
      "<b>Add a feature for Video Conferencing through the app</b>",
      "<b>Build a Time Table Generator using all the subjects once entered</b>",
    ],
    mentors: [{ name: "Himesh Nayak", email: "himeshnayak015@gmail.com" }],
    repo_link: "https://github.com/LaayaK/LaayakApp",
    org_img: gdsc,
    tags: "all app",
    org_tag: "all gdsc"
  },
  {
    org_name: "GDSC USICT",
    title: "Laayak Web",
    Ideas: [
      "Build a professional UI for both light and dark themes",
      "Build a feature to download the class attendance in multiple formats such as csv, pdf, etc",
      "Add a portal for the teacher to upload marks and build a page for the students to see their progress in graph formats",
      "In-app notifications whenever an update is pushed",
      "Add an Admin Level Artechiture",
      "Add Cross Browser support to the Web",
      "<b>Build the backend of the app through NodeJs and make use of APIs</b>",
      "<b>Add a feature for Video Conferencing through the app</b>",
      "<b>Build a Time Table Generator using all the subjects once entered</b>",
    ],
    mentors: [
      { name: "Parv Sharma", email: "pscoder10462@gmail.com" },
      { name: "Kashish Jain", email: "jainabhishek7204@gmail.com" },
    ],
    repo_link: "https://github.com/LaayaK/LaayakWeb",
    org_img: gdsc,
    tags: "all web",
    org_tag: "all gdsc"
  },
  {
    org_name: "GDSC AUM",
    title: "Human Activity",
    Ideas: ["Explore the project and come up with your own ideas"],
    mentors: [
      { name: "Smitkumar Bhatesara", email: "smitgpatel8585@gmail.com" },
    ],
    repo_link: "https://github.com/smit8585/WOC-2.0-GDSC-AUM-",
    org_img: gdsc,
    tags: "all web",
    org_tag: "all gdsc"
  },
  {
    org_name: "GDSC RTU",
    title: "Resume Builder",
    Ideas: ["Explore the project and come up with your own ideas"],
    mentors: [{ name: "Shubham Gautam", email: "ishubham2101@gmail.com" }],
    repo_link: "https://github.com/GDSC-RTU/resume-builder",
    org_img: gdsc,
    tags: "all web",
    org_tag: "all gdsc"
  },
  {
    org_name: "GDSC SNU",
    title: "gcptrack",
    Ideas: ["Explore the project and come up with your own ideas"],
    mentors: [
      { name: "Osama Bin Junaid", email: "osamabinjunaid36@gmail.com" },
    ],
    repo_link: "https://github.com/gdsc-snu/gcptrack",
    org_img: gdsc,
    tags: "all web",
    org_tag: "all gdsc"
  },
  {
    org_name: "GDSC SNU",
    title: "A10Dance",
    Ideas: ["Explore the project and come up with your own ideas"],
    mentors: [
      { name: "Hritik Kumar Singh", email: "singhhritik978@gmail.com" },
    ],
    repo_link: "https://github.com/gdsc-snu/A10Dance",
    org_img: gdsc,
    tags: "all web",
    org_tag: "all gdsc"
  },
  {
    org_name: "GDSC SNU",
    title: "CoalaDraw",
    Ideas: ["Explore the project and come up with your own ideas"],
    mentors: [
      { name: "Soumyadip Mondal", email: "mandal.soumyadip9714@gmail.com" },
    ],
    repo_link: "https://github.com/gdsc-snu/CoalaDraw",
    org_img: gdsc,
    tags: "all web",
    org_tag: "all gdsc"
  },
];
export default SliderData;
