import Skeleton from "react-loading-skeleton";

const TopSkeleton = () => {
  return (
    <div className="flex justify-center content-center">
      <Skeleton circle={true} height={34} width={32} />
      <div className="px-2">
        <Skeleton count={1} height={34} width={60} />
      </div>
      <Skeleton circle={true} height={34} width={32} />
    </div>
  );
};

export default TopSkeleton;
