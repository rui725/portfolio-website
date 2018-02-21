window.Abilities = createReactClass({
    render:function(){
        return(
          <div id="ability">
            <Ability pl={this.props.pl}/>
          </div>
        );
    }
})

function Ability(p){
  return(
    <div>
        <h2> Abilities </h2>
        <div class="grid-container">
          <div class="grid-item">
            <div class="container">
              <div id="pl">
                  <div id="plHead">
                    <img src="" alt="Ruby" /> Ruby
                  </div>
                  <div class="progress">
                      <div class="progress-bar bg-success"  role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div> <br/>
              </div>
              <div id="pl">
                  <div id="plHead">
                    <img src="" alt="Ruby" /> Ruby
                  </div>
                  <div class="progress">
                      <div class="progress-bar bg-success"  role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div><br/>
              </div>
              <div id="pl">
                  <div id="plHead">
                    <img src="" alt="Ruby" /> Ruby
                  </div>
                  <div class="progress">
                      <div class="progress-bar bg-success"  role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div><br/>
              </div>
              <div id="pl">
                  <div id="plHead">
                    <img src="" alt="Ruby" /> Ruby
                  </div>
                  <div class="progress">
                      <div class="progress-bar bg-success"  role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div><br/>
              </div>
            </div>
          </div>
          <div class="grid-item">
            <div class="container">
              <div id="pl">
                  <div id="plHead">
                    <img id="pl" src="https://cdn4.iconfinder.com/data/icons/stash/128/ruby-128.png" alt="Ruby" /> Ruby
                  </div>
                  <div class="progress">
                      <div class="progress-bar bg-success"  role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div> <br/>
              </div>
              <div id="pl">
                  <div id="plHead">
                    <img id="pl" src="https://cdn4.iconfinder.com/data/icons/stash/128/ruby-128.png" alt="Ruby" /> Ruby
                  </div>
                  <div class="progress">
                      <div class="progress-bar bg-success"  role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div><br/>
              </div>
              <div id="pl">
                  <div id="plHead">
                    <img id="pl" src="https://cdn4.iconfinder.com/data/icons/stash/128/ruby-128.png" alt="Ruby" /> Ruby
                  </div>
                  <div class="progress">
                      <div class="progress-bar bg-success"  role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div><br/>
              </div>
              <div id="pl">
                  <div id="plHead">
                    <img id="pl" src="https://cdn4.iconfinder.com/data/icons/stash/128/ruby-128.png" alt="Ruby" /> Ruby
                  </div>
                  <div class="progress">
                      <div class="progress-bar bg-success"  role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div><br/>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
