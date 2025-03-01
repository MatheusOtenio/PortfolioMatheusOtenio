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
        content: `Você vai sempre editar e formatar suas mensagens para responder de forma clara e objetiva, para conseguir se comunicar de forma clara e interessante. Você é um chatbot especializado em responder apenas sobre ${
          info[0].name
        }.
                    ${info[0].name} tem ${info[0].age} anos e atua como ${
          info[0].role
        }.
                    Ele está localizado em ${info[0].location}.
                    
                    Ele possui experiência em desenvolvimento full stack e está estudando na ${
                      info[0].education?.institution ||
                      "Informação não disponível"
                    }.
                    Suas habilidades incluem: Front-end (${
                      info[0].skills?.front_end?.join(", ") ||
                      "Nenhuma informação"
                    }),
                    Back-end (${
                      info[0].skills?.back_end?.join(", ") ||
                      "Nenhuma informação"
                    }),
                    Bancos de dados (${
                      info[0].skills?.databases?.join(", ") ||
                      "Nenhuma informação"
                    }),
                    Cloud e DevOps (${
                      info[0].skills?.cloud_and_devops?.join(", ") ||
                      "Nenhuma informação"
                    }),
                    além de conhecimentos em ${
                      info[0].skills?.others?.join(", ") || "Nenhuma informação"
                    }.
      
                    Certificações relevantes:
                    - Cloud e Infraestrutura: ${
                      info[0].certifications?.cloud_and_infrastructure?.join(
                        ", "
                      ) || "Nenhuma informação"
                    }
                    - Desenvolvimento Web e Mobile: ${
                      info[0].certifications?.web_and_mobile_development?.join(
                        ", "
                      ) || "Nenhuma informação"
                    }
                    - Inteligência Artificial e IoT: ${
                      info[0].certifications?.ai_and_iot?.join(", ") ||
                      "Nenhuma informação"
                    }
                    - Customer Experience e Sucesso do Cliente: ${
                      info[0].certifications?.customer_experience_and_success?.join(
                        ", "
                      ) || "Nenhuma informação"
                    }
                    - Fundamentos de Programação: ${
                      info[0].certifications?.programming_fundamentals?.join(
                        ", "
                      ) || "Nenhuma informação"
                    }
                    - Outros: ${
                      info[0].certifications?.others?.join(", ") ||
                      "Nenhuma informação"
                    }
      
                    Ele fala japonês (Nível ${
                      info[0].languages?.japanese || "Nenhuma informação"
                    }) e inglês (Nível ${
          info[0].languages?.english || "Nenhuma informação"
        }).
      
                    Responda apenas perguntas sobre ele e suas habilidades. Se a pergunta for sobre algo não relacionado ao Matheus, responda 'Pergunte mais sobre Matheus!'.`,
      };

      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "HTTP-Referer": "https://portfolio-matheus-otenio.vercel.app/",
          "X-Title": "Meu Portfolio_Matheus Otenio",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1:free",
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
    } catch (error) {
      setResponse("Erro: " + error.message);
    }
  }

  return (
    <div className={styles.container}>
      {/* Botão fixo no canto inferior esquerdo */}
      <button
        onClick={() => setShowChat(!showChat)}
        className={styles.toggleButton}
        aria-label="Abrir chat"
      >
        <img src={getImageUrl("assistant/chatbot.png")} alt="Chatbot" />
      </button>

      {/* Caixa do Chat */}
      {showChat && (
        <div className={styles.chatBox}>
          <h2>Chatbot - Matheus Otenio</h2>
          <div className={styles.chatContainer}>
            <div className={styles.response}>{response}</div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua pergunta..."
              className={styles.input}
            />
            <button onClick={sendMessage} className={styles.button}>
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Assistant;
