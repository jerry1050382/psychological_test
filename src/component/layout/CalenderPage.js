'use client';


export default function CalenderPage({year, month, day, weekDay}) {


  return (
    <>
        <div className="max-w-2xl mx-auto p-6">
        <DatePicker onChange={onChange} needConfirm />;
        <div className='relative bg-gray-500 w-[320px] h-[680px]  rounded-2xl flex items-center justify-center flex-col'>
            <div className='absolute top-2 left-4'>{year} </div>
            <div className='absolute top-2 right-4'> 五月 </div>
            <div className='text-[240px]'> 01 </div>
            <div className='text-[60px]'> 星期四 </div>
        </div>
        </div>
    </>
  );
}