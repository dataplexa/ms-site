const headerBanner01 = "/banner_01.png";
const headerBanner02 = "/banner_02.png";
const headerBanner03 = "/banner_03.png";
const headerBanner04 = "/banner_04.png";

const services = "/home_services.png";

const signBanner = "/sign_banner.png";

const midia01 = "/midia_01.png";
const midia02 = "/midia_02.png";
const midia03 = "/midia_03.png";
const midia04 = "/midia_04.png";
const midia05 = "/midia_05.png";
const midia06 = "/midia_06.png";
const midia07 = "/midia_07.png";

const team = "/retrato.png";

const homeData = {
    headerBanner: {
        images: [headerBanner01, headerBanner02, headerBanner03, headerBanner04],
    },
    services: {
        image: services,
        servicesList: [
            {
                id: "1",
                title: "PROJETOS DE ARQUITETURA",
                description:
                    "Realizamos projetos de interiores e arquitetura para áreas residenciais, corporativas e comerciais, sejam novos ou de reforma, buscando atender as demandas e potencialidades de cada localidade e cliente.",
            },
            {
                id: "2",
                title: "ACOMPANHAMENTO DE PROJETOS",
                description:
                    "Para que se garanta que o que foi designado e desenhado no Projeto de arquitetura, utilizamos nosso conhecimento e estruturas para oferecer suporte ao cliente nas fases de orçamentos, contratação e execução de obras, auxiliando a gerenciar processos, cronograma de etapas e todos os passos necessários para a concretização do desejo do Projeto de arquitetura.",
            },
            {
                id: "3",
                title: "CONSTRUÇÃO E REFORMA",
                description:
                    "Ajudamos ao cliente ofertando opções de mão de obra e fornecedores para a construção ou reforma de seu projeto, que pode incluir áreas parciais, como banheiros, salas ou cozinha ou mesmo uma reforma completa, incluindo construções de nova residências, casas, apartamentos e outros.",
            },
        ],
    },
    signBanner: {
        image: signBanner,
    },
    news: [
        {
            title: "Casa e Jardim - Neto",
            link: "https://revistacasaejardim.globo.com/Casa-e-Jardim/Decoracao/noticia/2022/01/casa-de-vila-tem-layout-integrado-muita-luz-e-ventilacao-natural.html",
            date: "6 de janeiro, 2022",
            cover: midia01,
        },
        {
            title: "Casa Vogue - Angelica Pettro",
            link: "https://casavogue.globo.com/Interiores/apartamentos/noticia/2022/02/180-m-com-decor-sofisticado-adega-e-churrasqueira.html",
            date: "15 de fevereiro, 2022",
            cover: midia02,
        },
        {
            title: "Casa e Jardim - Ricardo Martins",
            link: "https://revistacasaejardim.globo.com/decoracao/noticia/2023/03/reforma-confere-uma-nova-atmosfera-em-apartamento-ja-habitado-por-familia.ghtml",
            date: "2 de março, 2023",
            cover: midia03,
        },
        {
            title: "Casa - Gabriela",
            link: "https://casa.abril.com.br/casas-apartamentos/ape-45m-quarto-teto-verde-acesso-varanda/",
            date: "28 de julho, 2023",
            cover: midia04,
        },
        {
            title: "Casa - Samuel Barrese",
            link: "https://casa.abril.com.br/casas-apartamentos/ambientes-integrados-e-decor-minimalista-neste-apartamento-em-sp/",
            date: "20 de janeiro, 2021",
            cover: midia05,
        },
        {
            title: "Casa - Ricardo Martins",
            link: "https://casa.abril.com.br/casas-apartamentos/toques-azul-apartamento-integrado-130m/",
            date: "6 de setembro, 2023",
            cover: midia06,
        },
        {
            title: "Casa e Jardim - Olho Mágico: 9 ambientes Projetados",
            link: "https://revistacasaejardim.globo.com/arquitetura/noticia/2023/09/olho-magico-9-ambientes-projetados-pelo-escritorio-m-arquitetura.ghtml",
            date: "15 de setembro, 2023",
            cover: midia07,
        },
    ],
    team: {
        image: team,
        title: "Conheça as mentes criativas por trás da arquitetura",
        description: "Fundado em 2016, somos um escritório de Arquitetura e Design, jovem e dinâmico, que faz projetos e executa obras residenciais e comerciais de vários tipos e padrões, mesclando os diferentes estilos e desafios trazidos pelos clientes. Auxiliamos os clientes em todas as fases do Projeto, desde concepção até entrega final (Sistema Turn Key), passando pela execução de obra (com equipe própria ou terceirizadas) e controle de orçamentos, planilhas de custos e gerenciamento de contratações e gastos estimados. Acreditamos na personalização dos Projetos, assim como são unicos os clientes e são diversas as necessidades de cada um. Tudo começa com uma necessidade e um desafio!"
    },
    values: [
        {
            title: "Missão",
            description: "Nossa missão é projetar e construir espaços arquitetônicos que não apenas atendam às necessidades funcionais de nossos clientes, mas que também inspirem e enriqueçam suas vidas.",
        },
        {
            title: "Visão",
            description: "Nossa visão é ser reconhecidos como líderes em arquitetura, buscamos continuamente expandir nossos horizontes, explorando novas tecnologias.",
        },
        {
            title: "Valores",
            description: "Nossos valores fundamentais incluem a inovação criativa, a colaboração estreita com nossos clientes e parceiros, valorizamos a diversidade de ideias e experiências como uma fonte de inspiração para projetos únicos e significativos.",
        },
    ]

};

export default homeData;
