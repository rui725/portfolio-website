window.Footer = createReactClass({
    render: function(){
       return(
        <div id="footer">
            <FootParagraph />
        </div>
       );
    }
});

function FootParagraph(){
    return(
        <div>

               <h2>Contact</h2>
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
    );
}
