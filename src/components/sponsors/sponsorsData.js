import oneStop from '../../assets/sponsors/1stop.png';
import codeForCause from '../../assets/sponsors/codeForCause.png';
import jetBrains from '../../assets/sponsors/jetBrains.jpg';
import newtonSchool from '../../assets/sponsors/newton.png';
import prepbytes from '../../assets/sponsors/prepbytes.png';
import jinaAi from '../../assets/sponsors/jinaAi.png';
import tezos from '../../assets/sponsors/tezos.png';
import polygon from '../../assets/sponsors/Polygon.png';
import replit from '../../assets/sponsors/replitt.png';
import noticebard from '../../assets/sponsors/noticebard.svg';
import filecoin from '../../assets/sponsors/filecoin.png';
import celo from '../../assets/sponsors/celo.png';
import hackclub from '../../assets/sponsors/hackclub.png';
import devfolio from '../../assets/sponsors/devfolio.png';
import github from '../../assets/sponsors/github.png';
import skit from '../../assets/sponsors/skit2.png';

const sponsorsData = {
  Ivory: [
    { title: '1Stop.ai', image: oneStop },
    { title: 'PrepBytes', image: prepbytes },
    { title: 'Newton School', image: newtonSchool },
  ],
  Silver: [
    { title: 'Hackclub', image: hackclub },
    { title: 'Skit', image: skit },
  ],
  Gold: [
    { title: 'Code For Cause', image: codeForCause },
    { title: 'Jet Brains', image: jetBrains },
  ],
  Diamond: [
    { title: 'Devfolio', image: devfolio },
    { title: 'Repl.it', image: replit },
    { title: 'GitHub', image: github },
  ],
  Platinum: [
    { title: 'Tezos', image: tezos },
    { title: 'Celo', image: celo },
    { title: 'Polygon', image: polygon },
    { title: 'FileCoin', image: filecoin },
    { title: 'Jina AI', image: jinaAi },
  ],
  Media: [{ title: 'Noticebard', image: noticebard }],
};

export default sponsorsData;
