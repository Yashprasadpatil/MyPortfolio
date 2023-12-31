import React from 'react';
import './footer.scss';
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';

function Footer() {
  return (
    <>
      <div className="footer">
        <img src={Wave} alt="" style={{width:"100%"}} />
        <div className="f-content">
            <span>yashbpatil15@gmail.com</span>
            <div className="f-icons">
              <a href="https://instagram.com/kaptaan_00026?igshid=NTc4MTIwNjQ2YQ==" rel='noreferrer' target='_blank'>
                <Insta color='white' size='3rem'/>
              </a>
                <a href="https://www.linkedin.com/in/yashprasadpatil" rel='noreferrer' target='_blank'>
                <LinkedIn color='white' size='3rem'/>
                </a>
                <a href="https://github.com/Yashprasadpatil" target='_blank' rel='noreferrer'>

                <Github color='white' size='3rem'/>
                </a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
