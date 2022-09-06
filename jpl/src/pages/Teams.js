import { useEffect, useState } from 'react'
/* import '../assets/css/owl.carousel.css'; */
/* import '../assets/css/style.css';
import '../assets/css/style.css.map';  */
import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';
/* import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../assets/css/tab.style.css'; */
import { useDispatch, useSelector } from 'react-redux';
import { getAllTakim } from '../redux-new/actions/takim'
import moment from 'moment';
import { getAllSehir } from '../redux-new/actions/sehir';
import { setCurrentLig } from '../redux-new/slices/currentLig';

export default function Teams() {
  const dispatch = useDispatch();

  const sehirler = useSelector(state => state.sehir);
  const activeSehir = useSelector(state => state.currentSehir);
  const activeLig = useSelector(state => state.currentLig);

  console.log("ACTIVE SEHIR VE LIG: ", activeSehir.currentSehir, activeLig.currentLig)

  const takim = useSelector(state => state.takim); 

  useEffect(() => {
    dispatch(getAllTakim());
  }, []);

  useEffect(() => {
    dispatch(getAllSehir());
  }, []);

  const teamsFunction = (ligadi, ) => {
    dispatch(setCurrentLig(ligadi));
  }


  function checkLig(sehir) {
    return sehir == activeSehir.currentSehir;
  }

  let finalTable = sehirler.filter((item) => checkLig(item.sehiradi));


  return (
    <div>
      <Header />
      <Slider />
      <div id="teams" className="teams">
        <div className="container">


          <div className="heading col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h4 className="border">Our Teams</h4>

          </div>
          {/* <div class="active-team-tabs">
            <ul className="col-md-12" role="tablist">
              <li>
                <input type="radio" name="active_tabs" id="btnteam-1" class="btnteam-1" checked />
                <label for="btnteam-1" class="btnteam" >U9</label>
              </li>
              <li>
                <input type="radio" name="active_tabs" id="btnteam-2" class="btnteam-2" />
                <label for="btnteam-2" class="btnteam" > U10</label>
              </li>
              <li>
                <input type="radio" name="active_tabs" id="btnteam-3" class="btnteam-3" />
                <label for="btnteam-3" class="btnteam" > U11</label>
              </li>
              <li>
                <input type="radio" name="active_tabs" id="btnteam-4" class="btnteam-4" />
                <label for="btnteam-4" class="btnteam" > U12</label>
              </li>

            </ul>
          </div> */}


          <div className="teams-frame col-lg-12">

            <div class="active-team-tabs col-xs-2">
              <ul  role="tablist">
              {
                  finalTable.length > 0 
                  ? finalTable[0].ligler.map((sehir, index) => {
                  return (
                      // <li onClick={() => setLig(sehir.ligadi)}>
                      <li onClick={() => teamsFunction(sehir.ligadi, )}>
                        <input type="radio" name="active_tabs" id={`btnteam-${index}`} class={`btnteam-${index}`} />
                        <label for={`btnteam-${index}`} class="btnteam">{sehir.ligadi}</label>
                      </li>
                  )}
                  )
                  : <div>Yükleniyor...</div>
                }
                {/* <li>
                  <input type="radio" name="active_tabs" id="btnteam-1" class="btnteam-1" checked />
                  <label for="btnteam-1" class="btnteam" >U9</label>
                </li>
                <li>
                  <input type="radio" name="active_tabs" id="btnteam-2" class="btnteam-2" />
                  <label for="btnteam-2" class="btnteam" > U10</label>
                </li>
                <li>
                  <input type="radio" name="active_tabs" id="btnteam-3" class="btnteam-3" />
                  <label for="btnteam-3" class="btnteam" > U11</label>
                </li>
                <li>
                  <input type="radio" name="active_tabs" id="btnteam-4" class="btnteam-4" />
                  <label for="btnteam-4" class="btnteam" > U12</label>
                </li> */}
              </ul>
            </div>
            <div className="tab-pane fade active in col-xs-10" id="senior-team">


              <div className="player-profile">
                <div className="profile-slider">
                  <div className='team-players'>
                    <div className="profile-single">

                    <div className="big-thumbnail">
                      {
                        activeLig.currentLig != null
                        ? takim.filter(test1 => test1.lig === activeLig.currentLig && test1.sehir === activeSehir.currentSehir).map((takim, index) => {
                          if(index < 1) {
                            return (
                              <img src={takim.logo} alt="takim logo" />
                            )
                          }
                        })
                        : <img src={require("../assets/img/team-player.jpg")} alt="loading.." />
                      }
                      </div>
                        
                      
                      <div className="player-description">
                        {
                          activeLig.currentLig != null
                          ? takim.filter(test1 => test1.lig === activeLig.currentLig && test1.sehir === activeSehir.currentSehir).map((takim, index) => {
                            if(index < 1) {
                              return (
                                <>
                                  <h3>{takim.adi}</h3>
                                  <ul className="player-details pull-left custom-list">
                                    <li><h5>Kurulus Tarihi:</h5><span>{moment(takim.kurulustarihi).toISOString().slice(0,10)}</span></li>
                                    <li><h5>Adres:</h5><span>{takim.adres}</span></li>
                                    <li><h5>Hoca Adı:</h5><span>{takim.hocaadi}</span></li>
                                  </ul>
                                  <ul className="player-details pull-right custom-list">
                                    <li><h5>Konum:</h5><span>{takim.konum}</span></li>
                                    <li><h5>Sorumlu:</h5><span>{takim.sorumlu}</span></li>
                                    <li><h5>Lig:</h5><span>{takim.lig}</span></li>
                                  </ul>
                                  <a href="#" className="button read_more"><span>Read More</span><i className="fa fa-arrow-circle-right"></i></a>
                                </>
                              )
                            }
                          })
                          : <div>Yükleniyor...</div>
                        }
                      </div>
                    </div></div>
                  <div className="team-players">
                  {
                          activeLig.currentLig != null
                          ? takim.filter(test1 => test1.lig === activeLig.currentLig && test1.sehir === activeSehir.currentSehir).map((takim, index) => {
                            if(index < 1) {
                              return (
                                <>
                                {
                                  takim.oyuncular.map((oyuncu, index) => {
                                    return (
                                        <div className="player-profile">
                                          <img src={oyuncu.resim} alt="" className="thumbnail" />
                                          <span className="number">{oyuncu.formano}</span>
                                          <span className="name">{oyuncu.adi}</span>
                                        </div>
                                    )
                                })
                              } 
                                </>
                              )
                            }
                          })
                          : <div>Yükleniyor...</div>
                        }
                    {/* {
                      takim.length > 0
                      ? takim.oyuncular.map((item, index) => {
                        return (
                            <>
                              <div className="player-profile">
                                <img src={require(`${takim.oyuncular.resim}`)} alt="" className="thumbnail" />
                                <span className="number">{takim.oyuncular.formano}</span>
                                <span className="name">{takim.oyuncular.adi}</span>
                              </div>
                            </>
                            )
                          })
                            : <div>Loading...</div>
                      } */}
                    {/* <div className="player-profile">
                      <img src={require("../assets/img/team-player8.jpg")} alt="" className="thumbnail" />
                      <span className="number">33</span>
                      <span className="name">Ola Nordmann</span>
                    </div>
                    <div className="player-profile">
                      <img src={require("../assets/img/team-player6.jpg")} alt="" className="thumbnail" />
                      <span className="number">9</span>
                      <span className="name">Mathieu Debuchy</span>
                    </div>
                    <div className="player-profile">
                      <img src={require("../assets/img/team-player8.jpg")} alt="" className="thumbnail" />
                      <span className="number">19</span>
                      <span className="name">Ican Ivanovich</span>
                    </div>
                    <div className="player-profile">
                      <img src={require("../assets/img/team-player9.jpg")} alt="" className="thumbnail" />
                      <span className="number">17</span>
                      <span className="name">Mathieu Debuchy</span>
                    </div>
                    <div className="player-profile">
                      <img src={require("../assets/img/team-player7.jpg")} alt="" className="thumbnail" />
                      <span className="number">13</span>
                      <span className="name">Ola Nordmann</span>
                    </div>
                    <div className="player-profile">
                      <img src={require("../assets/img/team-player8.jpg")} alt="" className="thumbnail" />
                      <span className="number">45</span>
                      <span className="name">Hong Gildong</span>
                    </div>
                    <div className="player-profile">
                      <img src={require("../assets/img/team-player7.jpg")} alt="" className="thumbnail" />
                      <span className="number">15</span>
                      <span className="name">Mathieu Debuchy</span>
                    </div>
                    <div className="player-profile">
                      <img src={require("../assets/img/team-player7.jpg")} alt="" className="thumbnail" />
                      <span className="number">11</span>
                      <span className="name">Ola Nordmann</span>
                    </div>
                    <div className="player-profile">
                      <img src={require("../assets/img/team-player7.jpg")} alt="" className="thumbnail" />
                      <span className="number">21</span>
                      <span className="name">Hong Gildong</span>
                    </div>
                    <div className="player-profile">
                      <img src={require("../assets/img/team-player7.jpg")} alt="" className="thumbnail" />
                      <span className="number">11</span>
                      <span className="name">Ican Ivanovich</span>
                    </div>
                    <div className="player-profile">
                      <img src={require("../assets/img/team-player7.jpg")} alt="" className="thumbnail" />
                      <span className="number">14</span>
                      <span className="name">Hong Gildong</span>
                    </div>
                    <div className="player-profile">
                      <img src={require("../assets/img/team-player7.jpg")} alt="" className="thumbnail" />
                      <span className="number">18</span>
                      <span className="name">Hong Gildong</span>
                    </div>
                    <div className="player-profile">
                      <img src={require("../assets/img/team-player7.jpg")} alt="" className="thumbnail" />
                      <span className="number">19</span>
                      <span className="name">Ola Nordmann</span>
                    </div>
                    <div className="player-profile">
                      <img src={require("../assets/img/team-player7.jpg")} alt="" className="thumbnail" />
                      <span className="number">6</span>
                      <span className="name">Mathieu Debuchy</span>
                    </div>
                    <div className="player-profile">
                      <img src={require("../assets/img/team-player7.jpg")} alt="" className="thumbnail" />
                      <span className="number">4</span>
                      <span className="name">Ican Ivanovich</span>
                    </div>
                    <div className="player-profile">
                      <img src={require("../assets/img/team-player7.jpg")} alt="" className="thumbnail" />
                      <span className="number">23</span>
                      <span className="name">Hong Gildong</span>
                    </div>
                    <div className="player-profile">
                      <img src={require("../assets/img/team-player7.jpg")} alt="" className="thumbnail" />
                      <span className="number">21</span>
                      <span className="name">Ican Ivanovich</span>
                    </div>
                    <div className="player-profile">
                      <img src={require("../assets/img/team-player7.jpg")} alt="" className="thumbnail" />
                      <span className="number">22</span>
                      <span className="name">Mathieu Debuchy</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/*  <div className="tab-pane fade" id="juveline-team">


            <div className="player-profile">


              <div className="profile-slider">


                <div className="profile-single">
                  <div className="big-thumbnail">
                    <img src="img/team-player5.jpg" alt="" />
                  </div>
                  <div className="player-description">
                    <img src="img/player-profile-logo.png" alt="" className="logo-background" />
                    <h3>John Doe</h3>
                    <ul className="player-details pull-left custom-list">
                      <li><h5>Position:</h5><span>Forward</span></li>
                      <li><h5>Height:</h5><span>5’8” (1.75M)</span></li>
                      <li><h5>Weight:</h5><span>141 lbs (64 kg)</span></li>
                    </ul>
                    <ul className="player-details pull-right custom-list">
                      <li><h5>Age:</h5><span>22</span></li>
                      <li><h5>DOB:</h5><span>February 5, 1992</span></li>
                      <li><h5>POB:</h5><span>Argentina</span></li>
                    </ul>
                    <a href="#" className="button read_more"><span>Read More</span><i className="fa fa-arrow-circle-right"></i></a>
                  </div>
                </div>

                <div className="profile-single">
                  <div className="big-thumbnail">
                    <img src="img/team-player4.jpg" alt="" />
                  </div>
                  <div className="player-description">
                    <img src="img/player-profile-logo.png" alt="" className="logo-background" />
                    <h3>John Doe</h3>
                    <ul className="player-details pull-left custom-list">
                      <li><h5>Position:</h5><span>Defender</span></li>
                      <li><h5>Height:</h5><span>5’6” (1.65M)</span></li>
                      <li><h5>Weight:</h5><span>121 lbs (44 kg)</span></li>
                    </ul>
                    <ul className="player-details pull-right custom-list">
                      <li><h5>Age:</h5><span>32</span></li>
                      <li><h5>DOB:</h5><span>January 5, 1992</span></li>
                      <li><h5>POB:</h5><span>Germany</span></li>
                    </ul>
                    <a href="#" className="button read_more"><span>Read More</span><i className="fa fa-arrow-circle-right"></i></a>
                  </div>
                </div>

              </div>

            </div>

          </div>

          <div className="tab-pane fade" id="veteran-team">

            <div className="player-profile">

              <div className="profile-slider">

                <div className="profile-single">
                  <div className="big-thumbnail">
                    <img src="img/team-player2.jpg" alt="" />
                  </div>
                  <div className="player-description">
                    <img src="img/player-profile-logo.png" alt="" className="logo-background" />
                    <h3>John Doe</h3>
                    <ul className="player-details pull-left custom-list">
                      <li><h5>Position:</h5><span>Forward</span></li>
                      <li><h5>Height:</h5><span>5’8” (1.75M)</span></li>
                      <li><h5>Weight:</h5><span>141 lbs (64 kg)</span></li>
                    </ul>
                    <ul className="player-details pull-right custom-list">
                      <li><h5>Age:</h5><span>22</span></li>
                      <li><h5>DOB:</h5><span>February 5, 1992</span></li>
                      <li><h5>POB:</h5><span>Argentina</span></li>
                    </ul>
                    <a href="#" className="button read_more"><span>Read More</span><i className="fa fa-arrow-circle-right"></i></a>
                  </div>
                </div>

                <div className="profile-single">
                  <div className="big-thumbnail">
                    <img src="img/team-player3.jpg" alt="" />
                  </div>
                  <div className="player-description">
                    <img src="img/player-profile-logo.png" alt="" className="logo-background" />
                    <h3>John Doe</h3>
                    <ul className="player-details pull-left custom-list">
                      <li><h5>Position:</h5><span>Defender</span></li>
                      <li><h5>Height:</h5><span>5’6” (1.65M)</span></li>
                      <li><h5>Weight:</h5><span>121 lbs (44 kg)</span></li>
                    </ul>
                    <ul className="player-details pull-right custom-list">
                      <li><h5>Age:</h5><span>32</span></li>
                      <li><h5>DOB:</h5><span>January 5, 1992</span></li>
                      <li><h5>POB:</h5><span>Germany</span></li>
                    </ul>
                    <a href="#" className="button read_more"><span>Read More</span><i className="fa fa-arrow-circle-right"></i></a>
                  </div>
                </div>

              </div>

            </div>

          </div>
 */}
          </div>

        </div>
        {/* <Tabs>
        <TabList>
          <Tab>
            <p>Title 1</p>
          </Tab>
          <Tab>
            <p>Title 2</p>
          </Tab>
          <Tab>
            <p>Title 3</p>
          </Tab>
          <Tab>
            <p>Title 4</p>
          </Tab>
          <Tab>
            <p>Title 5</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
            <h2>Any content 1</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 2</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 3</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 4</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 5</h2>
          </div>
        </TabPanel>
      </Tabs> */}

      </div>
      <Footer />
    </div>
  )
}
