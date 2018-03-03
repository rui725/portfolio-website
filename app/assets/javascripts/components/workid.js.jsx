window.Workid = createReactClass({
    render: function(){
        return (
            <div>
              <Project p={this.props.project} />
            </div>
        );
    }
});

function Project(p){
    return(
      <div>
         <a href={p.p.info_link}><h2>{p.p.title}</h2></a>
        <h4>Technology: {p.p.technology}</h4>

         <img src={p.p.imgLink} />
         <p>{p.p.description}</p>


      </div>
    );
}
