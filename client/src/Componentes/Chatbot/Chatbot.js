import React, { Component } from 'react';
import ChatBot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import styles from "./Chatbot.module.css"
import ActionProvider from './actionProvider';
import config from './config';
import MessageParser from './messageParser';


export default function Contenido({chatbot, setChatbot}){
    
            return (
            <div className={styles.chatbotContainer} >
         
            <button onClick={() =>setChatbot(!chatbot)} className={styles.button}>X</button>
            <ChatBot setChatbot={setChatbot} chatbot={chatbot} 
            config={config} 
            actionProvider={ActionProvider}
            messageParser ={MessageParser} 
            
            />
            </div>
           
            
                
            
        )
    }
