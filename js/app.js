//<script type="text/jsx">
var Header = React.createClass({
  render: function() {
    return (
      <header className="jumbotron">
        <h1 className="text-center">[<span className="caps">lnrd:prts</span>]</h1>
      </header>
    );
  }
});

var About = React.createClass({
  render: function() {
    return (
      <section className="text-center">
        <p>Hello! My name is Leo. I make things with code. I also like wood working and bicyles.</p>
        <div className="icons">
          <a href="#"><i className="fa fa-github fa-3x"></i></a>
          <a href="#"><i className="fa fa-codepen fa-3x"></i></a>
          <a href="#"><i className="fa fa-linkedin fa-3x"></i></a>
          <a href="#"><i className="fa fa-twitter fa-3x"></i></a>
          <a href="#"><i className="fa fa-envelope fa-3x"></i></a>
          <a href="#"><i className="fa fa-file-text-o fa-3x"></i></a>
        </div>
      </section>
    );
  }
});

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="col-lg-8 col-ld-offset-2">
        <p>
          <span className="sm-caps">leonardo prates </span>
          <i className="fa fa-gears"></i>
          <span className="date">2015</span> |
          <span className="sm-caps"> built with </span>
          <img src="http://red-badger.com/blog/wp-content/uploads/2015/04/react-logo-1000-transparent.png" alt="ReactJS" width="25px" />
        </p>
      </footer>
    );
  }
});


React.render(
  <div classNameName='container'>
    <Header />
    <About />
    <Footer />
  </div>,
  document.getElementById('content')
);
//</script>