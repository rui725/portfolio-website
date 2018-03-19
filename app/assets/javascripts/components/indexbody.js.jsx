window.IndexBody = createReactClass({
    render: function(){
        return(
        <div id="about">
            <h2>About Me</h2>
          <div id="AboutBody" width="100%">

            <AboutMe  />
            <Skills pic={this.props.user_pic} />
            <ConnectMe />
          </div>
          <Contacts p={this.props.my_pic} />
              <br /><br />
          <Summ />
          </div>
        );
    }
});

function GridLayout(){
  return(
    <div></div>
  );
}

function Contacts(p){
  return(
    <div id="profcontact">
    Rui Rafael Rosillas<br/> <small>
      Vancouver, British Columbia, Canada<br/>
      <a  href="https://github.com/rui725"><img id="footer" src={p.p[3]} width="40px" alt="GitHubLink" /></a>  &nbsp;
      <a  href="https://www.linkedin.com/in/ruirosillas/"><img id="footer" width="40px" src={p.p[1]} alt="LinkedInLink" /></a> &nbsp;
      <a  href="mailto:ruirosillas@gmail.com?Subject=Hi%20PortfolioWebsite"><img id="footer" width="40px" src={p.p[2]} alt="EmailLink" /></a> &nbsp;
      <a  href="https://www.visualcv.com/rui-rafael-rosillas"><img id="footer" width="40px" src={p.p[4]} alt="ResumeLink" /></a>&nbsp;
    </small>
    </div>
  );
}

function AboutMe(){
    return(
        <div id="personal">
           <p>Full Name</p>
           Rui Rafael Rosillas
           <p>Address</p>
           Vancouver, BC
           <p>Hobbies</p>
           Tech Trends, Solving Online Challenges, Gaming
        </div>
    );
}
function Summ(){
return(
<div id="summary">
    <p>	&#10077;
      A strong and passionate individual with a background in Computer Science focusing the field of Software Development and Software Quality Assurance.
      A hands-on individual tackling different sets of technologies involving Mobile Android Application, Backend Web Development Application, Desktop Application Development, and Automation Application.
    &#10080;</p>
</div>
);
}
function Skills(props){
    return(
      <div id="plskills">
        <img id="mypic" src={ props.pic} alt="userpic" />
      </div>
    );
}

function ConnectMe(){
  return(
    <div id="connectme">
      <p>Email</p>
      <a href="mailto:ruirosillas@gmail.com?Subject=Hi%20PortfolioWebsite">ruirosillas@gmail.com</a>
      <p>LinkedIn</p>
      <a href="https://linkedin.com/in/ruirosillas">https://linkedin.com/in/ruirosillas</a>
      <p>GitHub</p>
      <a href="https://github.com/rui725">https://github.com/rui725</a>
      <p>Resume</p>
      <a href="https://www.visualcv.com/rui-rafael-rosillas">https://www.visualcv.com/rui-rafael-rosillas</a>
    </div>
  );
}
