const Title = () => {
    return (
      <a href="/">
        <img
          src={require("../images/company-logo.jpg")}
          alt="Company logo"
          className="logo"
        />
      </a>
    );
  };
  
  const Header = () => {
    return (
      <div className="Header flex">
        <Title />
  
        <input type="text" className="headerInput" placeholder="Search.." />
  
        <img
          src={require("../images/user icon.jpg")}
          alt="user"
          className="userIcon"
        />
      </div>
    );
  };
  
  export default Header;