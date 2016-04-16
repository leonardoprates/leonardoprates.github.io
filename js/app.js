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
        <div className="icons">
          <a href="https://github.com/odran037" target="_blank"><i className="fa fa-github fa-3x"></i></a>
          <a href="https://codepen.io/odran037" target="_blank"><i className="fa fa-codepen fa-3x"></i></a>
          <a href="https://www.linkedin.com/in/odran037" target="_blank"><i className="fa fa-linkedin fa-3x"></i></a>
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
          <span className="date">2016</span>
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
