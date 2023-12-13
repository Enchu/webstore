import React, {FC, useEffect, useState} from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const MapDelivery:FC = () => {
    const mapState = {
        center: [55.778013, 37.695206],
        zoom: 17,
    };

    return (
        <>
            <YMaps query={{ apikey: process.env.YANDEX_MAP_API }}>
                <Map
                    state={mapState}
                    width="100%"
                    height="400px"
                >
                    <Placemark
                        geometry={[[55.778013, 37.695206]]}
                        properties={{
                            hintContent: 'Большая почтовая дом 51/53',
                            balloonContent: 'Большая почтовая дом 51/53',
                        }}
                        options={{
                            iconColor: '#ff0000',
                        }}
                    />
                </Map>
            </YMaps>
        </>
    );
};

export default MapDelivery;