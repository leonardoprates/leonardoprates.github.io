//<script type="text/jsx">
var Header = React.createClass({
  render: function() {
    return (
      <header className="jumbotron">
        <h1 className="text-center">[<span className="caps">lnrd_prts</span>]</h1>
      </header>
    );
  }
});

var About = React.createClass({
  render: function() {
    return (
      <section className="text-center">
        <p className="caps">Hello! My name is Leo. I make things with code. I also like wood working and bicyles.</p>
        <p id="portfolio-button"><a href="http://odran037.io">portfolio</a></p>
        <div className="icons">
          <a href="https://github.com/odran037" target="_blank"><i className="fa fa-github fa-3x"></i></a>
          <a href="https://codepen.io/odran037" target="_blank"><i className="fa fa-codepen fa-3x"></i></a>
          <a href="https://www.linkedin.com/in/odran037" target="_blank"><i className="fa fa-linkedin fa-3x"></i></a>
          <a href="https://twitter.com/odran037" target="_blank"><i className="fa fa-twitter fa-3x"></i></a>
          <a href="mailto:hello@odran037.io" target="_blank"><i className="fa fa-envelope fa-3x"></i></a>
          <a href="resume/Leonardo-Prates.txt" target="_blank"><i className="fa fa-file-text-o fa-3x"></i></a>
        </div>
      </section>
    );
  }
});

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="col-lg-8 col-lg-offset-2">
        <p>
          <span className="sm-caps">leonardo prates </span>
          <i className="fa fa-gears"></i>&nbsp;
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
    <Footer />
  </div>,
  document.getElementById('content')
);
//</script>
