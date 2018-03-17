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
      ruirosillas@gmail.com
      <p>LinkedIn</p>
      https://linkedin.com/in/rui725
      <p>GitHub</p>
      https://github.com/rui725
      <p>Website</p>
      https://ruirosillas.herokuapp.com
    </div>
  );
}
