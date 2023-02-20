import data from "../../data.json";
import { useState } from "react";
import ScoreCard from "./ScoreCard";
import { ScoreInformation } from "../../models/ScoreInformation";

function Summary() {
  const [scoreData, setScoreData] = useState<ScoreInformation[]>(data);
  return (
    <div className="font-grotesk xl:flex xl:flex-row xl:shadow-xl xl:rounded-3xl">
      <section className="bg-gradient-to-t from-royal-blue to-slate-blue flex flex-col place-items-center px-16 py-5 rounded-b-3xl xl:rounded-3xl xl:w-2/5">
        <h1 className="font-bold text-lg text-light-lavender">Your Result</h1>
        <div className="bg-gradient-to-t from-persian-blue to-violet-blue rounded-full flex flex-col p-8 place-items-center my-4 w-36">
          <p className="text-6xl font-extrabold text-white">67</p>
          <p className="text-gray-400">of 100</p>
        </div>
        <p className="text-2xl font-bold text-white">Great</p>
        <p className="text-md mb-5 text-light-lavender">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </section>
      <section className="p-5 w-full xl:w-3/5">
        <h2 className="text-xl mb-6 font-bold">Summary</h2>
        {scoreData.map((scoreInfo: ScoreInformation) => {
          return (
            <ScoreCard scoreInformation={scoreInfo} key={scoreInfo.category} />
          );
        })}
        <button className="w-full bg-dark-gray p-4 rounded-5xl text-white hover:bg-gradient-to-t hover:from-royal-blue hover:to-slate-blue mb-6">
          Continue
        </button>
      </section>
    </div>
  );
}

export default Summary;
