import React, { useContext } from 'react';
import './portfolio.scss';
import Ecommerce from '../../img/ecommerce.webp';
import Weather from '../../img/chatapp.png';
import Todo from '../../img/restraunt app.jpg';
import { themeContext } from '../../Context';


export default function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className="portfolio" id='Portfolio'>
        {/* heading  */}
        <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
        <span>Portfolio</span>
        {/* slide  */}
        <div className="project_list">
          <div className="box">
            <div className='text'>
              <a href="add project link here"><span style={{ color: 'var(--orange)', cursor: "pointer" }}>Expense tracker</span></a>
              <p>
                The expense tracker project is a digital tool that enables users to track and manage their financial transactions and
                expenditures. It offers a user-friendly interface and allowing users to monitor their spending patterns over time with
                premium subscription.
                <br />
                This innovative application offers seamless, instant messaging with real-time updates,
                enabling users to connect and interact effortlessly. This chat app redefines modern communication by delivering a
                responsive, interactive, and versatile chatting experience.</p>
            </div>
            <a href="expense tracker" className='imgportfolio'><img src={Ecommerce} alt="" /></a>
          </div>
          <div className="box box-even">
            <a href="chat app link " className='imgportfolio'><img src={Weather} alt="" /></a>
            <div className='text'>
              <a href="chat app link"><span style={{ color: 'var(--orange)', cursor: 'pointer' }}>Realtime Chat-App</span></a>
              <p>The Real-Time Chat App is a dynamic communication platform built using JavaScript, Node.js, Socket.io, and
                MySQL as the database.This innovative application offers seamless, instant messaging with real-time updates,
                enabling users to connect and interact effortlessly. This chat app redefines modern communication by delivering a
                responsive, interactive, and versatile chatting experience.
              </p>
            </div>
          </div>
          <div className=" box">
            <div className="text">
              <a href="order app link"><span style={{ color: 'var(--orange)', cursor: 'pointer' }}>Restaurant-order-management-system</span></a>
              <p> The Restaurant Order Management System is a web application built using HTML, CSS, and JavaScript,
                  integrated with the Postman API. It enables efficient management of restaurant orders through CRUD operations
                  on a database provided by the CrudCrud service.
              </p>
            </div>
            <a href="order app link" className='imgportfolio'><img src={Todo} alt="" /></a>
          </div>
        </div>

      </div>
    </>
  )
}
