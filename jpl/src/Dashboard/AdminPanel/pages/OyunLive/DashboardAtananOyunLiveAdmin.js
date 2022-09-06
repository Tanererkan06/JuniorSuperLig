import { useState } from 'react'
import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import '../../../App.css';
import '../../../Form.css';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    }
  };

export default function DashboardAtananOyunLive() {
    const [show, setShow] = useState(false);

    const notify = () => toast.success('Kaçak oyuncu kontrolü başarılı, artık oyunu başlatabilirsiniz!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });

    const notify2 = () => toast.warning('Kaçak oyuncu kontrolü başarısız, lütfen tüm oyuncuları onayladığınızdan emin olun!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });

    // Modal tanımlamaları
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal(event) {
      setIsOpen(true);
      event.preventDefault();
    }
  
    function afterOpenModal() {
      subtitle.style.color = 'black';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const [counter, setCounter] = useState(0);

    const checkCounter = (event) => {
        console.log("GELEN EVENT: ", event.target.checked );
        if(event.target.checked == true) {
            setCounter(counter + 1);
        }
    }

    const kacakOyuncuKontrolu = () => {
        console.log("KACAK OYUNCU KONTROLU COUNTER: ", counter);
        if(counter == 22) {
            setShow(true);
            closeModal();
            notify();
        } else {
            notify2();
        }
    }

    return (
        <div className='dashboard-container'>
            <SideBar menu={sidebar_menu} />

            <div className='dashboard-body'>
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)} style={{marginBottom: '10px'}}>Kaçak Oyuncu Kontrol Ekranı</h2>
                    <div>
                    <span style={{ fontSize: '20px', fontWeight: 'bold'}}>A Takımı</span>
                    <div style={{ columnCount: '6', marginTop: '10px'}}>
                        <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                            <div style={{ marginLeft: '-5px'}}>
                                <span style={{fontSize: '16px', marginTop: '3px'}}><b>Oyuncu Adı</b></span>
                                <div style={{ display: 'flex', flexDirection: 'row'}}>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                                </div>
                            </div>
                        </div>
                        <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                            <div style={{ marginLeft: '-5px'}}>
                                <span style={{fontSize: '16px', marginTop: '3px'}}><b>Oyuncu Adı</b></span>
                                <div style={{ display: 'flex', flexDirection: 'row'}}>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                                </div>
                            </div>
                        </div>
                        <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                            <div style={{ marginLeft: '-5px'}}>
                                <span style={{fontSize: '16px', marginTop: '3px'}}><b>Oyuncu Adı</b></span>
                                <div style={{ display: 'flex', flexDirection: 'row'}}>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                                </div>
                            </div>
                        </div>
                        <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                            <div style={{ marginLeft: '-5px'}}>
                                <span style={{fontSize: '16px', marginTop: '3px'}}><b>Oyuncu Adı</b></span>
                                <div style={{ display: 'flex', flexDirection: 'row'}}>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                                </div>
                            </div>
                        </div>
                        <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                            <div style={{ marginLeft: '-5px'}}>
                                <span style={{fontSize: '16px', marginTop: '3px'}}><b>Oyuncu Adı</b></span>
                                <div style={{ display: 'flex', flexDirection: 'row'}}>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                                </div>
                            </div>
                        </div>
                        <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                            <div style={{ marginLeft: '-5px'}}>
                                <span style={{fontSize: '16px', marginTop: '3px'}}><b>Oyuncu Adı</b></span>
                                <div style={{ display: 'flex', flexDirection: 'row'}}>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                                </div>
                            </div>
                        </div>
                        <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                            <div style={{ marginLeft: '-5px'}}>
                                <span style={{fontSize: '16px', marginTop: '3px'}}><b>Oyuncu Adı</b></span>
                                <div style={{ display: 'flex', flexDirection: 'row'}}>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                                </div>
                            </div>
                        </div>
                        <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                            <div style={{ marginLeft: '-5px'}}>
                                <span style={{fontSize: '16px', marginTop: '3px'}}><b>Oyuncu Adı</b></span>
                                <div style={{ display: 'flex', flexDirection: 'row'}}>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                                </div>
                            </div>
                        </div>
                        <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                            <div style={{ marginLeft: '-5px'}}>
                                <span style={{fontSize: '16px', marginTop: '3px'}}><b>Oyuncu Adı</b></span>
                                <div style={{ display: 'flex', flexDirection: 'row'}}>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                                </div>
                            </div>
                        </div>
                        <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                            <div style={{ marginLeft: '-5px'}}>
                                <span style={{fontSize: '16px', marginTop: '3px'}}><b>Oyuncu Adı</b></span>
                                <div style={{ display: 'flex', flexDirection: 'row'}}>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                                </div>
                            </div>
                        </div>
                        <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                            <div style={{ marginLeft: '-5px'}}>
                                <span style={{fontSize: '16px', marginTop: '3px'}}><b>Oyuncu Adı</b></span>
                                <div style={{ display: 'flex', flexDirection: 'row'}}>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div style={{ marginTop: '40px'}}>
                    <span style={{ fontSize: '20px', fontWeight: 'bold'}}>B Takımı</span>
                    <div style={{ columnCount: '6', marginTop: '10px'}}>
                        <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                            <div style={{ marginLeft: '-5px'}}>
                                <span style={{fontSize: '16px', marginTop: '3px'}}><b>Oyuncu Adı</b></span>
                                <div style={{ display: 'flex', flexDirection: 'row'}}>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                                </div>
                            </div>
                        </div>
                        <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                            <div style={{ marginLeft: '-5px'}}>
                                <span style={{fontSize: '16px', marginTop: '3px'}}><b>Oyuncu Adı</b></span>
                                <div style={{ display: 'flex', flexDirection: 'row'}}>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                                </div>
                            </div>
                        </div>
                        <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                            <div style={{ marginLeft: '-5px'}}>
                                <span style={{fontSize: '16px', marginTop: '3px'}}><b>Oyuncu Adı</b></span>
                                <div style={{ display: 'flex', flexDirection: 'row'}}>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                                </div>
                            </div>
                        </div>
                        <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                            <div style={{ marginLeft: '-5px'}}>
                                <span style={{fontSize: '16px', marginTop: '3px'}}><b>Oyuncu Adı</b></span>
                                <div style={{ display: 'flex', flexDirection: 'row'}}>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                                </div>
                            </div>
                        </div>
                        <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                            <div style={{ marginLeft: '-5px'}}>
                                <span style={{fontSize: '16px', marginTop: '3px'}}><b>Oyuncu Adı</b></span>
                                <div style={{ display: 'flex', flexDirection: 'row'}}>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                                </div>
                            </div>
                        </div>
                        <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                            <div style={{ marginLeft: '-5px'}}>
                                <span style={{fontSize: '16px', marginTop: '3px'}}><b>Oyuncu Adı</b></span>
                                <div style={{ display: 'flex', flexDirection: 'row'}}>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                                </div>
                            </div>
                        </div>
                        <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                            <div style={{ marginLeft: '-5px'}}>
                                <span style={{fontSize: '16px', marginTop: '3px'}}><b>Oyuncu Adı</b></span>
                                <div style={{ display: 'flex', flexDirection: 'row'}}>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                                </div>
                            </div>
                        </div>
                        <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                            <div style={{ marginLeft: '-5px'}}>
                                <span style={{fontSize: '16px', marginTop: '3px'}}><b>Oyuncu Adı</b></span>
                                <div style={{ display: 'flex', flexDirection: 'row'}}>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                                </div>
                            </div>
                        </div>
                        <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                            <div style={{ marginLeft: '-5px'}}>
                                <span style={{fontSize: '16px', marginTop: '3px'}}><b>Oyuncu Adı</b></span>
                                <div style={{ display: 'flex', flexDirection: 'row'}}>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                                </div>
                            </div>
                        </div>
                        <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                            <div style={{ marginLeft: '-5px'}}>
                                <span style={{fontSize: '16px', marginTop: '3px'}}><b>Oyuncu Adı</b></span>
                                <div style={{ display: 'flex', flexDirection: 'row'}}>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                                </div>
                            </div>
                        </div>
                        <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                            <div style={{ marginLeft: '-5px'}}>
                                <span style={{fontSize: '16px', marginTop: '3px'}}><b>Oyuncu Adı</b></span>
                                <div style={{ display: 'flex', flexDirection: 'row'}}>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                        <div style={{ marginLeft: '-5px'}}>
                            <span style={{fontSize: '16px', marginTop: '3px'}}><b>Oyuncu Adı</b></span>
                            <div style={{ display: 'flex', flexDirection: 'row'}}>
                                <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                            </div>
                        </div>
                    </div> */}
                    {/* <div style={{ display: 'flex', flexDirection: 'row', gap: '50px', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{ textAlign: 'center' }}>
                            <span style={{ fontSize: '18px', fontWeight: 'bold'}}>A Takımı</span>   
                            <div>
                                <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', width: '200px', alignItems: 'center', justifyContent: 'center', fontSize: '12px'}}>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>1. Oyuncu Adı</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px'}} onChange={(event) => { checkCounter(event); }}/>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>2. Oyuncu Adı</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px'}} onChange={(event) => { checkCounter(event); }}/>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>3. Oyuncu Adı</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px'}} onChange={(event) => { checkCounter(event); }}/>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>4. Oyuncu Adı</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px'}} onChange={(event) => { checkCounter(event); }}/>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>5. Oyuncu Adı</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px'}} onChange={(event) => { checkCounter(event); }}/>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>6. Oyuncu Adı</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px'}} onChange={(event) => { checkCounter(event); }}/>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>7. Oyuncu Adı</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px'}} onChange={(event) => { checkCounter(event); }}/>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>8. Oyuncu Adı</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px'}} onChange={(event) => { checkCounter(event); }}/>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>9. Oyuncu Adı</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px'}} onChange={(event) => { checkCounter(event); }}/>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>10. Oyuncu Adı</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px'}} onChange={(event) => { checkCounter(event); }}/>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>11. Oyuncu Adı</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px'}} onChange={(event) => { checkCounter(event); }}/>
                                </div>
                                
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <span style={{ fontSize: '18px', fontWeight: 'bold'}}>B Takımı</span>   
                            <div>
                                <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', width: '200px', alignItems: 'center', justifyContent: 'center', fontSize: '12px'}}>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>1. Oyuncu Adı</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px'}} onChange={(event) => { checkCounter(event); }}/>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>2. Oyuncu Adı</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px'}} onChange={(event) => { checkCounter(event); }}/>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>3. Oyuncu Adı</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px'}} onChange={(event) => { checkCounter(event); }}/>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>4. Oyuncu Adı</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px'}} onChange={(event) => { checkCounter(event); }}/>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>5. Oyuncu Adı</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px'}} onChange={(event) => { checkCounter(event); }}/>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>6. Oyuncu Adı</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px'}} onChange={(event) => { checkCounter(event); }}/>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>7. Oyuncu Adı</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px'}} onChange={(event) => { checkCounter(event); }}/>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>8. Oyuncu Adı</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px'}} onChange={(event) => { checkCounter(event); }}/>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>9. Oyuncu Adı</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px'}} onChange={(event) => { checkCounter(event); }}/>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>10. Oyuncu Adı</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px'}} onChange={(event) => { checkCounter(event); }}/>
                                    <label htmlFor="check" style={{ fontWeight: 'normal'}}>11. Oyuncu Adı</label>
                                    <input type="checkbox" name="check" value="true" style={{marginBottom: '7px'}} onChange={(event) => { checkCounter(event); }}/>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <button className="buttoncss-atanan" style={{ marginBottom: '10px', marginTop: '30px'}} onClick={() => kacakOyuncuKontrolu()}>Kontrol Et</button>
                </Modal>
                </div>

                <form className='formcss-atanan'>
                    <header className='header-atanan'>
                        <label className="labelcss-atanan" style={{ textAlign: "center" }} htmlFor='id'>28.08.2022 - 19:45</label>
                    </header>
                    <body>
                        <div className="col-xs-12" style={{textAlign: "center" }}>
                            <div className="col-xs-2">
                                <label className="labelcss-atanan" style={{ textAlign: "center" }} htmlFor="kimlikNo">Logo</label>
                            </div>
                            <div className="col-xs-2">
                                <label className="labelcss-atanan" style={{ textAlign: "center" }} htmlFor="kimlikNo">Takım A</label>
                            </div>
                            <div className="col-xs-4">
                                <label className="labelcss-atanan" style={{ textAlign: "center" }} htmlFor="kimlikNo">0:0</label>
                            </div>
                            <div className="col-xs-2">
                                <label className="labelcss-atanan" style={{ textAlign: "center" }} htmlFor="kimlikNo">Takım B</label>
                            </div>
                            <div className="col-xs-2">
                                <label className="labelcss-atanan" style={{ textAlign: "center" }} htmlFor="kimlikNo">Logo</label>
                            </div>
                        </div>

                    </body>
                    <footer>
                        <div className="buttondiv">
                            { show ? <button className="buttoncss-atanan">Başlat</button> : ''}
                            { !show ? <button className="buttoncss-kontrol" onClick={(event) => openModal(event)}>Oyuncu Kontrol Ekranını Aç</button> : ''}
                        </div>
                    </footer>
                    <ToastContainer />
                </form>
                {/* <form className='formcss-atanan'>
                    <header className='header-atanan'>
                        <label className="labelcss-atanan" style={{ textAlign: "center" }} htmlFor='id'>29.08.2022 - 19:45</label>
                    </header>
                    <body>
                        <div className="col-xs-12" style={{textAlign: "center" }}>
                            <div className="col-xs-2">
                                <label className="labelcss-atanan" style={{ textAlign: "center" }} htmlFor="kimlikNo">Logo</label>
                            </div>
                            <div className="col-xs-2">
                                <label className="labelcss-atanan" style={{ textAlign: "center" }} htmlFor="kimlikNo">Takım A</label>
                            </div>
                            <div className="col-xs-4">
                                <label className="labelcss-atanan" style={{ textAlign: "center" }} htmlFor="kimlikNo">0:0</label>
                            </div>
                            <div className="col-xs-2">
                                <label className="labelcss-atanan" style={{ textAlign: "center" }} htmlFor="kimlikNo">Takım B</label>
                            </div>
                            <div className="col-xs-2">
                                <label className="labelcss-atanan" style={{ textAlign: "center" }} htmlFor="kimlikNo">Logo</label>
                            </div>
                        </div>

                    </body>
                    <footer>
                        <div className="buttondiv">
                            <button className="buttoncss-atanan" >Başlat</button>
                        </div>
                    </footer>
                </form> */}
            </div></div>
    )
}
