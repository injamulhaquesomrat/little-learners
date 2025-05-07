import { teacherTeamItems } from "@/fakedata/teacherTeamItems";
import TeamCard from "./TeamCard";

const TeamContent = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-10 sm:gap-6 lg:gap-10 3xl:gap-[50px]">
      {teacherTeamItems.map((team) => (
        <TeamCard key={team?.id} team={team} />
      ))}
    </div>
  );
};

export default TeamContent;
