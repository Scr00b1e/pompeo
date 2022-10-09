import React from 'react'
import './sidebar.scss'
import aos from 'aos'
import 'aos/dist/aos.css'
import SidebarItem from '../sidebarItem/SidebarItem'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Empty from '../empty/Empty'

type PropsType = {
    setOpen: any
    setOpenModal: any
    onClickRemove: any
    sidebarRef: any
}

const Sidebar: React.FC<PropsType> = ({setOpen, onClickRemove, sidebarRef}) => {
    //Redux
    const item = useSelector((state: RootState) => state.cartSlice.subjects)
    const { totalPrice } = useSelector((state: RootState) => state.cartSlice)
    const totalCount = item.reduce((sum: number, item: any) => sum + item.count, 0)

    const onClickClose = () => {
        setOpen(false)
    }

    React.useEffect(() => {
        aos.init({duration: 1500})
    })

    return (
        <div className='sidebar'>
            <div className="sidebar__"></div>
            <div data-aos='fade-left' className="sidebar__inner" ref={sidebarRef}>
               <div className="sidebar__header">
                <div className="sidebar__title">
                    Sidebar
                </div>
                <div className="sidebar__close" onClick={onClickClose}>
                    <img src="./img/close.svg" alt="" />
                </div>
               </div>
               <div className="sidebar__content">
                {
                    totalCount !== 0 ? item.map((obj) => (
                        <SidebarItem 
                        onClickRemove={onClickRemove} 
                        {...obj} 
                        key={obj.id}/>
                    ))
                    : <Empty/>
                }
               </div>
               {
                totalCount !== 0 ? <div className="sidebar__footer">
                <div className="sidebar__footer-count">
                    Count: {totalCount} pt
                </div>
                <div className="sidebar__footer-price">
                    Totally: {totalPrice} $
                </div>
               </div>
                : null
               }
            </div>
        </div>
      )
}

export default Sidebar