window.IndexBody = createReactClass({
    render: function(){
        return(
          <div id="AboutBody">
            <AboutMe />
            <Skills />
          </div>
        );
    }
});

function GridLayout(){
  return(
    <div></div>
  );
}

function AboutMe(){
    return(
        <div id="summary">
            Summary
            <p>	&#10077;
              A strong and passionate individual with a background in Computer Science focusing the field of Software Development and Software Quality Assurance.
              A hands-on individual tackling in different sets of technologies involving Mobile Android Application, Backend Web Development Application, Desktop Application Development, and Automation Application.
            &#10080;</p>
      </div>
    );
}

function Skills(){
    return(
      <div id="plskills">

      </div>
    );
}
