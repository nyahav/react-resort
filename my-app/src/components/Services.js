import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaShuttleVan,FaBeer,FaHiking} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
        {
         icons:<FaCocktail/>,
         title:'Free Cocktiles',
         info:'You are welcome to enjoy our complementary drink in out stylish bar'
        },
        {
            icons:<FaHiking/>,
            title:'Endless Hiking Trails',
            info:'You are welcome to enjoy the surrouding nature,take a walk outside for some fresh air and relax!'
           },
           {
            icons:<FaShuttleVan/>,
            title:'Transport available',
            info:'We provide our guets assistent with getting around,our professonial drivers would take you where you please'
           },
           {
            icons:<FaBeer/>,
            title:'HomeMade Beer',
            info:'We take pround in out brewery that makes over 50 diffent kind of beer and ale'
           }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services"/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                    return <article key={index} className="service">
                        <span>{item.icons}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                    })
                }</div>    
            </section>
        )
    }
}
