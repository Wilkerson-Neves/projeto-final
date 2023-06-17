import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";



const Signup = () => {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [idade, setIdade] = useState("");
  const [morada, setMorada] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mediaEscolaAnterior, setMediaEscolaAnterior] = useState("");
  const [sexo, setSexo] = useState("");
  const [comportamento, setComportamento] = useState("");
  const [anoEscolaridadeAnterior, setAnoEscolaridadeAnterior] = useState("");
  const [anoEstudar, setAnoEstudar] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [email, setEmail] = useState("");
  const [senhaConf, setSenhaConf] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (
      !nomeCompleto ||
      !idade ||
      !morada ||
      !telefone ||
      !mediaEscolaAnterior ||
      !sexo ||
      !comportamento ||
      !anoEscolaridadeAnterior ||
      !anoEstudar ||
      !email ||
      !emailConf ||
      !senhaConf
    ) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senhaConf);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/");
  };

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
        <Input
          type="text"
          placeholder="Nome Completo"
          value={nomeCompleto}
          onChange={(e) => [setNomeCompleto(e.target.value), setError("")]}
        />
        <Input
          type="number"
          placeholder="Idade"
          value={idade}
          onChange={(e) => [setIdade(e.target.value), setError("")]}
        />
        <Input
          type="text"
          placeholder="Morada"
          value={morada}
          onChange={(e) => [setMorada(e.target.value), setError("")]}
        />
        <Input
          type="text"
          placeholder="Número de Telefone"
          value={telefone}
          onChange={(e) => [setTelefone(e.target.value), setError("")]}
        />
        <Input
          type="number"
          placeholder="Média na Escola Anterior"
          value={mediaEscolaAnterior}
          onChange={(e) => [setMediaEscolaAnterior(e.target.value), setError("")]}
        />
        <label>Sexo</label>
        <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
          <option value="">Selecione o Sexo</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
        <label>Comportamento</label>
        <select value={comportamento} onChange={(e) => setComportamento(e.target.value)}>
          <option value="">Selecione o Comportamento</option>
          <option value="insuf">Insuficiente</option>
          <option value="suf">Suficiente</option>
          <option value="bom">Bom</option>
          <option value="mbom">Muito Bom</option>
        </select>
        <label>Ano de Escolaridade Anterior</label>
        <select
          value={anoEscolaridadeAnterior}
          onChange={(e) => setAnoEscolaridadeAnterior(e.target.value)}
        >
          <option value="">Selecione o Ano de Escolaridade Anterior</option>
          <option value="7º">7º Ano</option>
          <option value="8º">8º Ano</option>
          <option value="9º">9º Ano</option>
          <option value="10º">10º Ano</option>
          <option value="11º">11º Ano</option>
          <option value="12º">12º Ano</option>
        </select>
        <label>Ano que Pretende Estudar</label>
        <select value={anoEstudar} onChange={(e) => setAnoEstudar(e.target.value)}>
          <option value="">Selecione o Ano que Pretende Estudar</option>
          <option value="7º">7º Ano</option>
          <option value="8º">8º Ano</option>
          <option value="9º">9º Ano</option>
          <option value="10º">10º Ano</option>
          <option value="11º">11º Ano</option>
          <option value="12º">12º Ano</option>
        </select>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senhaConf}
          onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
        />
        <C.LabelError>{error}</C.LabelError>
        <Button Text="Candidatar" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;







