import './fronted.css';


export default function Navs({url,home,about,product}){
    
      return (
      <>
        <div>
          <table className="nav">
            <tbody><tr>
                <th style={{width: '100%'}}>
                  <ul style={{listStyle: 'none'}}>
                    <li><img src={url} className="img"></img></li>
                    <li><a className="active" href="#home">{home}</a></li>
                    <li><a href="#about">{about}</a></li>
                    <li><a href="#product">{product}</a></li>
                    <li className="dropdown">
                      <a href="#" className="#services">Services</a>
                      <div className="dropdown-content">
                        <a href="#">Engage</a>
                        <a href="#">Pontificate</a>
                        <a href="#">Synergize</a>
                      </div>
                    </li>
                  </ul>
                </th>
                <th>
                </th></tr><tr>
                <th style={{float: 'right'}}>
                  <input type="text" className="form-control" /></th>
                <th>
                  <button className="btn2">Search</button>
                </th>
              </tr>
            </tbody></table>
        </div>

<div>
<div className="abc">
  <h1 style={{opacity: '0.5'}}>Dramatically Engage</h1>
  <p style={{opacity: '0.5'}}>Objectively innovate empowered manufactured products whereas parallel platforms.</p>
  <button className="btn1">Engage Now</button>
</div>
<div className="xyz">
  <h1>Superior Collaboration <span style={{color: 'grey', fontSize: '20px'}}> Visualize Quality</span></h1>
  <p style={{color: 'grey'}}>Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior<br /> collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.<br />
  </p><div>
    <table style={{width: '100%'}}>
      <tbody><tr>
          <th>
            <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg
" width="300px" height="400px" />
            <h1 style={{color: '#337ab7', fontWeight: 'normal'}}>Efficiently Unleash</h1>
            <p style={{color: '#959595', fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal'}}>Collaboratively administrate empowered markets via plug-<br />and-play networks. Dynamically procrastinate B2C users<br /> after installed base benefits. Dramatically visualize<br /> customer directed convergence without revolutionary<br /> ROI.</p>
          </th>
          <th>
            <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg
" width="300px" height="400px" />
            <h1 style={{color: '#337ab7', fontWeight: 'normal'}}>Completely Synergize</h1>
            <p style={{color: '#959595', fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal'}}>Dramatically maintain clicks-and-mortar solutions without<br /> functional solutions. Efficiently unleash cross-media<br /> information without cross-media value. Quickly maximize<br /> timely deliverables for real-time schemas.</p>
          </th>
          <th>
            <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" width="300px" height="400px" />
            <h1 style={{color: '#337ab7', fontWeight: 'normal'}}>Dynamically Procrastinate</h1>
            <p style={{color: '#959595', fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal'}}>Professionally cultivate one-to-one customer service with <br />robust ideas. Completely synergize resource taxing<br /> relationships via premier niche markets. Dynamically<br /> innovate resource-leveling customer service for state of<br /> the art customer service.</p>
          </th>
        </tr>
      </tbody></table>
  </div>
</div></div>


<div>
        <div className="pqr">
          <table style={{width: '100%'}}>
            <tbody><tr>
                <th style={{fontWeight: 'normal'}}>
                  <img className="radius" src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg" />
                  <h1 style={{fontSize: '25px', color: '#000', fontWeight: 'normal'}}>Dynamically Procrastinate</h1>
                  <p style={{fontSize: '15px'}}>Collaboratively administrate empowered markets via <br />plug-and-play networks. Dynamically procrastinate <br />B2C users after installed base benefits. Dramatically <br />visualize customer directed convergence without<br /> revolutionary ROI.</p>
                  <button className="btn">Procrastinate</button></th>
                <th style={{fontWeight: 'normal'}}>
                  <img className="radius" src="https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Hindu-Shiva-God-Wallpaper-Free-Download.jpg" />
                  <h1 style={{fontSize: '25px', color: '#000', fontWeight: 'normal'}}>Efficiently Unleash</h1>
                  <p style={{fontSize: '15px'}}>Dramatically maintain clicks-and-mortar solutions<br /> without functional solutions. Efficiently unleash cross-<br />media information without cross-media value.<br /> Quickly maximize timely deliverables for real-time <br />schemas.</p>
                  <button className="btn">Unleash</button></th>
                <th style={{fontWeight: 'normal'}}>
                  <img className="radius" src="https://thumbs.dreamstime.com/b/taj-mahal-agra-india-14026311.jpg" />
                  <h1 style={{fontSize: '25px', color: '#000', fontWeight: 'normal'}}>Completely Synergize</h1>
                  <p style={{fontSize: '15px', color: 'lightblack'}}>Professionally cultivate one-to-onecustomer service<br /> with robust ideas. Completely synergize resource <br />taxingrelationships via premier niche markets.<br /> Dynamically innovate resource-leveling customer<br /> service for state of the art<br /> customer service.</p>
                  <button className="btn">Synergize</button></th>
              </tr>
            </tbody></table>
        </div>
        <p>
          <a href="#">Terms &amp; Condition</a>
          |
          <a href="#">Privacy Policy</a>
          |
          <a href="#">Contact</a>
        </p>
        <p style={{color: '#959595'}}>Copyright ©  Example.com 2015</p>
      </div>


</>
        
      )}
