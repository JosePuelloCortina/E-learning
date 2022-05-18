import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./chatComponents/Options/Option";
import Quiz from "./chatComponents/Quizzes/Quizz";
import React from "react";

const config = {
    botName: "AkademIT, tu asistente",
    
  initialMessages: [createChatBotMessage(`Hola Akademista, yo soy tu asistente ¿en qué puedo ayudarte?`, {
      widget: "opciones",
  })],
  
  widgets:[
      {
          widgetName:"opciones",
          widgetFunc: (props) => <Options {...props} />,
      },
      {
        widgetName:"Registrarme",
        widgetFunc: (props) => <Quiz {...props} />,
        props: {
            questions:[
            { question : "¿No sabés cómo registrarte?",
              answer: "Debes apretar el botón Ingresar, luego click en Registrarme y allí podes manualmente crearte un usuario y contraseña.",
              id: 1,
            },
            {
              question : "¿Querés registrarte con Google?",
              answer: "Debes apretar el botón Ingresar, luego el botón Registrarme, y finalmente Registrarme con Google. ",
              id: 2,  
          },
            {
                question : "¿Ya te registrarte y no podes ingresar?",
                answer: "Debes apretar el botón Ingresar, y luego clickear el boton Ingresar con Google. ",
                id: 3,  
            },
            
              
          ]
        }
      },{
        widgetName:"Comprar",
        widgetFunc: (props) => <Quiz {...props} />,
        props: {
                  questions:[
                  { question : "¿Tengo que saber de programación para comprar?",
                    answer: "No es necesario, AkademIT ofrece curso para todos los niveles de expertise",
                    id: 4,
                  },
                  {
                      question : "¿Querés comprar y no podés?",
                      answer: "Para poder hacerlo debes contar con una cuenta en AkademIT o estar registrado.",
                      id: 5,  
                  },
                  {
                    question : "¿Puedo comprar con descuento?",
                    answer: "Sí, tenes que estar atento a las ofertas que lanzamos y comprar en ese instante",
                    id: 6,  
                }
        ]
      }},
      {
        widgetName:"Pagar",
        widgetFunc: (props) => <Quiz {...props} />,
        props: {
                  questions:[
                  { question : "¿No sabés cómo podés pagar tus compras?",
                    answer:  "Es fácil y rápido, podes hacerlo mediante Mercado Pago. ",
                    id: 7,
                  },
                  {
                      question : "¿Con qué medios puedo abonar?",
                      answer:"Podés utilizar tarjetas de crédito o débito. ",
                      id: 8,  
                  },
                  {
                    question : "¿Puedo pagar por transferencia bancaria, Rapipago o efectivo?",
                    answer: "No, solo aceptamos tarjetas de crédito o débito Visa, Mastercard o Amex. ",
                    id: 9,  
                },
                  {
                    question : "¿Tuviste un problema con el pago?",
                    answer: "Escribinos a akademit.adm@gmail.com",
                    id: 10,  
                }
        ]
      }},
]

}

export default config