import React, { createContext, useContext, useEffect, useState } from "react";

const SUPPORTED_LANGUAGES = ["pt", "en", "jp"];

export const translations = {
  pt: {
    "navbar.home": "Início",
    "navbar.about": "Sobre",
    "navbar.experience": "Experiência",
    "navbar.projects": "Projetos",
    "navbar.contact": "Contato",
    "navbar.menuButtonAlt": "Botão do menu",

    "hero.title": "Matheus Otenio",
    "hero.subtitle": "Sou Engenheiro de Computação",
    "hero.downloadCv": "Baixar CV",
    "hero.contactMe": "Entrar em contato",
    "hero.imageAlt": "Imagem de destaque de Matheus Otenio",

    "about.title": "Sobre",
    "about.frontend.title": "Frontend",
    "about.frontend.description":
      "Experiência na criação de sites responsivos para diversas plataformas, buscando sempre melhorar a experiência do usuário.",
    "about.backend.title": "Backend",
    "about.backend.description":
      "Tenho estudado o desenvolvimento de sistemas e APIs eficientes, além de frameworks, com foco em escalabilidade, visando práticas de CI/CD e Cloud computing.",
    "about.other.title": "Outros",
    "about.other.description":
      "Forte interesse em Inteligência Artificial, IoT e Análise de Dados. Sou também fluente em japonês e tenho bom domínio do inglês.",
    "about.frontend.iconAlt": "Ícone representando frontend",
    "about.backend.iconAlt": "Ícone representando backend",
    "about.other.iconAlt": "Ícone representando outros tópicos",

    "experience.title": "Experiência",

    "projects.title": "Projetos",

    "contact.title": "Contatos",
    "contact.subtitle": "Venha conversar comigo!",
    "contact.emailCopied": "E-mail copiado para a área de transferência!",
    "contact.phoneCopied": "Número copiado para a área de transferência!",
    "contact.emailAlt": "E-mail",
    "contact.linkedinAlt": "LinkedIn",
    "contact.githubAlt": "GitHub",
    "contact.phoneAlt": "Telefone",

    "formContact.title": "Entre em contato",
    "formContact.namePlaceholder": "Nome...",
    "formContact.emailPlaceholder": "seu_email@gmail.com",
    "formContact.messagePlaceholder": "Sua mensagem...",
    "formContact.emailServiceError":
      "O serviço de e-mail não está configurado corretamente.",
    "formContact.messageSent": "Mensagem enviada!",
    "formContact.genericError":
      "Ops! Algo deu errado. Por favor, tente novamente.",
    "formContact.backButton": "Voltar",
    "formContact.sendButton": "Enviar",
    "formContact.sending": "Enviando...",

    "assistant.welcome":
      "Bem-vindo! Sou uma IA treinada para responder perguntas sobre Matheus Otenio.",
    "assistant.emptyInput": "Por favor, insira sua pergunta.",
    "assistant.loading": "Carregando, espere um momento...",
    "assistant.serverBusy": "Servidor congestionado. Envie novamente.",
    "assistant.parseError":
      "Erro ao interpretar a resposta do servidor.",
    "assistant.errorPrefix": "Erro: ",
    "assistant.inputPlaceholder": "Digite sua pergunta...",
    "assistant.closeButton": "Fechar",
    "assistant.sendButton": "Enviar",
    "assistant.openChatAriaLabel": "Abrir chat",
    "assistant.systemPrompt": "Chatbot especializado em responder sobre Matheus Otenio.",
    "assistant.error.generic": "Erro ao interpretar a resposta do servidor.",
    "assistant.server.busy": "Servidor congestionado. Envie novamente.",
    "assistant.placeholder": "Digite sua pergunta...",
    "assistant.button.close": "Fechar",
    "assistant.button.send": "Enviar",
    "assistant.aria.openChat": "Abrir chat",
    "assistant.system.fallback": "Pergunte mais sobre Matheus!",
    "assistant.system.instructions":
      "Responda de forma clara e objetiva, sem Markdown, com até 500 caracteres, falando apenas sobre Matheus Otenio, suas habilidades, experiências e formas de contato.",

    "projectCard.imageAlt": "Imagem do projeto",
    "projectCard.demo": "Demo",
    "projectCard.source": "Código-fonte",

    "html.lang": "pt-BR",
    "html.title": "Meu Portfolio - Matheus Otenio",
  },
  en: {
    "navbar.home": "Home",
    "navbar.about": "About",
    "navbar.experience": "Experience",
    "navbar.projects": "Projects",
    "navbar.contact": "Contact",
    "navbar.menuButtonAlt": "Menu button",

    "hero.title": "Matheus Otenio",
    "hero.subtitle": "I'm a Computer Engineer",
    "hero.downloadCv": "Download CV",
    "hero.contactMe": "Contact Me",
    "hero.imageAlt": "Hero image of Matheus Otenio",

    "about.title": "About",
    "about.frontend.title": "Frontend",
    "about.frontend.description":
      "Experience creating responsive websites for multiple platforms, always seeking to improve user experience.",
    "about.backend.title": "Backend",
    "about.backend.description":
      "I have been studying the development of efficient systems and APIs, as well as frameworks, focusing on scalability, CI/CD practices and cloud computing.",
    "about.other.title": "Others",
    "about.other.description":
      "Strong interest in Artificial Intelligence, IoT and Data Analysis. I am also fluent in Japanese and have a good command of English.",
    "about.frontend.iconAlt": "Frontend icon",
    "about.backend.iconAlt": "Backend icon",
    "about.other.iconAlt": "Other topics icon",

    "experience.title": "Experience",

    "projects.title": "Projects",

    "contact.title": "Contact",
    "contact.subtitle": "Let's get in touch!",
    "contact.emailCopied": "Email copied to clipboard!",
    "contact.phoneCopied": "Phone number copied to clipboard!",
    "contact.emailAlt": "Email",
    "contact.linkedinAlt": "LinkedIn",
    "contact.githubAlt": "GitHub",
    "contact.phoneAlt": "Phone",

    "formContact.title": "Get In Touch",
    "formContact.namePlaceholder": "Name...",
    "formContact.emailPlaceholder": "your_email@gmail.com",
    "formContact.messagePlaceholder": "Your message...",
    "formContact.emailServiceError":
      "Email service is not configured properly.",
    "formContact.messageSent": "Message Sent!",
    "formContact.genericError":
      "Oops! Something went wrong. Please try again.",
    "formContact.backButton": "Back",
    "formContact.sendButton": "Send",
    "formContact.sending": "Sending...",

    "assistant.welcome":
      "Welcome! I'm an AI trained to answer questions about Matheus Otenio.",
    "assistant.emptyInput": "Please enter your question.",
    "assistant.loading": "Loading, please wait...",
    "assistant.serverBusy": "Server busy. Please send again.",
    "assistant.parseError": "Error parsing server response.",
    "assistant.errorPrefix": "Error: ",
    "assistant.inputPlaceholder": "Type your question...",
    "assistant.closeButton": "Close",
    "assistant.sendButton": "Send",
    "assistant.openChatAriaLabel": "Open chat",
    "assistant.systemPrompt":
      "Chatbot specialized in answering questions about Matheus Otenio.",
    "assistant.error.generic": "Error parsing server response.",
    "assistant.server.busy": "Server busy. Please send again.",
    "assistant.placeholder": "Type your question...",
    "assistant.button.close": "Close",
    "assistant.button.send": "Send",
    "assistant.aria.openChat": "Open chat",
    "assistant.system.fallback": "Ask more about Matheus!",
    "assistant.system.instructions":
      "Answer clearly and concisely, without Markdown, in at most 500 characters, only about Matheus Otenio, his skills, experience and contact information.",

    "projectCard.imageAlt": "Image of project",
    "projectCard.demo": "Demo",
    "projectCard.source": "Source",

    "html.lang": "en",
    "html.title": "My Portfolio - Matheus Otenio",
  },
  jp: {
    "navbar.home": "ホーム",
    "navbar.about": "自己紹介",
    "navbar.experience": "経験",
    "navbar.projects": "プロジェクト",
    "navbar.contact": "連絡先",
    "navbar.menuButtonAlt": "メニューボタン",

    "hero.title": "マテウス・オテニオ",
    "hero.subtitle": "コンピュータエンジニアです",
    "hero.downloadCv": "履歴書をダウンロード",
    "hero.contactMe": "お問い合わせ",
    "hero.imageAlt": "マテウス・オテニオの画像",

    "about.title": "自己紹介",
    "about.frontend.title": "フロントエンド",
    "about.frontend.description":
      "様々なプラットフォーム向けのレスポンシブサイト開発の経験があり、常にユーザー体験の向上を目指しています。",
    "about.backend.title": "バックエンド",
    "about.backend.description":
      "スケーラビリティ、CI/CD、クラウドコンピューティングを重視し、効率的なシステムやAPI、フレームワークの開発を学んでいます。",
    "about.other.title": "その他",
    "about.other.description":
      "AI、IoT、データ分析に強い興味があり、日本語は流暢で、英語も得意です。",
    "about.frontend.iconAlt": "フロントエンドのアイコン",
    "about.backend.iconAlt": "バックエンドのアイコン",
    "about.other.iconAlt": "その他トピックのアイコン",

    "experience.title": "経験",

    "projects.title": "プロジェクト",

    "contact.title": "連絡先",
    "contact.subtitle": "お気軽にご連絡ください！",
    "contact.emailCopied": "メールアドレスをコピーしました！",
    "contact.phoneCopied": "電話番号をコピーしました！",
    "contact.emailAlt": "メール",
    "contact.linkedinAlt": "LinkedIn",
    "contact.githubAlt": "GitHub",
    "contact.phoneAlt": "電話",

    "formContact.title": "お問い合わせ",
    "formContact.namePlaceholder": "お名前...",
    "formContact.emailPlaceholder": "your_email@gmail.com",
    "formContact.messagePlaceholder": "メッセージ...",
    "formContact.emailServiceError":
      "メールサービスが正しく設定されていません。",
    "formContact.messageSent": "メッセージが送信されました！",
    "formContact.genericError":
      "エラーが発生しました。もう一度お試しください。",
    "formContact.backButton": "戻る",
    "formContact.sendButton": "送信",
    "formContact.sending": "送信中...",

    "assistant.welcome":
      "ようこそ！私はマテウス・オテニオについての質問に答えるAIです。",
    "assistant.emptyInput": "質問を入力してください。",
    "assistant.loading": "読み込み中です。少々お待ちください...",
    "assistant.serverBusy": "サーバーが混雑しています。再度お試しください。",
    "assistant.parseError": "サーバーの応答を解析できませんでした。",
    "assistant.errorPrefix": "エラー: ",
    "assistant.inputPlaceholder": "質問を入力してください...",
    "assistant.closeButton": "閉じる",
    "assistant.sendButton": "送信",
    "assistant.openChatAriaLabel": "チャットを開く",
    "assistant.systemPrompt":
      "マテウス・オテニオに関する質問に回答するチャットボットです。",
    "assistant.error.generic": "サーバーの応答を解析できませんでした。",
    "assistant.server.busy": "サーバーが混雑しています。再度お試しください。",
    "assistant.placeholder": "質問を入力してください...",
    "assistant.button.close": "閉じる",
    "assistant.button.send": "送信",
    "assistant.aria.openChat": "チャットを開く",
    "assistant.system.fallback": "マテウスについてもっと質問してください！",
    "assistant.system.instructions":
      "あなたはマテウス・オテニオに関する質問のみに、Markdown を使わず、最大 500 文字で、分かりやすく簡潔に回答してください。",

    "projectCard.imageAlt": "プロジェクトの画像",
    "projectCard.demo": "デモ",
    "projectCard.source": "ソースコード",

    "html.lang": "ja-JP",
    "html.title": "ポートフォリオ - マテウス・オテニオ",
  },
};

export function t(lang, key) {
  const base = translations[lang] || translations.pt || {};
  if (base[key]) return base[key];
  if (translations.pt && translations.pt[key]) return translations.pt[key];
  return key;
}

// Lê o idioma inicial do localStorage e, se não existir,
// tenta inferir a partir do navegador, caindo para "pt" como padrão.
function getInitialLanguage() {
  if (typeof window === "undefined") {
    return "pt";
  }

  try {
    const stored = window.localStorage.getItem("appLanguage");
    if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
      return stored;
    }
  } catch {
    // Ignora erros de acesso ao localStorage.
  }

  const navLang =
    (typeof navigator !== "undefined" && navigator.language) || "pt";
  const lowered = navLang.toLowerCase();

  if (lowered.startsWith("pt")) return "pt";
  if (lowered.startsWith("en")) return "en";
  if (lowered.startsWith("ja") || lowered.startsWith("jp")) return "jp";

  return "pt";
}

const I18nContext = createContext({
  language: "pt",
  setLanguage: () => {},
  t: (key) => key,
});

export function I18nProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);

  // Persiste o idioma escolhido no localStorage sempre que mudar.
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    try {
      window.localStorage.setItem("appLanguage", language);
    } catch {
      // Ignora erros de persistência.
    }
  }, [language]);

  const setLanguage = (nextLanguage) => {
    if (SUPPORTED_LANGUAGES.includes(nextLanguage)) {
      setLanguageState(nextLanguage);
    } else {
      setLanguageState("pt");
    }
  };

  const value = {
    language,
    setLanguage,
    t: (key) => t(language, key),
  };

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

