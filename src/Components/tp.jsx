import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-scroll'


class Section extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }


  render() {
    return (
      <div>
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Test 1</Link></li>
                </ul>
              </div>
            </div>
          </nav>

          <div id="anchor" className="element">
            test 6 (anchor)
        </div>
      </div>
    );
  }
};

render(<Section />, document.getElementById('root'));

