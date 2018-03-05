window.Work = createReactClass({
   render: function(){
     return(
        <div>
        <br/>
        <h2>Projects</h2>
         <div id="web">
            <TableWork proj={this.props.web} />
         </div>
         <div id="mobile">
            <TableWork proj={this.props.mobile} />
         </div>
         <div id="desktop">
            <TableWork  proj={this.props.desktop} />
         </div>
        </div>
     );
   },
   componentDidMount: function(){
       this.cardFlip();
       this.projectMove();
   },
   cardFlip :function(){
     $('.flip').hover(function(){
         $(this).find('.card').toggleClass('flipped');
     });
   },
   projectMove: function(){


       $('ul#hmenu li a').click(function(e){
          e.preventDefault();
          $('ul#hmenu').css("display", "none");
          $('ul#smenu').css("display","flex");

       });
       $('ul#smenu li a').click(function(e){
          e.preventDefault();
          $('ul#smenu').css("display", "none");
          $('ul#hmenu').css("display","inline");
          if($(this).attr("href").length != 1){
    
              $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top
            }, 1000);
          }
       });
   }

});

function TableWork(proj){
  /*  <h2>{rows[i].title}</h2>
    <img src={rows[i].imgLink} alt={rows[i].title}/>
    <p>Description: {rows[i].description}</p>
    Technology:{rows[i].technology} */
   row = [];
   var rows = proj.proj;
   for(i =0 ;i<rows.length;i++){
    row.push(
       <div class="flip">
          <div class="card" >
            <div class="face front">
               <div class="inner">
                 <img class="card-img-top" src={rows[i].imgLink} alt={rows[i].title} />
               </div>
            </div>
            <div class="face back">
              <div class="card-body">
                  <h5 class="card-title">{rows[i].title}</h5>
                  <p class="card-text">Description: {rows[i].description}</p>
                  <a href={'/work/' + rows[i].id} class="btn btn-primary">more info</a>
              </div>
            </div>
          </div>
        </div>
     )
    }
    var headers = ["Web Application Development", "Mobile Application Development", "Desktop Application Development"]
    var header = headers[(rows[0].category)-1];
   return(
       <table class='table'>
       <thead class="center">

         <tr>
          <th class="borderless">{header}</th>
         </tr>

       </thead>
        <tbody>

        <tr>
          <td class="borderless">
          <div class="row justify-content-center">

            {row}
            </div>

          </td>
        </tr>
        </tbody>
       </table>
   )
}
