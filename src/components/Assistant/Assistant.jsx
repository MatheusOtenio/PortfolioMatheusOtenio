import { useState } from "react";
import styles from "./Assistant.module.css";
import { getImageUrl } from "../../utils";
import info from "../../data/info.json";

const apiKey = import.meta.env.VITE_API_KEY; // Pegando a variável do Vercel

function Assistant() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(
    "Bem-vindo! Sou uma IA treinada para responder perguntas sobre Matheus Otenio."
  );
  const [showChat, setShowChat] = useState(false);

  async function sendMessage() {
    if (!input.trim()) {
      setResponse("Por favor, insira sua pergunta.");
      return;
    }

    setResponse("Carregando, espere um momento...");

    try {
      const systemMessage = {
        role: "system",
        content: `Você deve sempre responder de forma clara e objetiva, garantindo uma comunicação fluida e envolvente. Não utilize formatação Markdown. Responda sempre com até no máximo 500 caracteres.
      
        Seu papel é ser um chatbot especializado em responder apenas sobre ${
          info[0].name
        }.  
      
        **Informações principais:**  
        - Nome: ${info[0].name}  
        - Idade: ${info[0].age} anos  
        - Cargo: ${info[0].role}  
        - Localização: ${info[0].location}  
        - Formação: ${
          info[0].education?.institution || "Informação não disponível"
        }  
      
        **Habilidades:**  
        - Front-end: ${
          info[0].skills?.front_end?.join(", ") || "Nenhuma informação"
        }  
        - Back-end: ${
          info[0].skills?.back_end?.join(", ") || "Nenhuma informação"
        }  
        - Bancos de dados: ${
          info[0].skills?.databases?.join(", ") || "Nenhuma informação"
        }  
        - Cloud e DevOps: ${
          info[0].skills?.cloud_and_devops?.join(", ") || "Nenhuma informação"
        }  
        - Outros conhecimentos: ${
          info[0].skills?.others?.join(", ") || "Nenhuma informação"
        }  
      
        **Certificações relevantes:**  
        - Cloud e Infraestrutura: ${
          info[0].certifications?.cloud_and_infrastructure?.join(", ") ||
          "Nenhuma informação"
        }  
        - Desenvolvimento Web e Mobile: ${
          info[0].certifications?.web_and_mobile_development?.join(", ") ||
          "Nenhuma informação"
        }  
        - Inteligência Artificial e IoT: ${
          info[0].certifications?.ai_and_iot?.join(", ") || "Nenhuma informação"
        }  
        - Customer Experience e Sucesso do Cliente: ${
          info[0].certifications?.customer_experience_and_success?.join(", ") ||
          "Nenhuma informação"
        }  
        - Fundamentos de Programação: ${
          info[0].certifications?.programming_fundamentals?.join(", ") ||
          "Nenhuma informação"
        }  
        - Outros: ${
          info[0].certifications?.others?.join(", ") || "Nenhuma informação"
        }  
      
        **Idiomas:**  
        - Japonês: Nível ${
          info[0].languages?.japanese || "Nenhuma informação"
        }  
        - Inglês: Nível ${info[0].languages?.english || "Nenhuma informação"}  
      
        **Contato e Redes Sociais:**  
        - E-mail: ${info[0].contact?.email || "Nenhuma informação"}  
        - Telefone: ${info[0].contact?.phone || "Nenhuma informação"}  
        - LinkedIn: ${
          info[0].contact?.linkedin
            ? `[Clique aqui](${info[0].contact.linkedin})`
            : "Nenhuma informação"
        }  
        - GitHub: ${
          info[0].contact?.github
            ? `[Clique aqui](${info[0].contact.github})`
            : "Nenhuma informação"
        }  
      
        Sempre que perguntarem como entrar em contato ou ver mais sobre Matheus, forneça os links acima.  
      
        **Importante:** Você deve responder apenas a perguntas relacionadas a ele e suas habilidades. Caso a pergunta não seja sobre Matheus, responda com: "Pergunte mais sobre Matheus!".`,
      };

      const res = await fetch("https://api.deepseek.com/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek-reasoner",
          messages: [systemMessage, { role: "user", content: input }],
        }),
      });

      const resText = await res.text();
      try {
        const data = JSON.parse(resText);
        setResponse(
          data.choices?.[0]?.message?.content ||
            "Servidor congestionado. Envie novamente."
        );
      } catch (error) {
        console.error("Erro ao converter resposta:", resText);
        setResponse("Erro ao interpretar a resposta do servidor.");
      }
      setInput("");
    } catch (error) {
      setResponse("Erro: " + error.message);
    }
  }

  return (
    <div className={styles.container}>
      <button
        onClick={() => setShowChat(!showChat)}
        className={styles.toggleButton}
        aria-label="Abrir chat"
      >
        <img src={getImageUrl("assistant/chatbot.png")} alt="Chatbot" />
      </button>

      {showChat && (
        <div className={styles.chatBox}>
          <div className={styles.chatContainer}>
            <div className={styles.response}>{response}</div>
            <div className={styles.inputContainer}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua pergunta..."
                className={styles.input}
              />
              <div className={styles.buttonContainer}>
                <button
                  onClick={() => setShowChat(false)}
                  className={styles.closeButton}
                >
                  Fechar
                </button>
                <button onClick={sendMessage} className={styles.sendButton}>
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Assistant;
