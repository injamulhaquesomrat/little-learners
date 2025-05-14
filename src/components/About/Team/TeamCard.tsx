import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { teacherTeamTypes } from "@/types/teamTypes";
import { Link } from "react-router";

const TeamCard = ({ team }: { team: teacherTeamTypes }) => {
  return (
    <Card className="bg-white p-[30px] xl:p-10 3xl:p-[50px] 3xl:gap-[30px]">
      {/* start::card header */}
      <CardHeader
        className="flex items-center gap-2.5 xl:gap-3 3xl:gap-4 p-0
      "
      >
        <div className="h-[60px] w-[60px] xl:h-20 xl:w-20 3xl:h-[100px] 3xl:w-[100px] min-w-[60px] flex justify-center items-center rounded-lg bg-[#FFF5F0] border-2 border-border overflow-hidden">
          <img
            className="w-full h-auto"
            src={team?.avatarImg}
            alt="ms. sarah anderson"
          />
        </div>
        <CardTitle className="text-xl xl:text-2xl 3xl:text-[30px] font-raleway font-extrabold text-text-muted">
          {team?.name}
        </CardTitle>
        <Link
          className="h-12 min-w-12 3xl:h-14 3xl:w-14 flex items-center justify-center border-2 border-border rounded-md bg-foreground ml-auto"
          to={`to:${team?.email}`}
        >
          <img src="/assets/icons/footer/email-icon.svg" alt="email icon" />
        </Link>
      </CardHeader>
      {/* end::card header */}

      {/* start::card content */}
      <CardContent className="text-text-muted xl:text-xl  border-2 border-border bg-background p-5 xl:p-6 3xl:p-[30px] rounded-[10px]">
        <h6 className="text-xl 3xl:text-2xl leading-[1.5] pb-3 font-semibold">
          {team?.headline}
        </h6>
        <p className="font-medium 3xl:text-xl">{team?.info}</p>
      </CardContent>
      {/* end::card content */}
    </Card>
  );
};

export default TeamCard;
