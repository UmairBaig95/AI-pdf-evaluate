// src/components/Header.js
export default function Header() {
  return (
    <div className="p-2 pb-0 pt-8 max-w-[400px] md:max-w-[500px] lg:max-w-[550px] xl:hidden  mx-auto lg:mx-0 flex justify-between items-center">
      <div>
        <span className="text-[24px] font-[800] text-[#1E2026] font-mont">
          Hey IB Folks ! Unsure about the quality of your answers? &nbsp;
        </span>
        <span className="text-[#6947BF] text-[24px]  font-[800] font-mont">
          We get you.
        </span>
      </div>
    </div>
  );
}
