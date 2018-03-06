window.Contact = createReactClass({
    render: function(){
        return(
            <div id="contact">

             <h2>Contact</h2>
             <p>
                  <a href="https://www.linkedin.com/in/ruirosillas/"><img width="20px" src={'https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-128.png'} alt="LinkedIn"/> Rui Rafael Rosillas</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="mailto:ruirosillas@gmail.com?Subject=Hi%20PortfolioWebsite"><img width="20px" src={'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/mail-128.png'} alt="Mail"/> ruirosillas@gmail.com</a>

             </p>
              <Divide />
            </div>
        );
    },
    componentDidMount : function(){
       this.sendMessage();
    },
    sendMessage : function(){
      $('button#btnmsg').click(function(e){
          e.preventDefault();
          var msg = $('textarea#msg').val();
          var email = $('input#email').val();
          var name = $('input#name').val();
          var data = {"msg":msg, "email": email, "name":name};

          var alert = $("div#contactAlert");
          alert.removeClass();
          alert.html("");
          $.ajax({
            url: "/contact/send",
            data: data,
            method:"POST",
  					success:function(res){
  						if(!res["state"].includes("Error")){
                alert.addClass("alert-success");
  							alert.html("<strong>"+res["message"]+"</strong>");
  						}else{
  							alert.addClass("alert-danger");
                alert.html("<strong>"+res["message"]+"</strong>");
  						}
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

function FormEmailMessage(){
   return(
       <div id="msg">
       <div id="contactAlert" class="alert">
       </div>
           <h3> Get in Touch </h3>
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
