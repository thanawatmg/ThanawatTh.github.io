import React from 'react'
import Image from 'next/image'
import School from 'public/school.png'
import Kaset from 'public/kaset.png'
import Supergood from 'public/supergood.png'
import Imake from 'public/iamke.jpg'
function Certificate() {
  return (
    <div className='box '>
        <session id='certificate'>
            <div className="head p-5">
                <h1 className='cer text-white text-4xl mb-5'>Certificate</h1>
            </div>
            <div className="cercon p-5 md:grid grid-cols-2 gap-10">
                <div className="c1">
                    <div className="img">
                        <Image src={School} alt='school'/>
                    </div>
                    <div className="text">
                        <span className='text-white mb-2'>Received a gold medal award First runner-up in participating in the 71st Student Arts and Crafts Competition, Academic Year 2023, Secondary Educational Service Area Level Nakhon Pathom Province</span><br/>
                        <span className='text-white'>ได้รับรางวัลระดับเหรียญทอง รองชนะเลิศอันดับที่ 1 ในการเข้าร่วมการแข่งขันศิลปหัตกรรมนักเรียน ครั้งที่ 71 ปีการศึกษา 2566 ระดับเขตการพื้นที่การศึกษามัธยมศึกษา จังหวัดนครปฐม</span>
                    </div>
                </div>

                <div className="c2">
                    <div className="img">
                        <Image src={Supergood} alt='supergood'/>
                    </div>
                    <div className="text">
                        <span className='text-white mb-2'>Participate in website design competitions High school level At the National Science Week, Provincial Region, year 2024</span><br/>
                        <span className='text-white'>เข้าร่วมการแข่งขันการออกแบบเว็บไซต์ ระดับชั้นมัธยมศึกษาตอนปลาย ในงานสัปดาห์วิทยาศาสตร์แห่งชาติ ส่วนภูมิภาค ประจำปี 2567</span>
                    </div>
                </div>

                <div className="c3">
                    <div className="img">
                        <Image src={Kaset} alt='supergood'/>
                    </div>
                    <div className="text">
                        <span className='text-white mb-2'>Participated in the KU ENGINEERING OPEN HOUSE activity of Kasetsart University.</span><br/>
                        <span className='text-white'>เข้าร่วมกิจกรรม KU ENGINEERING OPEN HOUSE ของมหาวิทยาลัยเกษตรศาสตร์</span>
                    </div>
                </div>

                <div className="c4">
                    <div className="img">
                        <Image src={Imake} alt='supergood'/>
                    </div>
                    <div className="text">
                        <span className='text-white mb-2'>Participated in training activities for the Arduino Uro R4 competition of the Faculty of Engineering. King Mongkut's Institute of Technology Ladkrabang together with Imec Innovation Company Limited</span><br/>
                        <span className='text-white'>เข้าร่วมกิจกรรมการอบรมเพื่อการแข่งขัน Arduino Uro R4 ของคณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง ร่วมกับ บริษัท ไอเมค อินโนเวชั่น จำกัด</span>
                    </div>
                </div>

            </div>
        </session>
      
    </div>
  )
}

export default Certificate
