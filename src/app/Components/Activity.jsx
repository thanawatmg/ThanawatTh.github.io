import React from 'react'
import Good from '../../../public/good.JPG';
import Image from 'next/image';

function Activity() {
  return (
    <div className='box '>
      <session id="activity">
        <div className="con  h-[1700px]">
            <div className="head p-5">
                <h1 className='text-white text-4xl'>Activity</h1>
            </div>
            <div className="concon flex justify-center">
                <div className="img p-5 md:grid grid-cols-2 gap-10  w-[200vh]">
                    <div className="ac1  ">
                        <Image src={Good} alt='good' className='w-full' />
                        <div className="textimg">
                            <span className='text-white'>Compete in the National Science Week Provincial Program for the year 2024. How to design a website that is interesting and usable. Can be designed using any method.</span><br/>
                            <span className='text-white'>ลงแข่งรายการ สัปดาห์วิทยาศาสตร์แห่งชาติ ส่วนภูมิภาค ประจำปี 2567 ทำเกี่ยวกับการออกแบบเว็บไซต์ยังไงให้น่าสนในแล้วสามารถใช้งานได้จริงสามารถออกแบบโดยวิธีใดก็ได้</span>
                        </div>
                    </div>
                    <div className="ac2 ">
                        <img src="../assets/arduno.jpg" alt='good' className='w-full' />
                        <div className="textimg">
                            <span className='text-white'>Training program for using the Arduino board, teaching how to connect electrical circuits, writing codes to operate the Arduino board, and looking at the various connections of the light bulbs used with the board.</span><br/>
                            <span className='text-white'>รายการอบรมการใช้บอร์ด Arduino สอนการต่อวงจรไฟฟ้าการเขียนโค้ดในการสั่งงานตัวบอร์ด Arduino แล้วก็การดูขั่วต่างๆของหลอดไฟที่เอาไว้ใช้กับบอร์ด</span>
                        </div>
                    </div>
                    <div className="ac3">
                        <img src="../assets/KMITL.jpg" alt='good' className='w-full' />
                        <div className="textimg">
                            <span className='text-white'>Participated in the open house event of King Mongkut's Institute of Technology Ladkrabang.</span><br/>
                            <span className='text-white'>เข้าร่วมกิจกรรมงาน Open house ของสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
      </session>
    </div>
  )
}

export default Activity
