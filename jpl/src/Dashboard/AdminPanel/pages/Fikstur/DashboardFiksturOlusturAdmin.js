import React from 'react'
import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import '../../../App.css';
import '../../../Form.css'
export default function DashboardFiksturOlustur() {
  return (
    <div className='dashboard-container'>
      <SideBar menu={sidebar_menu} />

      <div className='dashboard-body'>
        <form className='formcss-canli'>
          <div className='div2'>
          <label className="labelcss-atanan-canli" htmlFor='id'>Bölge Seç</label>
            <input className="inputcss" placeholder="Arama" name="arama" />
            <label className="labelcss-atanan-canli" htmlFor='id'>Lig Seç</label>
            <input className="inputcss" placeholder="Arama" name="arama" />
            <label className="labelcss-atanan-canli" htmlFor='id'>Lig Başlangıç Tarihi</label>
            <input className="inputcss" placeholder="Başlangıç Tarihi" name="tarih" />
            <label className="labelcss-atanan-canli" htmlFor='id'>Lig Bitiş Tarihi</label>
            <input className="inputcss" placeholder="Bitiş Tarihi" name="tarih" />
            <div className="buttondiv">
              <button className="buttoncss-fikstur-baslat" >Fikstur Oluştur</button>
            </div></div></form>
      </div>
    </div>
  )
}
