import React from 'react'
import Room from './Room'
import { RoomConsumer } from '../context'

export default function RoomList({rooms}) {
    if(rooms.length===0)
    {
        return(
            <div className="empty-search">
            <h6>Unfortanly no rooms match your search</h6>
            </div>
        )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map(item=>{
                        return <Room key={item.id} room={item}/>;
                    })
                }
            </div>
        </section>
    )
}
