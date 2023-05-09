import React, { useEffect, useState } from 'react'
import { Layout } from '../Layouts/Layout'
import {  UserNavbar } from '../components/UserNavbar'
import '../styles/dashboard.styles.css'
// import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { DashboardLayout } from '../Layouts/DashboardLayout'
import { Arrow } from '../components/Arrow'
// import { FaChevronDown } from 'react-icons/fa'
import {  useNavigate } from 'react-router-dom'
// import { MoreRoutes } from '../components/MoreRoutes'

interface RouteData {
  _id: String;
  pickUpStation: String;
  destination: String;
  price: Number;
  createdAt: String
}
export const DashboardPage = () => {
  const [more, setMore] = useState<boolean>(false)
  const [routes, setRoutes] = useState<RouteData[]>([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValueId, setSelectedValueId] = useState("");
  const [ pickUp, setPickUp ] = useState("Bariga");
  const [ destination, setDestination ] = useState("Gbagada");

  const navigate = useNavigate();

  useEffect(() => {
    const getRoutes = async () => {
      const response = await fetch(`https://emove-teamc-new.onrender.com/v1/routes/getAllRoutes`, {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*"
        }        
      })
      const responseJSON = await response.json();
      const data = responseJSON.routes
      setRoutes(data)
      console.log(responseJSON.routes)
      // window.location.reload();
    }
    getRoutes()
  }, [])

  const handleClick = () => {
    // alert(selectedValue)
    if(!selectedValue) {
      alert("Please choose a route");
      return;
    }
    navigate('/user/trip_details', { state: selectedValue });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleMore = () => {
    setMore(!more)
  }

  const handleChange = (e:any) => {
    setSelectedValue(e.target.value);
    setSelectedValueId(e.target);
    
    if(routes){
      const activeRoute = routes.filter(route=> route._id === e.target.value) as RouteData[];
      console.log("pickUpStation: ", `${activeRoute[0].pickUpStation}`)
      console.log("destination: ", `${activeRoute[0].destination}`)
      setPickUp(()=>`${activeRoute[0].pickUpStation}`);
      setDestination(()=>`${activeRoute[0].destination}`);
      
    }
  }

  return (
    <>
      <DashboardLayout
        navbar={<UserNavbar />}
        navbarHeight='15%'
        bodyContainerHeight='85%'
        mainContentHeight='85%'
        headerHeight='15%'
        customLeftContentClasses='dashboard-layout-header'
        customRightContentClasses='dashboard-layout-content'
        additionalClasses='dashboard-layout-containers'
        mainContent={
          <Layout
            leftContentWidth='65%'
            rightContentWidth='35%'
            additionalClasses='dashboard-journey-layout'
            leftContent={
              <div className='dashboard-card'>
                <div className='dashboard-journey-card'>
                  <p className='dashboard-route-name'>{pickUp}</p>
                  <span className='dashboard-route-arrow'>
                    {' '}
                    <Arrow />
                  </span>
                  <p className='dashboard-route-name'>{destination}</p>
                </div>
                 {/* <div className="dashboard-route-options">
                    <p onClick={handleMore}>See more options <FaChevronDown /></p> 
                  </div>  */}
                <div className='dashboard-route-moreoptions'>
                   {/* {more && <MoreRoutes />} 
                   <MoreRoutes />  */}
                  <select className='more-routes-list'
                    value={selectedValueId}
                    
                    onChange={handleChange}
                    
                  >
                    <option  className='more-routes-list-items' >See more options</option> 

                    
                      {routes &&
                        routes.map((route: any, index:number) => (
                          <option className='more-routes-list-items' value={route._id} key={route._id} >
                              {route.pickUpStation} - {route.destination}                     
                          </option>
                        ))}
                  
                  </select>
                </div>
                <div className='dashboard-button'>
                  {<Button text={'Continue'} additionalClasses={'successButton dashboardButton'} handleClick={handleClick} />}
                </div>
              </div>
            }
            customRightContentClasses='dashboard-right-content'
            rightContent={<div className='dashboard-image-container'></div>}
          />
        }
        header={<div className='dashboard-header'>Choose route</div>}
      />
    </>
  )
}
