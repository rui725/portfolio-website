window.Top = createReactClass({
    render: function(){
        return(
        <div>
          <Navigation logo={this.props.logo_pic} >
          </Navigation>
          <Slider slider_pic={this.props.slider_pic}>
          </Slider>
        </div>
        );
    },
    componentDidMount : function(){
      //JQuery components
      this.ChangeHeightNav();
      this.MoveCarousel();
      this.ActivateNav();
    },
    ChangeHeightNav : function(){
      $(window).scroll(function (event){
       var y = $(this).scrollTop();
        if(y>1){
          $("#navtop").addClass("changenav");
        }else{
          $("#navtop").removeClass("changenav");
        }
      });
    },
    MoveCarousel: function(){
        $('div#carousel-top').carousel({
            interval:2800
        })
    },
    ActivateNav: function(){
    $('a.navbar-brand').on("click", function(e){
      e.preventDefault();
      $("ul li.nav-item a").removeClass("active");
      $('html, body').animate({
      scrollTop: $('section#top').offset().top-140
      }, 1000);
    });
    $("ul li.nav-item").on("click", function(e){
       e.preventDefault();
       $("ul li.nav-item a").removeClass("active");
       $(this).find('>a').addClass("active");
       var section = $(this).find('>a').attr("href");
       $('html, body').animate({
       scrollTop: $('section'+ section).offset().top -105
       }, 1000);
    });
    }
});

function Navigation(p){
    return(
    <nav id="navtop" class="navbar navbar-expand-lg navbar-dark fixed-top">
      <a class="navbar-brand" href="#top"><img height="100px" src={p.logo} /></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarSupportedContent" class="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                      <a class="nav-link" href="#profile">About</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#skills">Skills</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#portfolio">Projects</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#contact">Contact</a>
                  </li>
              </ul>
          </div>
</nav>
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
 <div data-ride="carousel" class="carousel carousel-fade" id="carousel-top">

 <div role="listbox" class="carousel-inner">
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
 {/*
 <a class="carousel-control-prev" href="#carousel-top" role="button" data-slide="prev">
   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
   <span class="sr-only">Previous</span>
 </a>
 <a class="carousel-control-next" href="#carousel-top" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>*/}
</div>
 );
}
