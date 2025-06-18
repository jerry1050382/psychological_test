'use client';

export default function MobileFrame({children}) {

  return (
    <>
      <div className="w-[380px] h-[852px] p-[52px] bg-white 
        rounded-2xl flex justify-center items-center
          relative overflow-hidden
      ">
          {children}
        </div>
    </>
  );

}