import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home';
import { RootState } from './redux/store'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Shop from './pages/shop/Shop';
import Modal from './components/modal/Modal';

type modalType = {
  title: string
  id: number
}

function App() {
  const [open, setOpen] = React.useState(false)
  const [openModal, setOpenModal] = React.useState(false)
  const sidebarRef = React.useRef()
  //redux
  const item = useSelector((state: RootState) => state.cartSlice.subjects)

  const modalTitle = (
    item.map((obj: modalType) => (
      <Modal setOpenModal={setOpenModal} title={obj.title} id={obj.id} key={obj.id}/>
    ))
  )

  const onClickRemove = () => {
    setOpenModal(!openModal)
  }

  //React.useEffect(() => {

  //const handler = (event: MouseEvent) => {
    //if(sidebarRef.current && !event.composedPath().includes(sidebarRef.current)) {
      //setOpen(false)
    //}
  //}

    //document.addEventListener('click', handler)

    //return () => {
      //document.removeEventListener('click', handler)
    //}
  //},[])

  const onClickCart = () => {
    setOpen(!open)
  }

  return (
      <div className="App">
        <>
          <Header onClickCart={onClickCart}/>
          {open && <Sidebar 
          sidebarRef={sidebarRef}
          setOpen={setOpen}
          setOpenModal={setOpenModal}
          onClickRemove={onClickRemove}/>}
          {
            open ? <style>{'body {overflow: hidden}'}</style> : null
          }
          {openModal && modalTitle}
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
          </Routes>
          <Footer/>
        </>
      </div>
  );
}

export default App;
