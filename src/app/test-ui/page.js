'use client';
import { DatePicker } from 'antd';
import calenderPage from '@/component/layout/CalenderPage'


export default function TestUI() {
  
  const onChange = (date, dateString) => {
    console.log(date, dateString);
    alert("你選的是：" + dateString);
  };

  const days = [
    {year:"2025", month:"五月", day:"01", weekDay:"星期四"},
    {year:"2025", month:"五月", day:"01", weekDay:"星期四"},
    {year:"2025", month:"五月", day:"01", weekDay:"星期四"},
    {year:"2025", month:"五月", day:"01", weekDay:"星期四"},
    {year:"2025", month:"五月", day:"01", weekDay:"星期四"},
    {year:"2025", month:"五月", day:"01", weekDay:"星期四"},
    {year:"2025", month:"五月", day:"01", weekDay:"星期四"}
  ]

  return (
    <div className="max-w-2xl mx-auto p-6">
      <calenderPage year="2025" month="五月" day="01" weekDay="星期四"></calenderPage>
      <calenderPage year="2025" month="五月" day="01" weekDay="星期四"></calenderPage>
      <calenderPage year="2025" month="五月" day="01" weekDay="星期四"></calenderPage>
      <calenderPage year="2025" month="五月" day="01" weekDay="星期四"></calenderPage>
      <calenderPage year="2025" month="五月" day="01" weekDay="星期四"></calenderPage>
      <calenderPage year="2025" month="五月" day="01" weekDay="星期四"></calenderPage>
      <calenderPage year="2025" month="五月" day="01" weekDay="星期四"></calenderPage>

      {
      days.map((day) => (
        <CalenderPage key={}/>
      ))
    }
  
    </div>

  );
}