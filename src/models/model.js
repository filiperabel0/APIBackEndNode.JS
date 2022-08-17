import axios from "axios";

const api = axios.create({ baseURL: "https://opentdb.com" });

async function getdata() {
  return await api.get("/api.php?amount=30&category=15").then((res) => {
    let data = res.data.results;
    data = data.map((item) => {
      return {
        categoria: item.category,
        tipo: item.type,
        dificuldade: item.difficulty,
        questao: item.question,
        questao_certa: item.correct_answer,
        questao_incorreta: item.incorrect_answers
      };
    });
    return data;
  });
}

export default getdata;