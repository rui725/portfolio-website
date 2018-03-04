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
           <form method="POST">
              <h4>Email: <input type="text" placeholder="Email.."/> <br /> </h4>
              <h4>Name: <input type="text" placeholder="Name.."/> <br /> </h4>
              <h4>Message</h4>
              <h4>
              <textarea rows="8" cols="40" placeholder="Message..."></textarea>
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
