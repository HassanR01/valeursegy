'use client'
import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import MarkerIcon from '../../../public/marker-icon.png'
import MarkerShadow from '../../../node_modules/leaflet/dist/images/marker-shadow.png'
import "leaflet/dist/leaflet.css";

export default function BranchesMap() {

    const branches = [
        {
            name: "Egypt",
            location: [30.05559643330666, 31.24232073654143]
        },
        {
            name: 'UAE',
            location: [25.08685272429585, 55.194463077955945]
        },
        {
            name: "France",
            location: [48.86701719193213, 2.307817967512028]
        }, {
            name: "USA",
            location: [40.726364, -79.859584]
        }, {
            name: "Brazil",
            location: [-19.550520, -46.633308]
        }, {
            name: "India",
            location: [21.613939, 77.209023]
        }, {
            name: 'kSA',
            location: [23.885942, 45.079163]
        }, {
            name: 'Greece',
            location: [39.074208, 21.824312]
        }, {
            name: 'NiGeria',
            location: [9.0820, 8.6753]
        }, {
            name: "South Africa",
            location: [-30.5595, 22.9375]
        }, {
            name: "TanZania",
            location: [-6.3690, 34.8888]
        }
    ]

    let avgX = 0
    branches.map(brn => {
        avgX = avgX + brn.location[0]
    })

    let avgY = 0
    branches.map(brn => {
        avgY = avgY + brn.location[1]
    })

    return (
        <MapContainer center={[avgX / branches.length, avgY / branches.length]} scrollWheelZoom={false} zoomControl={false} zoom={1}>
            <TileLayer
                attribution='&copy; <a href="https://https://rockaidev.vercel.app">Rockai Dev</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {branches.map((brn, ind) => (
                <Marker position={brn.location} icon={
                    new L.Icon({
                        iconUrl: MarkerIcon.src,
                        iconRetinaUrl: MarkerIcon.src,
                        iconSize: [25, 41],
                        iconAnchor: [12.5, 41],
                        popupAnchor: [0, -41],
                        shadowUrl: MarkerShadow.src,
                        shadowSize: [41, 41],
                    })
                }
                    key={ind}>
                </Marker>
            ))}
        </MapContainer>
    )
}
