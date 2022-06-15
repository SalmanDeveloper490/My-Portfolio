import Skeleton from "react-loading-skeleton";

const IntroSkeleton = () => {
  return (
    <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5 m-12">
      <h1 className="text-center mt-2">
        <Skeleton width={236} height={36} />
      </h1>
      <h4 className="text-center mt-2">
        <Skeleton width={240} height={36} />
      </h4>
      <p className="text-center mt-4">
        <Skeleton width={260} height={5} />
      </p>
      <div className="flex align-center justify-center">
        <div className="mx-2 mb-2">
          <Skeleton circle={true} height={40} width={40} />
        </div>
        <div className="mx-2 mb-2">
          <Skeleton circle={true} height={40} width={40} />
        </div>
        <div className="mx-2 mb-2">
          <Skeleton circle={true} height={40} width={40} />
        </div>
        <div className="mx-2 mb-2">
          <Skeleton circle={true} height={40} width={40} />
        </div>
        <div className="mx-2 mb-2">
          <Skeleton circle={true} height={40} width={40} />
        </div>
      </div>
    </div>
  );
};

export default IntroSkeleton;
