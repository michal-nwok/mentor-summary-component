import { ScoreInformation } from "../../models/ScoreInformation";

interface ScoreCardProps {
  scoreInformation: ScoreInformation;
}
const ScoreCard = ({ scoreInformation }: ScoreCardProps) => {
  const { score, category, icon } = scoreInformation;
  let color = "";
  switch (category.toLowerCase()) {
    case "reaction":
      color = "light-red";
      break;
    case "memory":
      color = "orange-yellow";
      break;
    case "verbal":
      color = "green-teal";
      break;
    case "visual":
      color = "cobalt-blue";
      break;
    default:
      color = "black";
  }

  return (
    <div
      className={`bg-${color}/10 w-full h-10 rounded-2xl flex justify-between items-center relative px-4 py-6 mb-4`}
    >
      <div className="flex">
        <img src={`icons/${icon}`} alt={category} />
        <span className={`text-${color} ml-3 font-bold`}>{category}</span>
      </div>
      <div className="">
        <span>{score}</span>
        <span className="text-gray-400"> / 100</span>
      </div>
    </div>
  );
};

export default ScoreCard;
