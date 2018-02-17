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

    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">

    <a class="navbar-brand" href="#">Home</a>
    <a class="navbar-brand" href="#">Work</a>
    <a class="navbar-brand" href="#">Blog</a>
    <a class="navbar-brand" href="#">Contact</a>

  </nav>

    );
}

function MyPic2(p){
  return (
      <div id="mypic">
          <img id="mypic" src={p.p} alt="mypic" /><br/>
              <i>Rui Rafael Rosillas<br/>
             </i>
      </div>
  );
}

function Divider(p){
  return(
        <div id="carItem">
        <p id="headerText">
          <b>{p.p[0]}</b>
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
        <a class="carousel-control-prev" href="#navcarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#navcarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
    </div>
    );
}
