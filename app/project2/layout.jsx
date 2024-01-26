import Navbar from "./components/Navbar";

export default function layout({ children }) {
  return (
    <div className=" w-full h-full  overflow-hidden bg-primary">
      <div className=" p-6 sm:px-16 flex items-center justify-center">
        <div className="w-full xl:max-w-[1280px] ">
          <Navbar />
        </div>
      </div>

      {children}
    </div>
  );
}
