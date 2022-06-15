const Top = ({ dark, setDark }) => {
  return (
    <>
      <div data-aos="zoom-in" className="flex justify-center content-center">
        <img
          src={require("../../assets/images/sun-svgrepo-com.svg").default}
          alt="sun"
          className="w-8 mr-2"
        />
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setDark(!dark)}
            checked={dark ? "checked" : ""}
          />
          <span className="slider round"></span>
        </label>
        <img
          src={require("../../assets/images/night-svgrepo-com.svg").default}
          alt="night"
          className="w-8 ml-2"
        />
      </div>
    </>
  );
};

export default Top;
