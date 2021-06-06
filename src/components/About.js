import React, { Component } from "react";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import mysql from "@iconify/icons-logos/mysql";
import NodeJS from "@iconify/icons-logos/nodejs-icon";
import profilepic from '../images/myProfile.jpg'
class About extends Component {
MyFunction = ()=>{
   var DIV_CHECK = document.getElementById("MyDiv");
   var DIV_OUTPUT = "";
   for(var i = 0; i < DIV_CHECK.innerHTML.length; ++i){//NOSONAR
       if(DIV_CHECK.innerHTML[i] === "\n")
       {
          DIV_OUTPUT += "<br>";
       }
       else
       {
          DIV_OUTPUT += DIV_CHECK.innerHTML[i];
       }
   }
   DIV_CHECK.innerHTML = DIV_OUTPUT;
}
componentDidMount() {
  setTimeout(()=>{
    this.MyFunction();
  },100)
}
//WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
componentWillReceiveProps(nextProps) {
  console.log('componentWillReceiveProps');
  setTimeout(()=>{
    this.MyFunction();
  },100)
}
  render() {
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    style={{objectFit:'cover'}}
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={NodeJS}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={mysql}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span 
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    <div id='MyDiv'>
                    {
                    about!==undefined ?
                    about
                    :""
                    }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
