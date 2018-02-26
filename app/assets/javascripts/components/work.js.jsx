window.Work = createReactClass({
   render: function(){
     return(
         <TableWork />


     );
   }
});

function TableWork(){
   return(
       <table class='table'>
        <tbody>
        <tr>
          <td>
           <div>
              <h2> TITLE</h2>
              <p>Description</p>
              Technology
              <img src={''} alt="project pic"/>
           </div>
          </td>
        </tr>
        </tbody>
       </table>
   )
}
