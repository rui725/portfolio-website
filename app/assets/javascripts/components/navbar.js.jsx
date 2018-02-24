window.Navbar = createReactClass({
  render:function(){
      return(
        <div>
          <div id="bg-index">
          </div>
          <Slider  slider_pic={this.props.slider_pic}/>
          <MyPic2 p={this.props.my_pic} />
          <Nav />
        </div>
      );
  }
});


function Nav(){
    return(
    <nav class="navbar navbar-expand-md  navbar-light bg-faded main-nav">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        <div class="collapse navbar-collapse" id="navbarNav" >
            <ul class="nav navbar-nav">
                <li class="nav-item active" id="left">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Work</a>
                </li>
                <li class="nav-item" id="right">
                    <a class="nav-link" href="#">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    );
}

function MyPic2(p){
  return (
      <div id="mypic">
          <img id="mypic" src={p.p[0]} alt="mypic" /><br/>
            <i id="mypic">
              Rui Rafael Rosillas<br/> <small>
              Vancouver, British Columbia, Canada<br/>
              <a href="https://github.com/rui725"><img id="footer" src={p.p[3]} alt="GitHubLink" /></a>  &nbsp;
              <a href="https://www.linkedin.com/in/ruirosillas/"><img id="footer" src={p.p[1]} alt="LinkedInLink" /></a> &nbsp;
              <a href="mailto:ruirosillas@gmail.com?Subject=Hi%20PortfolioWebsite"><img id="footer" src={p.p[2]} alt="EmailLink" /></a> &nbsp;
              <a href=""><img id="footer" src={p.p[4]} alt="ResumeLink" /></a>&nbsp;
</small>
              </i>
      </div>
  );
}

function Divider(p){
  return(
        <div id="carItem">
        <p id="headerText">
          {p.p[0]}
        </p>
        <img id="imgCar" src={p.p[1]} alt={p.p[2]}/>
        </div>
        );
}

function Slider(props){
    return(
    <div id="navcarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <Divider p={['Mobile Development in Android Platform', props.slider_pic[0], "First Slide"]}/>
        </div>
        <div class="carousel-item">
        <Divider p={['Desktop Application Development', props.slider_pic[1], "Second Slide"]}/>
        </div>
        <div class="carousel-item">
        <Divider p={['Backend Web Application Development', props.slider_pic[2], "Third Slide"]}/>
        </div>
        <div class="carousel-item">
          <Divider p={['Software Quality Assurance', props.slider_pic[3], "Fourth Slide"]}/>
        </div>
      </div>
    </div>
    );
}
