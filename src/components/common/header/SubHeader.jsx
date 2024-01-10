import React, { useState } from "react";
import "./subheader.css";
import { subnavlist } from "../../data/Data";
import { Link } from "react-router-dom";

const SubHeader = () => {
  const [navList, setNavList] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>
      <header className='subheader'>
        <div className='flex' style={{ width: "100%" }}>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {subnavlist.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='navlistCustomerSupport'>
            <ul className={navList ? "small" : "flex"}>
              <li>
                <Link onClick={toggleOptions}>Customer Support
                <i className='fa fa-caret-down' style={{marginLeft:"8px"}}></i></Link>
                {showOptions && (
                  <div className='dropdown'>
                    <ul className='dropdown-content'>
                      <li>
                      Raise Issue
                      </li>
                      <li>
                      My Issues
                      </li>
                      <li>
                      Contact us
                      </li>
                      <li>
                      FAQs
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link>Visit us</Link>
              </li>
              <li>
                <Link>Login/Register</Link>
              </li>
            </ul>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>
              {navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default SubHeader;
