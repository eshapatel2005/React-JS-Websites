import './fronted.css';


export default function Navs(props){
    
      return (
      <>
      
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
    <div className="container">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a
          className="navbar-brand"
          href="contact@example.com"
          style={{ color: "white" }}
        >
          <i className="fa fa-envelope-o envelope" aria-hidden="true" />
          contact@example.com
        </a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a style={{ color: "white" }}>
              <i className="fa fa-mobile envelope" aria-hidden="true" /> +1 5589
              55488 99
            </a>
          </li>
        </ul>
        <a href="#">
          <img src={props.img}
            className="nav"
            aria-hidden="true"
          ></img>
        </a>
        <a href="#">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Facebook_icon_%28black%29.svg/1024px-Facebook_icon_%28black%29.svg.png" className="nav" aria-hidden="true" ></img>
        </a>
        <a href="#">
          <img src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-1/1024/instagram-512.png"
            className="nav"
         
          ></img>
        </a>
        <a href="#">
          <img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" className="nav"></img>
        </a>
      </div>
    </div>
  </nav>
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">
      <a className="navbar-brand" href="#">
       {props.brand}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              {props.home} <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              {props.about}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#service">
              {props.service}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Portfolio">
              {props.portfolio}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Team">
              {props.team}
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="http://example.com"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
            {props.dropdown}
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contact">
              {props.contact}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="container-fluid skyscraper">
    <div className="container">
      <div className="row fbox">
        <div className="col-sm-9" style={{ marginTop: "15%" }}>
          <h1 className="welcome">
            <span style={{ color: "#106eea" }}>{props.  text}</span>
          </h1>
          <p className="weteam">
            We are team of talented designers making websites with Bootstrap
          </p>
          <button type="button" className="btn btn-primary">
            {props.button}
          </button>
          <button
            type="button"
            className="btn"
            href="https://www.youtube.com/watch?v=cfg9_cp4zGk"
          >
            <i
              className="fa fa-play-circle-o"
              aria-hidden="true"
              style={{ color: "#106eea" }}
            />{" "}
            {props.video}
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="container" style={{ marginTop: 30 }}>
      <div className="row">
        <div className="col-sm-3">
          <div className="bgstyle">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogeTYuqa1lelMmvOGn4ouVvoc3cIyvggSPA&usqp=CAU" className="nav2"></img>
            <h3 className="head">Lorem Ipsum</h3>
            <p>
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi
            </p>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="bgstyle">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9FuoPGIsocBRf2rPRlsiDQctTU4d5gYZ0u5BQFHkgnsnaBpfC6iLiwuSBgMlq_aDB_M&usqp=CAU" className="nav2"></img>
            <h4 className="head">Sed ut Prespiciatis</h4>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore
            </p>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="bgstyle">
            <img src="https://static.thenounproject.com/png/1208704-200.png" className="nav2"></img>
            <h3 className="head">Mangi Dolores</h3>
            <p>
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi{" "}
            </p>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="bgstyle">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr07LowNyuQiywQorZ3ZLNR37cZUJ0sq5sDA&usqp=CAU" className="nav2"></img>
            <h3 className="head">Nemo Enim</h3>
            <p>
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="container-fluid mt-4 pb-5"
    style={{ backgroundColor: "#f6f9fe" }}
  >
    <h3 className="about" id="about">
      {" "}
      {props.abouts}
    </h3>
    <div className="abtcontant">
      <h2>
        Find Out More <span style={{ color: "#106eea" }}>About Us</span>
      </h2>
      <p>
        Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
        <br />
        adipisci expedita at voluptas atque vitae autem.
      </p>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <img src={props.img1} className="ofcwork" />
        </div>
        <div className="col-sm-6">
          <h3>
            Voluptatem dignissimos provident quasi corporis voluptates sit
            assumenda.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="alogo" style={{ marginTop: 50 }}>
            <h4>
              <i className="fa fa-home home" aria-hidden="true" /> Ullamco
              laboris nisi ut aliquip consequat
            </h4>
          </div>
          <div className="alogo">
            <h4>
              <i className="fa fa-picture-o home" aria-hidden="true" /> Ullamco
              laboris nisi ut aliquip consequat
            </h4>
          </div>
          <p style={{ marginTop: 20 }}>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="container" style={{ marginTop: 40 }}>
    <div className="row">
      <div className="col-sm-6">
        <div className="container">
          <h6>HTML</h6>
          <div className="progress">
            <div className="progress-bar" style={{ width: "100%" }}>
              100%
            </div>
          </div>
          <h6>CSS</h6>
          <div className="progress">
            <div className="progress-bar" style={{ width: "90%" }}>
              90%
            </div>
          </div>
          <h6>JAVA</h6>
          <div className="progress">
            <div className="progress-bar" style={{ width: "75%" }}>
              75%
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="container">
          <h6>PHP</h6>
          <div className="progress">
            <div className="progress-bar" style={{ width: "80%" }}>
              80%
            </div>
          </div>
          <h6>WORDPRESS/CMS</h6>
          <div className="progress">
            <div className="progress-bar" style={{ width: "90%" }}>
              90%
            </div>
          </div>
          <h6>PHOTOSHOP</h6>
          <div className="progress">
            <div className="progress-bar" style={{ width: "55%" }}>
              55%
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="container" style={{ marginTop: 100 }}>
        <div className="row">
          <div className="col-sm-3" style={{ textAlign: "center" }}>
            <div className="cominfo">
              <img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/home_circle_icon_137496.png" className="nav1"></img>
              <h3 className="head">232</h3>
              <p>Happy clients</p>
            </div>
          </div>
          <div className="col-sm-3" style={{ textAlign: "center" }}>
            <div className="cominfo">
              <img src="https://static.thenounproject.com/png/4778723-200.png" className="nav1" ></img>
              <h3 className="head">521</h3>
              <p>Projects</p>
            </div>
          </div>
          <div className="col-sm-3" style={{ textAlign: "center" }}>
            <div className="cominfo">
              <img src="https://image.shutterstock.com/image-vector/web-click-icon-260nw-1268734198.jpg" className="nav1"></img>
              <h3 className="head">1463</h3>
              <p>Hours Of Support</p>
            </div>
          </div>
          <div className="col-sm-3" style={{ textAlign: "center" }}>
            <div className="cominfo">
              <img src="https://cdn-icons-png.flaticon.com/128/1837/1837537.png" className="nav1"></img>
              <h3 className="head">15</h3>
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="container-fluid mt-4 pb-5"
    style={{ backgroundColor: "#f6f9fe" }}
  >
    <h3 className="about" id="service">
      {props.service}
    </h3>
    <div className="abtcontant">
      <h2>
        Check our <span style={{ color: "#106eea" }}>Services</span>
      </h2>
      <p>
        Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
        <br />
        adipisci expedita at voluptas atque vitae autem.
      </p>
    </div>
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-sm-4" style={{ textAlign: "center" }}>
            <div className="service">
              <img src="https://www.dhs.gov/sites/default/files/styles/large_card/public/2022-07/DHS1094_Website_Icons_Campus%20Law%20Enforcement%20Pocket%20Card%20.png?h=a660c06f&itok=0czFKo9v" className="nav3"></img>
              <h3 className="head">Lorem Ipsum </h3>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
          </div>
          <div className="col-sm-4" style={{ textAlign: "center" }}>
            <div className="service">
              <img src="https://www.dhs.gov/sites/default/files/styles/large/public/2022-07/Website_Icons_08_062422.png?itok=vgjabPQ-" className="nav3"></img>
              <h4 className="head">Sed ut Prespiciatis</h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </p>
            </div>
          </div>
          <div className="col-sm-4" style={{ textAlign: "center" }}>
            <div className="service">
              <img src="https://www.dhs.gov/sites/default/files/styles/large_card/public/2022-02/Campus_Law_Enforcement_121621_Update.png?h=935c734e&itok=wPbgONKM" className="nav3"></img>
              <h3 className="head">Mangi Dolores</h3>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: 30 }}>
          <div className="col-sm-4" style={{ textAlign: "center" }}>
            <div className="service">
              <img src="https://www.dhs.gov/sites/default/files/styles/large_card/public/2023-02/DHS_BC_Web_Icon%20_FLETC_Concern_Course_1.png?h=79c9244b&itok=qZGSvi8E"
                className="nav3"
               
              ></img>
              <h3 className="head">Nemo Enim</h3>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi{" "}
              </p>
            </div>
          </div>
          <div className="col-sm-4" style={{ textAlign: "center" }}>
            <div className="service">
              <img src="https://www.dhs.gov/sites/default/files/styles/large_card/public/2022-05/BC2022_Website_Icons_050122_24.png?h=6126dd1e&itok=aYoP6giA" className="nav3"></img>
              <h4 className="head">Dele Cardo</h4>
              <p>
                Quis consequatur saepe eligendi voluptatem consequatur dolor
                lorem
              </p>
            </div>
          </div>
          <div className="col-sm-4" style={{ textAlign: "center" }}>
            <div className="service">
              <img src="https://www.dhs.gov/sites/default/files/styles/large_card/public/2022-06/work%20with%20us%20icon.png?h=d9d28903&itok=N00XEh6o" className="nav3"></img>
              <h3 className="head">Nemo Enim</h3>
              <p>
                Modi nostrum vel laborum. Porro fugit error sit minus sapiente
                sit aspernatur
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="demo" className="carousel slide" data-ride="carousel">
    <ul className="carousel-indicators">
      <li data-target="#demo" data-slide-to={0} className="active" />
      <li data-target="#demo" data-slide-to={1} />
      <li data-target="#demo" data-slide-to={2} />
    </ul>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="img2" src={props.img2} width="100%" height={500} />
        <div className="carousel-caption">
          <h3 style={{ textAlign: "center",color:"black" }}>Los Angeles</h3>
          <p style={{textAlign:"center",color:"black"}}>We had such a great time in LA!</p>
        </div>
      </div>
      <div className="carousel-item">
        <img className="img2" src={props.img3} width="100%" height={501} />
        <div className="carousel-caption">
          <h3 style={{ textAlign: "center",color:"black" }}>Chicago</h3>
          <p style={{textAlign:"center",color:"black"}}>Thank you,Chicago!</p>
        </div>
      </div>
      <div className="carousel-item">
        <img className="img2" src={props.img4} width="100%" height={500} />
        <div className="carousel-caption">
          <h3  style={{ textAlign: "center",color:"black" }}>New York</h3>
          <p style={{textAlign:"center",color:"black"}}>We love the Big Apple!!!!</p>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#demo" data-slide="prev">
      <span className="carousel-control-prev-icon" />
    </a>
    <a className="carousel-control-next" href="#demo" data-slide="next">
      <span className="carousel-control-next-icon" />
    </a>
  </div>
  <div className="container-fluid mt-4 pb-5">
    <h3 className="about" id="Portfolio">
      PORTFOLIO
    </h3>
    <div className="abtcontant">
      <h2>
        Check our <span style={{ color: "#106eea" }}>Portfolio</span>
      </h2>
      <p>
        Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
        <br />
        adipisci expedita at voluptas atque vitae autem.
      </p>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-dpYrr_yMiKFAKCnj7wmHejIMEsBro-IKv0-l97X0zfSGEAB4_G2-_lbtsbxYdER0mM&usqp=CAU" className="imggallry"  />
        </div>
        <div className="col-sm-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-dpYrr_yMiKFAKCnj7wmHejIMEsBro-IKv0-l97X0zfSGEAB4_G2-_lbtsbxYdER0mM&usqp=CAU" className="imggallry"  />
        </div>
        <div className="col-sm-4">
          <img src="https://as1.ftcdn.net/v2/jpg/01/20/57/90/500_F_120579054_AynCyEjukCbaw858ZEDoBGiEh2fLmNam.jpg" className="imggallry"  />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-sm-4">
          <img src="https://www.businessinsider.in/photo/94484815/best-laptop-for-school-students.jpg?imgsize=41650" className="imggallry2"  />
        </div>
        <div className="col-sm-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9kpOKTBSIs13t-TlnYMmqHjFBI7XLFTnvlA&usqp=CAU" className="imggallry2" alt="lamp" />
        </div>
        <div className="col-sm-4">
          <img src="https://cdn.linak.com/-/media/images/tech-and-trends/offices-are-changing-but-desks-are-here-to-staystanding.jpg?rev=7cd1a6dd-e80a-4487-891c-5ede379e8dea" className="imggallry2" alt="googles" />
        </div>
      </div>
    </div>
    <div
      className="container-fluid mt-4 pb-5"
      style={{ backgroundColor: "#f6f9fe" }}
    >
      <h3 className="about" id="Team">
        TEAM
      </h3>
      <div className="abtcontant">
        <h2>
          Our Hardworking<span style={{ color: "#106eea" }}>Team</span>
        </h2>
        <p>
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          <br />
          adipisci expedita at voluptas atque vitae autem.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                src="https://cdn.linak.com/-/media/images/tech-and-trends/offices-are-changing-but-desks-are-here-to-staystanding.jpg?rev=7cd1a6dd-e80a-4487-891c-5ede379e8dea"
                data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                alt="Thumbnail [100%x225]"
                style={{ height: 250, width: "100%", display: "block" }}
                data-holder-rendered="true"
              />
              <div className="card-body">
                <h3>Sundar Pichai.</h3>
                <p className="card-text">Chief Executive Officer</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                src="https://cdn.linak.com/-/media/images/tech-and-trends/offices-are-changing-but-desks-are-here-to-staystanding.jpg?rev=7cd1a6dd-e80a-4487-891c-5ede379e8dea"
                data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                alt="Thumbnail [100%x225]"
                style={{ height: 250, width: "100%", display: "block" }}
                data-holder-rendered="true"
              />
              <div className="card-body">
                <h3>Ghazal Alagh</h3>
                <p className="card-text">Product Manager</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                src="https://i.rtings.com/assets/pages/6S2WXjTl/best-laptop-medium.jpg"
                data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                alt="Thumbnail [100%x225]"
                style={{ height: 250, width: "100%", display: "block" }}
                data-holder-rendered="true"
              />
              <div className="card-body">
                <h3>Larissa Suzuki</h3>
                <p className="card-text">Chief Technology Officer</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                src="https://images.pexels.com/photos/17367708/pexels-photo-17367708/free-photo-of-laptop-on-desk-in-office.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                alt="Thumbnail [100%x225]"
                style={{ height: 250, width: "100%", display: "block" }}
                data-holder-rendered="true"
              />
              <div className="card-body">
                <h3>Deepak Kohaar</h3>
                <p className="card-text">Accountant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid mt-4 pb-5">
      <h3 className="about">{props.pricing}</h3>
      <div className="abtcontant">
        <h2>
          Check our<span style={{ color: "#106eea" }}> Pricing</span>
        </h2>
        <p>
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          adipisci expedita at voluptas atque vitae autem.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div
              className="card mb-4 box-shadow"
              style={{ textAlign: "center" }}
            >
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Free</h4>
              </div>
              <div className="card-body">
                <h3 className="card-title pricing-card-title">
                  <sup>
                    <span
                      style={{
                        color: "#106eea",
                        fontSize: 25,
                        fontWeight: 700
                      }}
                    >
                      $0{" "}
                    </span>
                  </sup>
                  <small className="text-muted">/ month</small>
                </h3>
                <ul
                  className="list-unstyled mt-3 mb-4 pt-3 pb-3"
                  style={{ lineHeight: 4 }}
                >
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li>
                    <del>Pharetra massa</del>
                  </li>
                  <li>
                    <del>Massa ultricies mi</del>
                  </li>
                </ul>
                <button type="button" className="btn btn-primary btn-block ">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="card mb-4 box-shadow"
              style={{ textAlign: "center" }}
            >
              <div className="card-header bg-primary">
                <h4 className="my-0 font-weight-normal">Business</h4>
              </div>
              <div className="card-body">
                <h3 className="card-title pricing-card-title">
                  <sup>
                    <span
                      style={{
                        color: "#106eea",
                        fontSize: 25,
                        fontWeight: 700
                      }}
                    >
                      $19{" "}
                    </span>
                  </sup>
                  <small className="text-muted">/ month</small>
                </h3>
                <ul
                  className="list-unstyled mt-3 mb-4 pt-3 pb-3"
                  style={{ lineHeight: 4 }}
                >
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li>Pharetra massa</li>
                  <li>
                    <del>Massa ultricies mi</del>
                  </li>
                </ul>
                <button type="button" className="btn btn-primary btn-block ">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="card mb-4 box-shadow"
              style={{ textAlign: "center" }}
            >
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Developer</h4>
              </div>
              <div className="card-body">
                <h3 className="card-title pricing-card-title">
                  <sup>
                    <span
                      style={{
                        color: "#106eea",
                        fontSize: 25,
                        fontWeight: 700
                      }}
                    >
                      $29{" "}
                    </span>
                  </sup>
                  <small className="text-muted">/ month</small>
                </h3>
                <ul
                  className="list-unstyled mt-3 mb-4 pt-3 pb-3"
                  style={{ lineHeight: 4 }}
                >
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li>Pharetra massa</li>
                  <li>Massa ultricies mi</li>
                </ul>
                <button type="button" className="btn btn-primary btn-block ">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="card mb-4 box-shadow"
              style={{ textAlign: "center" }}
            >
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">
                  Ultimate<span className="badge badge-primary">Advanced</span>
                </h4>
              </div>
              <div className="card-body">
                <h3 className="card-title pricing-card-title">
                  <sup>
                    <span
                      style={{
                        color: "#106eea",
                        fontSize: 25,
                        fontWeight: 700
                      }}
                    >
                      $49{" "}
                    </span>
                  </sup>
                  <small className="text-muted">/ month</small>
                </h3>
                <ul
                  className="list-unstyled mt-3 mb-4 pt-3 pb-3"
                  style={{ lineHeight: 4 }}
                >
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li>Pharetra massa</li>
                  <li>Massa ultricies mi</li>
                </ul>
                <button type="button" className="btn btn-primary btn-block ">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid mt-4 pb-5"
        style={{ backgroundColor: "#f6f9fe" }}
      >
        <h3 className="about">{props.faq}</h3>
        <div className="abtcontant">
          <h2>
            Frequently Asked<span style={{ color: "#106eea" }}> Questions</span>
          </h2>
          <p>
            Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
            adipisci expedita at voluptas atque vitae autem.
          </p>
        </div>
        <div className="container">
          <div id="accordion">
            <div className="card faq">
              <div className="card-header">
                <a
                  className="card-link cardcontent"
                  data-toggle="collapse"
                  href="#collapseOne"
                >
                  Non consectetur a erat nam at lectus urna duis?
                </a>
              </div>
              <div
                id="collapseOne"
                className="collapse"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                  volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                  magna fringilla urna porttitor rhoncus dolor purus non.
                </div>
              </div>
            </div>
            <div className="card faq">
              <div className="card-header">
                <a
                  className="collapsed card-link cardcontent"
                  data-toggle="collapse"
                  href="#collapseTwo"
                >
                  Feugiat scelerisque varius morbi enim nunc faucibus a
                  pellentesque?
                </a>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                  ultrices eros in cursus turpis massa tincidunt dui.
                </div>
              </div>
            </div>
            <div className="card faq">
              <div className="card-header">
                <a
                  className="collapsed card-link cardcontent"
                  data-toggle="collapse"
                  href="#collapseThree"
                >
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi?
                </a>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                  sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                  nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                  pellentesque eu tincidunt. Lectus urna duis convallis
                  convallis tellus. Urna molestie at elementum eu facilisis sed
                  odio morbi quis
                </div>
              </div>
            </div>
            <div className="card faq">
              <div className="card-header">
                <a
                  className="collapsed card-link cardcontent"
                  data-toggle="collapse"
                  href="#collapseFour"
                >
                  Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                </a>
              </div>
              <div
                id="collapseFour"
                className="collapse"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                  ultrices eros in cursus turpis massa tincidunt dui.
                </div>
              </div>
            </div>
            <div className="card faq">
              <div className="card-header">
                <a
                  className="collapsed card-link cardcontent"
                  data-toggle="collapse"
                  href="#collapseFive"
                >
                  Tempus quam pellentesque nec nam aliquam sem et tortor
                  consequat?
                </a>
              </div>
              <div
                id="collapseFive"
                className="collapse"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Molestie a iaculis at erat pellentesque adipiscing commodo.
                  Dignissim suspendisse in est ante in. Nunc vel risus commodo
                  viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                  bibendum est. Purus gravida quis blandit turpis cursus in
                </div>
              </div>
            </div>
            <div className="card faq">
              <div className="card-header">
                <a
                  className="collapsed card-link cardcontent"
                  data-toggle="collapse"
                  href="#collapseSix"
                >
                  Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                  turpis nunc eget lorem dolor?
                </a>
              </div>
              <div
                id="collapseSix"
                className="collapse"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris
                  vitae ultricies leo integer malesuada nunc vel. Tincidunt eget
                  nullam non nisi est sit amet. Turpis nunc eget lorem dolor
                  sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                  Pellentesque diam volutpat commodo sed egestas egestas
                  fringilla phasellus faucibus. Nibh tellus molestie nunc non
                  blandit massa enim nec.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <h3 className="about">CONTACT</h3>
      <div className="abtcontant">
        <h2>
          <span style={{ color: "#106eea" }}>Contact Us</span>
        </h2>
        <p>
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          adipisci expedita at voluptas atque vitae autem.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="container">
              <div className="ouraddres">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/449/433/small/Basic_Element_15-30__28237_29.jpg" className="nav4"></img>
                <h3>{props.address}</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
              <div className="map mt-4" style={{ width: "100%" }}>
                <iframe
                  width="100%"
                  height={385}
                  frameBorder={0}
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=innovate369+(innovate369)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                >
                 
                </iframe>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6 ">
                <div className="contact">
                  <img src="https://cdn-icons-png.flaticon.com/512/666/666162.png" className="nav4"></img>
                  <h3>{props.email}</h3>
                  <p>contact@example.com</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="contact" id="Contact">
                  <img src="https://cdn-icons-png.flaticon.com/512/455/455705.png" className="nav4"></img>
                  <h3>{props.call}</h3>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>
            </div>
            <div
              className="container mt-4"
              style={{ backgroundColor: "aliceblue" }}
            >
              <div className="container fform" style={{ padding: 30 }}>
                <form action="/action_page.php">
                  <div className="row">
                    <div className="col pl-0">
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        name="email"
                      />
                    </div>
                    <div className="col pl-0">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        name="pswd"
                      />
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="sub"
                      style={{ marginTop: 10 }}
                    />
                    <div className="form-group">
                      <textarea
                        className="form-control mt-2"
                        name="message"
                        rows={5}
                        cols="100%"
                        placeholder="Message"
                        required=""
                        style={{ height: 170, width: "100%" }}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="fbtn">
                    <button type="submit" className="btn btn-primary mt-2 sub">
                      {props.submitbutton}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="container-fluid mt-4"
      style={{ backgroundColor: "aliceblue" }}
    >
      <div style={{ textAlign: "center", padding: 40 }}>
        <h3>{props.heading}</h3>
        <p>
          Tamen quem nulla quae legam multos aute sint culpa legam noster magna
        </p>
        <form action="" method="post">
          <input type="email" name="email" className="joinour" />
          <input
            type="submit"
            defaultValue="Subscribe"
            className="joinourbtn"
          />
        </form>
      </div>
    </div>
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-3">
          <h3>BizLand.</h3>
          <p>
            A108 Adam Street
            <br />
            New York, NY 535022
            <br />
            United States
          </p>
          <p>
            Phone: +1 5589 55488 55
            <br />
            Email: info@example.com
          </p>
        </div>
        <div className="col-sm-3">
          <h5>Useful Links</h5>
          <p>
            <a className="uselink" href="#">
              Home
            </a>
          </p>
          <p>
            <a className="uselink" href="#">
              About Us
            </a>
          </p>
          <p>
            <a className="uselink" href="#">
              Service
            </a>
          </p>
          <p>
            <a className="uselink" href="#">
              Terms of service
            </a>
          </p>
          <p>
            <a className="uselink" href="#">
              privacy policy
            </a>
          </p>
        </div>
        <div className="col-sm-3">
          <h5>Our Services</h5>
          <p>
            <a className="uselink" href="#">
              Web Design
            </a>
          </p>
          <p>
            <a className="uselink" href="#">
              Web Development
            </a>
          </p>
          <p>
            <a className="uselink" href="#">
              Product Management
            </a>
          </p>
          <p>
            <a className="uselink" href="#">
              Marketing
            </a>
          </p>
          <p>
            <a className="uselink" href="#">
              Graphic Design
            </a>
          </p>
        </div>
        <div className="col-sm-3">
          <h5>Our Social Networks</h5>
          <p>
            Cras fermentum odio eu feugiat lide par naso tierra videa magna
            derita valies
          </p>
          <div>
            <a className="socialnet" href="#">
              <img src="https://seeklogo.com/images/T/twitter-icon-circle-black-logo-35827D553B-seeklogo.com.png" className="nav5"></img>
            </a>
            <a className="socialnet" href="#">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Facebook_icon_%28black%29.svg/1024px-Facebook_icon_%28black%29.svg.png" className="nav5"></img>
            </a>
            <a className="socialnet" href="#">
              <img src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-1/1024/instagram-512.png" className="nav5"></img>
            </a>
            <a className="socialnet" href="#">
              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" className="nav5"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid" style={{ backgroundColor: "aliceblue" }}>
    <div className="container mt-4 p-3" style={{ textAlign: "center" }}>
      Copyright <b>BizLand.</b> All Rights Reserved{" "}
      <sup>
        <i
          className="fa fa-copyright"
          aria-hidden="true"
          style={{ fontSize: 12 }}
        />
      </sup>
    </div>
  </div>
</>
)}



