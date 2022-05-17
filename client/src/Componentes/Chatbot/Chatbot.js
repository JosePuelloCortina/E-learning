import React, { Component } from 'react';
import ChatBot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import styles from './Chatbot.module.css'
import ActionProvider from './actionProvider';
import config from './config';
import MessageParser from './messageParser';


export default class Contenido extends Component {
    render() {
        return (
            <div className={styles.app}>
            <div styles = {{maxWidth: "500px"}}>
            <ChatBot
            config={config} 
            actionProvider={ActionProvider}
            messageParser ={MessageParser} 
            />
            </div>
            </div>
            
                
            
        )
    }
}