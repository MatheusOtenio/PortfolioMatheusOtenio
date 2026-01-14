import { useState } from "react";
import styles from "./Assistant.module.css";
import { getImageUrl } from "../../utils";
import info from "../../data/info.json";
import { useI18n } from "../../i18n";

const apiKey = import.meta.env.VITE_API_KEY; // Pegando a variável do Vercel

function Assistant() {
  const { t, language } = useI18n();
  const currentLang = language || "pt";

  const [input, setInput] = useState("");
  const [response, setResponse] = useState(() =>
    t("assistant.welcome")
  );
  const [showChat, setShowChat] = useState(false);

  async function sendMessage() {
    if (!input.trim()) {
      setResponse(t("assistant.emptyInput"));
      return;
    }

    setResponse(t("assistant.loading"));

    try {
      const fallback = t("assistant.system.fallback");
      const instructions = t("assistant.system.instructions");

      let content = "";

      if (currentLang === "en") {
        content = `${instructions}

You are a chatbot specialized in answering only questions about ${info[0].name}.

Main information:
- Name: ${info[0].name}
- Age: ${info[0].age} years
- Role: ${info[0].role}
- Location: ${info[0].location}
- Education: ${info[0].education?.institution || "No information"}

Skills:
- Front-end: ${
          info[0].skills?.front_end?.join(", ") || "No information"
        }
- Back-end: ${
          info[0].skills?.back_end?.join(", ") || "No information"
        }
- Databases: ${
          info[0].skills?.databases?.join(", ") || "No information"
        }
- Cloud and DevOps: ${
          info[0].skills?.cloud_and_devops?.join(", ") || "No information"
        }
- Other skills: ${
          info[0].skills?.others?.join(", ") || "No information"
        }

Relevant certifications:
- Cloud and Infrastructure: ${
          info[0].certifications?.cloud_and_infrastructure?.join(", ") ||
          "No information"
        }
- Web and Mobile Development: ${
          info[0].certifications?.web_and_mobile_development?.join(", ") ||
          "No information"
        }
- Artificial Intelligence and IoT: ${
          info[0].certifications?.ai_and_iot?.join(", ") || "No information"
        }
- Customer Experience and Customer Success: ${
          info[0].certifications?.customer_experience_and_success?.join(", ") ||
          "No information"
        }
- Programming Fundamentals: ${
          info[0].certifications?.programming_fundamentals?.join(", ") ||
          "No information"
        }
- Others: ${
          info[0].certifications?.others?.join(", ") || "No information"
        }

Languages:
- Japanese level: ${
          info[0].languages?.japanese || "No information"
        }
- English level: ${
          info[0].languages?.english || "No information"
        }

Contact and social:
- Email: ${info[0].contact?.email || "No information"}
- Phone: ${info[0].contact?.phone || "No information"}
- LinkedIn: ${info[0].contact?.linkedin || "No information"}
- GitHub: ${info[0].contact?.github || "No information"}

Whenever the question is not about ${info[0].name}, answer: "${fallback}".`;
      } else if (currentLang === "jp") {
        content = `${instructions}

あなたは ${info[0].name} に関する質問のみに回答するチャットボットです。

主な情報:
- 名前: ${info[0].name}
- 年齢: ${info[0].age} 歳
- 役職: ${info[0].role}
- 所在地: ${info[0].location}
- 学歴: ${
          info[0].education?.institution || "情報がありません"
        }

スキル:
- フロントエンド: ${
          info[0].skills?.front_end?.join(", ") || "情報がありません"
        }
- バックエンド: ${
          info[0].skills?.back_end?.join(", ") || "情報がありません"
        }
- データベース: ${
          info[0].skills?.databases?.join(", ") || "情報がありません"
        }
- クラウド・DevOps: ${
          info[0].skills?.cloud_and_devops?.join(", ") || "情報がありません"
        }
- その他のスキル: ${
          info[0].skills?.others?.join(", ") || "情報がありません"
        }

主な認定資格:
- クラウド・インフラ: ${
          info[0].certifications?.cloud_and_infrastructure?.join(", ") ||
          "情報がありません"
        }
- Web・モバイル開発: ${
          info[0].certifications?.web_and_mobile_development?.join(", ") ||
          "情報がありません"
        }
- AI・IoT: ${
          info[0].certifications?.ai_and_iot?.join(", ") || "情報がありません"
        }
- カスタマーエクスペリエンス・カスタマーサクセス: ${
          info[0].certifications?.customer_experience_and_success?.join(", ") ||
          "情報がありません"
        }
- プログラミング基礎: ${
          info[0].certifications?.programming_fundamentals?.join(", ") ||
          "情報がありません"
        }
- その他: ${
          info[0].certifications?.others?.join(", ") || "情報がありません"
        }

言語:
- 日本語レベル: ${
          info[0].languages?.japanese || "情報がありません"
        }
- 英語レベル: ${
          info[0].languages?.english || "情報がありません"
        }

連絡先・SNS:
- メール: ${info[0].contact?.email || "情報がありません"}
- 電話番号: ${info[0].contact?.phone || "情報がありません"}
- LinkedIn: ${info[0].contact?.linkedin || "情報がありません"}
- GitHub: ${info[0].contact?.github || "情報がありません"}

質問が ${info[0].name} に関係ない場合は「${fallback}」と答えてください。`;
      } else {
        content = `${instructions}

Você é um chatbot especializado em responder apenas sobre ${info[0].name}.

Informações principais:
- Nome: ${info[0].name}
- Idade: ${info[0].age} anos
- Cargo: ${info[0].role}
- Localização: ${info[0].location}
- Formação: ${
          info[0].education?.institution || "Informação não disponível"
        }

Habilidades:
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

Certificações relevantes:
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

Idiomas:
- Japonês: Nível ${
          info[0].languages?.japanese || "Nenhuma informação"
        }
- Inglês: Nível ${
          info[0].languages?.english || "Nenhuma informação"
        }

Contato e redes sociais:
- E-mail: ${info[0].contact?.email || "Nenhuma informação"}
- Telefone: ${info[0].contact?.phone || "Nenhuma informação"}
- LinkedIn: ${
          info[0].contact?.linkedin || "Nenhuma informação"
        }
- GitHub: ${
          info[0].contact?.github || "Nenhuma informação"
        }

Caso a pergunta não seja sobre ${info[0].name}, responda: "${fallback}".`;
      }

      const systemMessage = {
        role: "system",
        content,
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
            t("assistant.server.busy")
        );
      } catch (error) {
        console.error("Erro ao converter resposta:", resText);
        setResponse(t("assistant.error.generic"));
      }
      setInput("");
    } catch (error) {
      setResponse(t("assistant.errorPrefix") + error.message);
    }
  }

  return (
    <div className={styles.container}>
      <button
        onClick={() => setShowChat(!showChat)}
        className={styles.toggleButton}
        aria-label={t("assistant.aria.openChat")}
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
                placeholder={t("assistant.placeholder")}
                className={styles.input}
              />
              <div className={styles.buttonContainer}>
                <button
                  onClick={() => setShowChat(false)}
                  className={styles.closeButton}
                >
                  {t("assistant.button.close")}
                </button>
                <button onClick={sendMessage} className={styles.sendButton}>
                  {t("assistant.button.send")}
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
