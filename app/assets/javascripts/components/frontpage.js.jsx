

function Logo(props){
  return(
    <h1>
      <img id="logo" src={props.logo_pic} />
    </h1>
  );
}

function MyPic(props){
    return(
            <img id="mypic" src={props.front_pic } />
    );
}

function Paragraph(){
  return(
    <p>Hi, I'm Rui, I'm a Software Engineer based in Vancouver, British Columbia, Canada,
   who has worked with different Technologies Ranging from Web and Mobile Development, Desktop Application, and Software Testing.</p>
  );
}

function IndexButton(){
    return(
         <a href="/about"><button class="btn btn-primary">Click Here to Learn more</button></a>
    );
}


window.Frontpage = createReactClass({
    render: function(){
        return(
              <div>
               <div id="bg-page">
               </div>
                 <div id="front-page">
                  <Logo logo_pic={this.props.logo_pic}/>
                  <MyPic front_pic={this.props.front_pic}/>
                  <Paragraph />
                  <IndexButton />
                 </div>
             </div>
             )
    }
});
