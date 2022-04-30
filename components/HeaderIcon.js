function HeaderIcon({ Icon, active }) {
    return ( 
      <div className="group flex items-center cursor-pointer sm:h-14 md:px-10 md:hover:bg-gray-100 rounded-xl md:active:border-b-2 md:active:border-blue-500">
        <Icon className={`h-5 md:h-7 text-center mx-auto text-gray-500 group-hover:text-blue-500 ${active && 'text-blue-500'} `} />
      </div>
    )
  }
  
  export default HeaderIcon