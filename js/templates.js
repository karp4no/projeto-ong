export function templateInicio() {
    return `
        <section>
            <h1>ONG Esperança</h1>

            <p>
                Juntos por um futuro melhor. Trabalhamos para promover
                apoio, inclusão e oportunidades para transformar vidas.
            </p>

            <img src="img/hero-index.jpg"
                 alt="Duas pessoas segurando as mãos durante uma ação de apoio social">
        </section>

        <section>
            <h2>Quem somos</h2>

            <p>
                A ONG Esperança é uma organização dedicada a desenvolver
                ações sociais e apoiar pessoas em situação de vulnerabilidade.
                Nosso trabalho busca criar oportunidades e melhorar a qualidade
                de vida da comunidade.
            </p>
        </section>

        <section>
            <h2>O que fazemos</h2>

            <article>
                <h3>Educação</h3>

                <p>
                    Desenvolvemos ações para incentivar o acesso à educação
                    e contribuir para o desenvolvimento de crianças e jovens.
                </p>

                <img src="img/projetos-educacao.jpg"
                     alt="Criança estudando durante uma atividade educacional">
            </article>

            <article>
                <h3>Meio ambiente</h3>

                <p>
                    Realizamos iniciativas voltadas à preservação ambiental
                    e conscientização da comunidade.
                </p>

                <img src="img/projetos-meio-ambiente.jpg"
                     alt="Voluntário plantando uma muda de árvore">
            </article>

            <article>
                <h3>Assistência social</h3>

                <p>
                    Promovemos campanhas de arrecadação e distribuição de
                    alimentos e outros itens para pessoas que precisam de apoio.
                </p>
            </article>
        </section>

        <section>
            <h2>Entre em contato</h2>

            <address>
                <p>E-mail: contato@ongesperanca.org</p>
                <p>Telefone: (11) 99999-9999</p>
                <p>São Paulo - SP</p>
            </address>
        </section>
    `;
}

export function templateProjetos() {
    return `
        <section>
            <h1>Nossos projetos</h1>

            <p>
                Conheça nossas principais iniciativas e veja como você
                pode contribuir para as ações da ONG Esperança.
            </p>

            <img src="img/banner-projetos.jpg"
                 alt="Banner com folhas verdes representando ações de transformação social">
        </section>

        <section>
            <h2>Projetos sociais</h2>

            <div class="alert alert-sucesso">
                Nossos projetos estão recebendo novos voluntários!
            </div>

            <article>
                <h3>Educação para todos</h3>

                <span class="badge badge-projeto">Projeto ativo</span>

                <img src="img/projetos-educacao.jpg"
                     alt="Criança estudando em uma sala de aula">

                <p>
                    O projeto busca incentivar a educação por meio de
                    atividades de apoio escolar e distribuição de materiais.
                </p>
            </article>

            <article>
                <h3>Preservação do meio ambiente</h3>

                <img src="img/projetos-meio-ambiente.jpg"
                     alt="Pessoa plantando uma árvore em uma área verde">

                <p>
                    A iniciativa promove ações de plantio, preservação
                    de áreas verdes e conscientização ambiental.
                </p>
            </article>

            <article>
                <h3>Assistência à comunidade</h3>

                <img src="img/projetos-assistencia.jpg"
                     alt="Voluntário entregando uma caixa de alimentos">

                <p>
                    Organizamos campanhas para arrecadar e distribuir
                    alimentos e itens essenciais para famílias que precisam.
                </p>
            </article>
        </section>

        <section>
            <h2>Como fazer uma doação</h2>

            <p>
                As doações ajudam a manter nossos projetos e permitem
                que mais pessoas sejam atendidas.
            </p>

            <p>
                Para contribuir, entre em contato com nossa equipe
                pelo e-mail contato@ongesperanca.org ou pelo telefone
                (11) 99999-9999.
            </p>
        </section>

        <section>
            <h2>Seja um voluntário</h2>

            <p>
                Você também pode contribuir com seu tempo e suas habilidades.
                Cadastre seus dados na nossa página de voluntariado para
                demonstrar seu interesse em participar das ações.
            </p>

            <a href="cadastro.html">Quero ser voluntário</a>
        </section>
    `;
}

export function templateCadastro() {
    return `
        <section>
            <h1>Seja um voluntário</h1>

            <p>
                Preencha o formulário abaixo para demonstrar seu interesse
                em participar das ações da ONG Esperança.
            </p>
        </section>

        <form action="#" method="post">
            <fieldset>
                <legend>Dados pessoais</legend>

                <p>
                    <label for="nome">Nome completo:</label><br>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        autocomplete="name"
                        required
                        minlength="3"
                        placeholder="Digite seu nome completo">
                </p>

                <p>
                    <label for="email">E-mail:</label><br>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autocomplete="email"
                        required
                        placeholder="exemplo@email.com">
                </p>

                <p>
                    <label for="nascimento">Data de nascimento:</label><br>
                    <input
                        type="date"
                        id="nascimento"
                        name="nascimento"
                        required>
                </p>

                <p>
                    <label for="cpf">CPF:</label><br>
                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        inputmode="numeric"
                        autocomplete="off"
                        maxlength="14"
                        pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                        title="Digite o CPF no formato 000.000.000-00"
                        placeholder="000.000.000-00"
                        required>
                </p>

                <p>
                    <label for="telefone">Telefone:</label><br>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        inputmode="tel"
                        autocomplete="tel"
                        maxlength="15"
                        pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                        title="Digite o telefone no formato (00) 00000-0000"
                        placeholder="(11) 99999-9999"
                        required>
                </p>
            </fieldset>

            <fieldset>
                <legend>Endereço</legend>

                <p>
                    <label for="cep">CEP:</label><br>
                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        inputmode="numeric"
                        autocomplete="postal-code"
                        maxlength="9"
                        pattern="[0-9]{5}-[0-9]{3}"
                        title="Digite o CEP no formato 00000-000"
                        placeholder="00000-000"
                        required>
                </p>

                <p>
                    <label for="endereco">Endereço:</label><br>
                    <input
                        type="text"
                        id="endereco"
                        name="endereco"
                        autocomplete="street-address"
                        required
                        placeholder="Digite seu endereço">
                </p>

                <p>
                    <label for="cidade">Cidade:</label><br>
                    <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        autocomplete="address-level2"
                        required
                        placeholder="Digite sua cidade">
                </p>

                <p>
                    <label for="estado">Estado:</label><br>
                    <input
                        type="text"
                        id="estado"
                        name="estado"
                        maxlength="2"
                        autocomplete="address-level1"
                        pattern="[A-Za-z]{2}"
                        title="Digite a sigla do estado, por exemplo SP"
                        placeholder="SP"
                        required>
                </p>
            </fieldset>

            <fieldset>
                <legend>Interesse em voluntariado</legend>

                <p>
                    <label for="area">Área de interesse:</label><br>

                    <select id="area" name="area" required>
                        <option value="">Selecione uma opção</option>
                        <option value="educacao">Educação</option>
                        <option value="meio-ambiente">Meio ambiente</option>
                        <option value="assistencia">Assistência social</option>
                        <option value="outros">Outras atividades</option>
                    </select>
                </p>

                <p>
                    <label for="mensagem">
                        Conte um pouco sobre como deseja ajudar:
                    </label><br>

                    <textarea
                        id="mensagem"
                        name="mensagem"
                        rows="5"
                        minlength="10"
                        required
                        placeholder="Escreva sua mensagem"></textarea>
                </p>
            </fieldset>

            <p>
                <button type="submit">Enviar cadastro</button>
                <button type="reset">Limpar formulário</button>
            </p>
        </form>
    `;
}
