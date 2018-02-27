window.Work = createReactClass({
   render: function(){
     return(
        <div>
         <TableWork proj={this.props.web} />
         <TableWork  proj={this.props.mobile} />
         <TableWork  proj={this.props.desktop} />
        </div>
     );
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
        <div class="card" >
          <img class="card-img-top" src={rows[i].imgLink} alt={rows[i].title} />
          <div class="card-body">
          <h5 class="card-title">{rows[i].title}</h5>
          <p class="card-text">Description: {rows[i].description}</p>
          <a href="#" class="btn btn-primary">more info</a>
          </div>
        </div>
     )
    }
    var headers = ["Web Application Development", "Mobile Application Development", "Desktop Application Development"]
    var header = headers[(rows[0].category)-1];
   return(
       <table class='table'>
       <thead class="thead-dark .center">

         <tr>
          <th>{header}</th>
         </tr>

       </thead>
        <tbody>

        <tr>
          <td>
          <div class="row justify-content-center">

            {row}
            </div>

          </td>
        </tr>
        </tbody>
       </table>
   )
}
