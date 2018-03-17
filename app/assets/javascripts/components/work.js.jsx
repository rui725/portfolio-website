window.Work = createReactClass({
   render: function(){
     return(
 <div id="work">
     <Projects proj={[this.props.proj, this.props.allproj]}>

{/*


 <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
*/}

    {/*
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

        </div>   */}
             </Projects>
             </div>
     );
   },
   componentDidMount: function(){
  //     this.cardFlip();
  //     this.projectMove();
       this.projHandler();
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
   },
   projHandler : function(){
   $(document).ready(function(){
      var webcat = $('a[href="#mweb"]');
      webcat.click();
      var firstproject = $('a[href^="#i"]:first');
      firstproject.addClass("active");
      var id = firstproject.attr("href");
      $("div" + id).fadeIn("slow");
   });
      $('div.list-group-submenu a.list-group-item').click(function(e){
        e.preventDefault();
        $('div.list-group-submenu a.list-group-item').removeClass("active");
        $(this).addClass("active");
        $("div[id^='i']").fadeOut(1);

        $("div"+$(this).attr("href")).fadeIn("slow");

      });


   }

});


function Projects(proj){
  return(
      <div id="project" width="100%" height="100%">
         <LeftProject proj={proj.proj[0]} />
         <RightProject ap={proj.proj[1]} />
      </div>
  );
}

function LeftProject(proj){
  row = [];
  var rows = proj.proj;
  cats = [ "Web Projects", "Mobile Projects", "Desktop Projects", "Software Testing"]
  for(var category = 0; category < Object.keys(rows).length; category++){
      keys = Object.keys(rows);
      row.push(
              <a class="list-group-item" data-parent="#leftnav" data-toggle="collapse" href={"#m"+keys[category]}>
              {cats[category]}
              </a>
      );
      var  items =[];
      for(var item = 0; item < rows[keys[category]].length; item++){
          items.push(
          <a class="list-group-item" href={"#i" + rows[keys[category]][item].id}>{rows[keys[category]][item].title}</a>
          );
      }

      row.push(
            	<div class="collapse list-group-submenu" id={"m"+Object.keys(rows)[category]}>
                	{items}
              </div>
      );
    }

  return(


      <div id="projlist" class="col-md-2">
      <div id="mheader">
	     <h2>Projects</h2>
      </div>
			<nav id="leftnav">
				<div class="list-group indicator-plus">
          {row}
				</div>
			</nav>
		</div>

  );
}

function RightProject(ap){
    var all_proj = ap.ap;
    var row = [];
    for( var items =0; items< Object.keys(all_proj).length; items++){
    link = "";
    if(all_proj[items].info_link.length != 0){
        link = <a id={'info_link'} href={all_proj[items].info_link}> link </a>;
    }
    row.push(
      <div id={"i"+ all_proj[items].id } >
          <h2>{all_proj[items].title}</h2>
          <hr/>
          <div class="row">
            <div class="col-6">
              <div class="col-12">
              <h5 id="tech">Technology: </h5>{all_proj[items].technology}
              <p id="desc"><h5>Description:</h5>{all_proj[items].description}</p>
              <p id="info_link"><h5>Link: {link}</h5></p>
              </div>

            </div>
            <div class="col-67">
              <img id="proj" src={all_proj[items].imgLink} />
            </div>
          </div>
      </div>
      );
    }
    return(
      <div id="projdesc" class="col-md-10 col-xl-9">
        {row}
      </div>
    );
}

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
                  <button class="btn btn-primary" id={"modals"+ rows[i].id} type="button" data-toggle="modal" data-target="#exampleModal">more info</button>
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
