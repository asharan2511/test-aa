import React, { useState } from 'react'

const SidebarItem = ({item}) => {
    const [open,setOpen] = useState(false)
    console.log(open)


if(item.childrens){
      return (
    <div className={open ? "sidebar-item open":"sidebar-item"}>
        <div className='sidebar-title'>
            <span>
            <i className={item.icon}></i>
                {item.title}
            </span>
        <i className='bi-chevron-down tgl-btn' onClick={()=>setOpen(!open)}></i>
        </div>
    <div className='sidebar-content'>
        {
            item.childrens.map((child,index) => <SidebarItem key={index} item = {child} />)
        }
    </div>
    </div>
  )
}else{
    return(
        <div className="sidebar-item" >
            <div className='sidebar-title'>
                <span>
                <i className={item.icon}></i>
                    {item.title}
                </span>
            </div>
        </div>
    )
}
}

export default SidebarItem