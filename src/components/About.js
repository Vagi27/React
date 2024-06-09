import Profile from "./ProfileClass";
import React from "react";
import { Outlet } from "react-router-dom";
import Catalog from "./Catalog";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vagish",
      location: "Gohana",
    };
    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("Parent CDM");
    // console.log("Parent CDM-2");
    // this.interval=setInterval(()=>{
    //   console.log("Parent Component did mount");
    // },1000);
  }

  componentWillUnmount() {
    // console.log(this.props.location);
    // clearInterval(this.interval);
  }
  render() {
    // console.log("parent render");

    return (
      <>
        <div> this is About us: parent class</div>
        <h1>{this.state.name}</h1>
        <Outlet context={this.state} />
        {/* when using Direct Component Call, use props in child Component to access parent sent props */}
      </>
    );
  }
}

export default About;
