//<script type="text/jsx">
var Header = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-md-10">
          <h1 className="headline">L<span className="sm-caps">eonardo </span>P<span className="sm-caps">rates</span></h1>
          <p><span>Resume </span> <a href="#" role="button" className="btn btn-success btn-xs">PDF</a> <a href="#" role="button" className="btn btn-primary btn-xs">DOC</a> <a href="#" role="button" className="btn btn-warning btn-xs">TXT</a></p>
        </div>
        <div className="col-md-2 info">
          <p>Hayward CA 94544</p>
          <p>(702) 498 - 0327</p>
          <p>hello@odran037.io</p>
          <p>http://odran037.io</p>
        </div>
      </div>
    );
  }
});

var About = React.createClass({
  render: function() {
    return (
      <div id="about">
        <div className="row">
          <div className="col-md-12">
            <h3>About</h3>
          </div>
          <div className="col-md-12">
            <p>Highly motivated and hard working individual with an insatiable apetite for learning. Passionate about programming and solving problems. Loves working in a team and able to stay positive and solve problems using expertise and research. Looking for a developement or engineering opportunity.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-center"><strong><a href="http://odran037.io" className="text-success">View my portfolio</a></strong></h3>
          </div>
        </div>
      </div>
    );
  }
});

var Skills = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h3>Skills</h3>
        </div>
        <div className="col-md-12">
          <p>HTML5, CSS3, JavaScript, Jade, Stylus, CoffeeScript, jQuery, AngularJS, Node.js, MongoDB, Express, Ajax, JSON, REST, Git, GitHub, Heroku, DNS, FTP, Linux, OS X, Windows</p>
          <p>Basic: Python, Ruby, PHP, MySQL, Apache, React, Backbone.js, Underscore</p>
        </div>
      </div>
    );
  }
});

var Experience = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h3>Experience</h3>
        </div>
        <div className="col-md-12">
          <p className="title">Developer Mentor – DevMountain - TX 2015 – Current</p>
          <p>Responsible mentoring students and ensuring their success in learning full stack web developement.</p><br/>
          <p className="title">Senior Remote Support – Weebly - FL 2013 – Current</p>
          <p>Responsible for providing chat and email-based support to customers relating to website design, ecommerce, email and domain DNS setup. Resolve billing issues and assist customers purchasing different products and solutions to suit their needs. Also responsible for assisting other support agents with issues and questions that require advanced support.</p><br/>
          <p className="title">IT Specialist - Freelance - Orange City, FL 2006 – 2013</p>
          <p>Notebook and desktop repair, Home network installation and security implementation. Printer, copier and fax installation and repair. </p><br/>
          <p className="title">IT Specialist - CompTech Care - Fort Myers, FL 2007</p>
          <p>Provided notebook and desktop repair, network management services, implemented off-site data backup, remote assistance, designed diagrams of small and medium business networks. Set up servers, routers, switches, hubs and VPNs.</p><br/>
          <p className="title">Customer Service Engineer - Sal Serv., Xerox - Naples, FL 2001 – 2002</p>
          <p>Performed full range of maintenance, technical diagnostics, software loads, installation, removal, retrofit of Xerox products and customer call assistance, provided customer training on assigned products in accordance with current field procedures and responsible for assigned company assets (i.e. parts, tools, communication and computing devices, vehicles).</p><br/>
          <p className="title">Odd jobs</p>
          <p>I&#39;ve travelled around the country for a few years and during that time I did freelance IT work, website maintenance, construction masonry and carpentry, worked at a retail store, at a hotel spa and fitness center, owned and operated my own retail business.</p>
        </div>
      </div>
    );
  }
});

var Education = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h3>Education</h3>
        </div>
        <div className="col-md-12">
          <p className="title">DevMountain, Provo, UT – 2015</p>
          <p>Fullstack web development - MEAN Stack</p><br/>
          <p className="title">FreeCodeCamp, Online - 2015</p>
          <p>Fullstack web development - MEAN Stack</p><br/>
          <p className="title">CodeSchool, Online - 2014 - 2015</p>
          <p>JavaScript Best Practices</p>
          <p>JavaScript Road Trip 1, 2 and 3</p>
          <p>Front End Foundations</p>
          <p>Front End Formations</p>
          <p>Shaping Up With Angular JS</p>
          <p>Real Time Web With Node JS</p><br/>
          <p className="title">University of Central Florida - 2013</p>
          <p>Certified fiber Optics Specialist in Outside Plant Cabling (CFOS/O)</p>
          <p>Certified fiber Optics Specialist/Testing & Maintenance (CFOS/T)</p>
          <p>Certified fiber Optics Splicing Specialist Course (CFOS/S)</p>
          <p>Certified fiber Optics Technician Course (CFOT)</p><br/>
          <p className="title">Southwest Florida College - 2007</p>
          <p>Network and System Administration/Administrator</p>
          <p>Microsoft Network Engineering Studies</p>
        </div>
      </div>
    );
  }
});

var Language = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h3>Languages</h3>
        </div>
        <div className="col-md-12">
          <p><span className="title">English, Portuguese</span>&nbsp;Native</p>
          <p><span className="title">Spanish</span>&nbsp;Conversational</p>
          <p><span className="title">Arabic</span>&nbsp;Basic</p>
        </div>
      </div>
    );
  }
});

var Footer = React.createClass({
  render: function() {
    return (
      <footer>
        <p>
          <span className="sm-caps">leonardo prates </span>
          <i className="fa fa-gears">&nbsp;</i>
          <span className="date">2015</span> |
          <span className="sm-caps"> built with </span>
          <img src="http://red-badger.com/blog/wp-content/uploads/2015/04/react-logo-1000-transparent.png" alt="ReactJS" width="25px" />
        </p>
      </footer>
    );
  }
});


React.render(
  <div className='container'>
    <Header />
    <About />
    <Skills />
    <Experience />
    <Education />
    <Language />
    <Footer />
  </div>,
  document.getElementById('content')
);
//</script>