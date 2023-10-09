import React, { useEffect, useState } from 'react';
import styles from './player.module.css'
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import videos from 'json/db.json';
import NaoEncontrada from 'pages/NaoEncontrada';
// import { Container } from './styles';

function Player() {

    const [video, setVideo] = useState([])

    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Abner-Ferreira/cinetag-api/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados)
        })
    }, [])

    console.log(video)

    if(!video){
        return <NaoEncontrada/>
    }

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
                <section className={styles.container}>

                    <iframe
                        width="100%"
                        height="100%"
                        src={video.link}
                        title={video.titulo}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    >

                    </iframe>
                </section>
            </Titulo>
        </>
    );
}

export default Player;
