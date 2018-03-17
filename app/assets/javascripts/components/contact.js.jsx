window.Contact = createReactClass({
    render: function(){
        return(
            <div id="contact">

             <h2>Get In Touch</h2>
             <FormEmailMessage p={this.props.logo}/>
            </div>
        );
    },
    componentDidMount : function(){
       this.sendMessage();
    },
    sendMessage : function(){
      $('input#btnmsg').click(function(e){
          e.preventDefault();
          var msg = $('textarea#msg').val();
          var email = $('div.col-6 input#email').val();
          var name = $('div.col-6 input#name').val();
          var data = {"msg":msg, "email": email, "name":name};
          console.log(data);
          var alert = $("div#result");
          alert.removeClass();
          alert.html("");
          $.ajax({
            url: "/contact/send",
            data: data,
            method:"POST",
  					success:function(res){
  						if(!res["state"].includes("Error")){
                alert.css("color","green");
  							alert.html("<strong>"+res["message"]+"</strong>");
                $('textarea#msg').val('');
                $('input#email').val('');
                $('input#name').val('');
  						}else{
                  alert.css("color","red");
                alert.html("<strong>"+res["message"]+"</strong>");
  						}

  					},
            error: function(){
              alert.css("color","red");
              alert.html("<strong> Something went wrong Try again in a few hours </strong>");
            }
          });

      })
    }

});

function Divide(){
   return(
         <div width="100%">
            <FormEmailMessage />
            <RenderMap />
         </div>
   );
}

function FormEmailMessage(p){
   return(
       <div id="msg">
       <form method="post">
         <div class="form-group row has-success">
            <div class="col-6">
              <input type="text" id="name" name="s_name" class="form-control form-control-success" placeholder="Your Name" required />
            </div>
            <div class="col-6">
              <input type="email" id="email" name="s_email" class="form-control form-control-success" placeholder="Your Email" required />
            </div>
            <div class="col-12">
              <textarea class="form-control" name="textmsg"id="msg" cols="40" rows="10" placeholder="Message:" required></textarea>
            </div>
             <input type="submit" id="btnmsg" class="btn btn-primary" value="Send Message"/>
             <div id="result"></div>

          </div>
      </form>
       {/*
           <form method="POST">
              <h4>Email:&nbsp;&nbsp;<input id="email" type="text" placeholder="Email.."/> <br /> </h4>
              <h4>Name: <input id="name" type="email" placeholder="Name.."/> <br /> </h4>
              <br />
              <h4>
              <textarea id="msg" rows="8" width="100%" placeholder="Message..."></textarea>
              </h4>
              <h4>
              <button id="btnmsg" type="button" class="btn btn-primary" onclick="">Send</button></h4>
           </form>
           */}
           <img src={p.p} />
           <p>
                <a href="https://www.linkedin.com/in/ruirosillas/"><img width="20px" src={'https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-128.png'} alt="LinkedIn"/> Rui Rafael Rosillas</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="mailto:ruirosillas@gmail.com?Subject=Hi%20PortfolioWebsite"><img width="20px" src={'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/mail-128.png'} alt="Mail"/> ruirosillas@gmail.com</a>

           </p>
           <p>
                   Powered By <img width="20px" src={'https://thinkster.io/assets/homepage/rails-9b13de39de9d2eed10a2418734ee1e584cdc9634c04206af1c2bfcc8b0d0e3d5.png'} alt="Ruby" />
                         <img width="40px" src={'https://sites.udel.edu/enesavc/files/2017/10/1-1hh3nl3.png'} alt="GitHub"/>
                         <img width="40px" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'} alt="ReactJS"/>
                         <img width="40px" src={'https://softwareengineeringdaily.com/wp-content/uploads/2016/10/herokukafka.png'} alt="Heroku" />
         </p>
       </div>
   )
}


function RenderMap(){
   return(
       <div id="map">
         <iframe  src={'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJs0-pQ_FzhlQRi_OBm-qWkbs&zoom=10&key=AIzaSyAd9-PI5CyxsicrxR00Oei8eFzPqXNpphs'} >
         </iframe>
       </div>
   )
}
