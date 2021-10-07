import oneStop from "../../assets/sponsors/1stop.png";
import codeForCause from "../../assets/sponsors/codeForCause.png";
import jetBrains from "../../assets/sponsors/jetBrains.jpg";
import newtonSchool from "../../assets/sponsors/newtonSchool.png";
import prepbytes from "../../assets/sponsors/prepbytes.png";
import jinaAi from "../../assets/sponsors/jinaAi.png";
import tezos from "../../assets/sponsors/tezos.png";
import polygon from "../../assets/sponsors/polygon.jpg";
import replit from "../../assets/sponsors/Replit.jpg";
import noticebard from "../../assets/sponsors/noticebard.png";
import filecoin from "../../assets/sponsors/filecoin.png";
import celo from "../../assets/sponsors/celo.png";
import hackclub from "../../assets/sponsors/hackclub.png";
import devfolio from "../../assets/sponsors/devfolio.png";

const sponsorsData = [
  [
    "Ivory Sponsors",
    [
      { title: "Newton School", image: newtonSchool },
      { title: "1Stop.ai", image: oneStop },
      { title: "PrepBytes", image: prepbytes },
    ],
  ],
  ["Diamond Sponsor", [{ title: "Devfolio", image: devfolio }]],
  ["Diamond Sponsor", [{ title: "Repl.it", image: replit }]],

  [
    "Gold Sponsors",
    [
      { title: "Code For Cause", image: codeForCause },
      { title: "Jet Brains", image: jetBrains },
    ],
  ],
  ["Silver Sponsors", [{ title: "Hackclub", image: hackclub }]],
  [
    "Platinum Sponsors",
    [
      { title: "Tezos", image: tezos },
      { title: "Celo", image: celo },
      { title: "Polygon", image: polygon },
    ],
  ],
  [
    "Platinum Sponsors",
    [
      { title: "FileCoin", image: filecoin },
      { title: "Jina AI", image: jinaAi },
    ],
  ],

  ["Media Partner", [{ title: "Noticebard", image: noticebard }]],
  ["Sponsors", [{ title: "Coming Soon" }]],
];

export default sponsorsData;
