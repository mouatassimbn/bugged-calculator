import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faTimes,
  faMinus,
  faPlus,
  faDivide,
  faPercentage,
  faEquals,
  faBackspace,
} from "@fortawesome/free-solid-svg-icons";

const Icon = (icon) => {
  let resultIcon;

  switch (icon) {
    case "darkMode":
      resultIcon = faMoon;
      break;
    case "lightMode":
      resultIcon = faSun;
      break;
    case "times":
      resultIcon = faTimes;
      break;
    case "divide":
      resultIcon = faDivide;
      break;
    case "minus":
      resultIcon = faMinus;
      break;
    case "plus":
      resultIcon = faPlus;
      break;
    case "percentage":
      resultIcon = faPercentage;
      break;
    case "equals":
      resultIcon = faEquals;
      break;
    case "backspace":
    default:
      resultIcon = faBackspace;
      break;
  }

  return <FontAwesomeIcon className="icon" icon={resultIcon} />;
};

export default Icon;
