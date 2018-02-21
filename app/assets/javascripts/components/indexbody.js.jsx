window.IndexBody = createReactClass({
    render: function(){
        return(
          <div class="grid-container" id="AboutBody">
            <AboutMe />
            <Skills  p={this.props.skill_pic}/>
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
        <div class="grid-item" id="summary">
            Summary
            <p>	&#10077;
              A strong and passionate individual with a background in Computer Science focusing the field of Software Development and Software Quality Assurance.
              A hands-on individual tackling different sets of technologies involving Mobile Android Application, Backend Web Development Application, Desktop Application Development, and Automation Application.
            &#10080;</p>
      </div>
    );
}

function SkillDiv(p){
    return (
        <img id="imgSkill" src={p.p[1]} alt={p.p[2]}/>
    );
}

function Skills(props){
    return(
      <div class="grid-item" id="plskills">
        <div id="skillcarousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <SkillDiv p={['Datablues', props.p[0], "First Slide"]}/>
            </div>
            <div class="carousel-item">
            <SkillDiv p={['MFeeds', props.p[1], "Second Slide"]}/>
            </div>
            <div class="carousel-item">
            <SkillDiv p={['SimpleBot', props.p[2], "Third Slide"]}/>
            </div>
            <div class="carousel-item">
              <SkillDiv p={['Java Weight Balancer',props.p[3], "Fourth Slide"]}/>
            </div>
          </div>
        </div>
      </div>
    );
}
