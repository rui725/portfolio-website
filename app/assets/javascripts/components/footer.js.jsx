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
            <p>
                    Powered By <img width="20px" src={'https://thinkster.io/assets/homepage/rails-9b13de39de9d2eed10a2418734ee1e584cdc9634c04206af1c2bfcc8b0d0e3d5.png'} alt="Ruby" />
                          <img width="40px" src={'https://sites.udel.edu/enesavc/files/2017/10/1-1hh3nl3.png'}/>
                          <img width="40px" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}/>
                          <img width="40px" src={'https://softwareengineeringdaily.com/wp-content/uploads/2016/10/herokukafka.png'} />
          </p>
          <h6>Created by Rui Rafael Rosillas</h6>
        </div>
    );
}
