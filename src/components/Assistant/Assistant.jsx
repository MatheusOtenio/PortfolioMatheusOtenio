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
        content: `Você é um chatbot especializado em responder apenas sobre ${
          info.nome
        }.
                        ${info.nome} tem ${info.idade} anos e atua como ${
          info.cargo
        }.
                        Ele está localizado em ${info.localizacao}.
                        
                        Ele possui experiência em desenvolvimento full stack e está estudando na ${
                          info.graduacao.instituicao
                        }.
                        Suas habilidades incluem: Front-end (${info.habilidades.front_end.join(
                          ", "
                        )}),
                        Back-end (${info.habilidades.back_end.join(", ")}),
                        Bancos de dados (${info.habilidades.banco_de_dados.join(
                          ", "
                        )}),
                        Cloud e DevOps (${info.habilidades.cloud_e_devops.join(
                          ", "
                        )}),
                        além de conhecimentos em ${info.habilidades.outros.join(
                          ", "
                        )}.
      
                        Certificações relevantes:
                        - Cloud e Infraestrutura: ${info.certificacoes.cloud_e_infraestrutura.join(
                          ", "
                        )}
                        - Desenvolvimento Web e Mobile: ${info.certificacoes.desenvolvimento_web_mobile.join(
                          ", "
                        )}
                        - Inteligência Artificial e IoT: ${info.certificacoes.inteligencia_artificial_iot.join(
                          ", "
                        )}
                        - Customer Experience e Sucesso do Cliente: ${info.certificacoes.customer_experience_sucesso_cliente.join(
                          ", "
                        )}
                        - Fundamentos de Programação: ${info.certificacoes.fundamentos_programacao.join(
                          ", "
                        )}
                        - Outros: ${info.certificacoes.outros.join(", ")}
      
                        Ele fala japonês (Nível ${
                          info.idiomas.japones
                        }) e inglês (Nível ${info.idiomas.ingles}).
      
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
