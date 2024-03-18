// import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
// import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext'

export default function Footer() {
    const context = useContext(myContext)
    const { toggleMode, mode } = context
    return (
        <footer className="text-gray-600 body-font bg-gray-100" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
            <div className='bg-gray-300 p-3  w-full text-center ' style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}> <b>&copy;</b> Website Ashop Created By:- Shivanshu Kr Gupta </div>
        </footer>
    )
}