import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ntpType } from "@/types/ntpTypes";
import { Link } from "react-router";

const NTPCard = ({ ntp }: { ntp: ntpType }) => {
  return (
    <Card
      key={ntp?.id}
      className="text-center shadow-light-shadow p-10 xl:p-[60px] 3xl:p-20  gap-0 bg-white justify-between"
    >
      <CardHeader className="p-0">
        <CardTitle className="text-[var(--grey-10)] text-[28px] md:text-3xl xl:text-[34px] 3xl:text-5xl font-bold font-raleway leading-[1.3] pb-5 xl:pb-6 3xl:pb-[30px]">
          {ntp?.title}
        </CardTitle>
        <img
          className="w-full"
          src="/assets/images/props/breaker.jpg"
          alt="breaker line"
        />
      </CardHeader>
      <CardContent className="font-medium text-[var(--grey-30)] 3xl:text-xl leading-[1.5] p-0 pt-[30px] pb-10 xl:pt-10 xl:pb-[60px]">
        {ntp?.description}
      </CardContent>
      <Link to={ntp?.link}>
        <CardAction className="flex justify-center items-center w-full px-0">
          <Button className="w-full py-4 xl:py-[18px] 3xl bg-foreground text-[var(--grey-20)] text-base xl:text-lg 3xl:text-xl font-medium flex items-center gap-2.5 leading-[1.25] cursor-pointer shadow-light-shadow">
            <span>Learn More</span>{" "}
            <svg
              className=""
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.5 10C3.5 9.58578 3.83579 9.25 4.25 9.25L14.8879 9.25L10.7302 5.29062C10.4316 5.00353 10.4223 4.52875 10.7094 4.23017C10.9965 3.93159 11.4713 3.92228 11.7698 4.20937L17.2698 9.45937C17.4169 9.60078 17.5 9.79598 17.5 10C17.5 10.204 17.4169 10.3992 17.2698 10.5406L11.7698 15.7906C11.4713 16.0777 10.9965 16.0684 10.7094 15.7698C10.4223 15.4713 10.4316 14.9965 10.7302 14.7094L14.8879 10.75L4.25 10.75C3.83579 10.75 3.5 10.4142 3.5 10Z"
                fill="#262626"
              />
            </svg>
          </Button>
        </CardAction>
      </Link>
    </Card>
  );
};

export default NTPCard;
