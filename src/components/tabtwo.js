import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import projimg1 from '../assets/projeto1.png'; // Import the project image
import projimg2 from '../assets/piz.png'; // Import the project image
import projimg3 from '../assets/port.png'; // Import the project image



import colorSharp2 from "../assets/azul.jpg";

export const tabtwo = () => {
    const tabtwo = [
        {
            title: "Life Is Strange",
            description: "Landing page, projeto da faculdade",
            imgUrl: projimg1,
            link: "https://fernandavv.github.io/ls/"
        },
        {
            title: "Pizza",
            description: "Projeto em php",
            imgUrl: projimg2,
            link: "https://pi-za.vercel.app/"
        },
        {
            title: "Portfolio",
            description: "Projeto em React",
            imgUrl: projimg3,
            link: "https://fe-black.vercel.app/"

        },
        {
            title: "Oruam Na Voz",
            description: "Oruam Cria",
            imgUrl: projimg1,
        },
        {
            title: "Oruam Na Voz",
            description: "Oruam Cria",
            imgUrl: projimg1,
        },
    ];
}