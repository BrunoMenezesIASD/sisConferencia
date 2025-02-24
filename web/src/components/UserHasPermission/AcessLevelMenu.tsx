export class AcessLevelMenu {

    readonly CADASTRAR = 1;
    readonly EDITAR = 2;
    readonly LISTAR = 3;
    readonly EXCLUIR = 4;

    static readonly ADMINISTRADOR = [
        {
            id: "1",
            menu: "Eventos",
            rota: "/eventos",
            funcionalidades: [1, 2, 3],
            submenu: [
                {
                    id: "1.1",
                    menu: "Conferências e Reuniões",
                    rota: "/eventos",
                    funcionalidades: [1, 2],
                },
            ],
        },
        {
            id: "2",
            menu: "Cadastro de Participantes",
            rota: "/",
            funcionalidades: [1, 2, 3],
            submenu: [
                {
                    id: "2.1",
                    menu: "Delegados",
                    rota: "/delegados",
                    funcionalidades: [1, 2],
                },
                {
                    id: "2.2",
                    menu: "Conselheiros",
                    rota: "/conselheiros",
                    funcionalidades: [2, 3],
                },
                {
                    id: "2.3",
                    menu: "Observadores",
                    rota: "/observadores",
                    funcionalidades: [2, 3],
                },
                {
                    id: "2.4",
                    menu: "Ouvintes",
                    rota: "/ouvintes",
                    funcionalidades: [2, 3],
                },
                {
                    id: "2.5",
                    menu: "Palestrantes",
                    rota: "/palestrantes",
                    funcionalidades: [2, 3],
                },
            ],
        },
        {
            id: "3",
            menu: "Eleição Sociedade Civil",
            rota: "/",
            funcionalidades: [1, 2, 3],
            submenu: [
                {
                    id: "3.1",
                    menu: "Relatório de eleição de conselheiros",
                    rota: "/relatorio",
                    funcionalidades: [1, 2],
                },
            ],
        },
        {
            id: "4",
            menu: "Biblioteca",
            rota: "/",
            funcionalidades: [1, 2, 3],
            submenu: [
                {
                    id: "4.1",
                    menu: "Documentos",
                    rota: "/documentos",
                    funcionalidades: [1, 2],
                },
            ],
        },
        {
            id: "5",
            menu: "Administrador",
            rota: "/",
            funcionalidades: [1, 2, 3],
            submenu: [
                {
                    id: "5.1",
                    menu: "Tipo de Eventos",
                    rota: "/administracao/TipoEvento",
                    funcionalidades: [1, 2, 3],
                },
                {
                    id: "5.2",
                    menu: "Eventos",
                    rota: "/administracao/Eventos",
                    funcionalidades: [1, 2, 3],
                },
                {
                    id: "5.3",
                    menu: "Formato de Evento",
                    rota: "/administracao/TipoFormato",
                    funcionalidades: [1, 2, 3],
                },
                {
                    id: "5.4",
                    menu: "Portaria",
                    rota: "/administracao/Portaria",
                    funcionalidades: [1, 2, 3],
                },
            ],
        },
    ];

    static readonly CONVIDADO = [
        {
            id: "1",
            menu: "Eventos",
            rota: "/eventos",
            funcionalidades: [1, 2, 3],
            submenu: [
                {
                    id: "1.1",
                    menu: "Conferências e Reuniões",
                    rota: "/eventos",
                    funcionalidades: [1, 2],
                },
            ],
        },
        {
            id: "2",
            menu: "Cadastro de Participantes",
            rota: "/",
            funcionalidades: [1, 2, 3],
            submenu: [
                {
                    id: "2.1",
                    menu: "Delegados",
                    rota: "/delegados",
                    funcionalidades: [1, 2],
                },
                {
                    id: "2.2",
                    menu: "Conselheiros",
                    rota: "/conselheiros",
                    funcionalidades: [2, 3],
                },
                {
                    id: "2.3",
                    menu: "Observadores",
                    rota: "/observadores",
                    funcionalidades: [2, 3],
                },
                {
                    id: "2.4",
                    menu: "Ouvintes",
                    rota: "/ouvintes",
                    funcionalidades: [2, 3],
                },
                {
                    id: "2.5",
                    menu: "Palestrantes",
                    rota: "/palestrantes",
                    funcionalidades: [2, 3],
                },
            ],
        },
        {
            id: "3",
            menu: "Eleição Sociedade Civil",
            rota: "/",
            funcionalidades: [1, 2, 3],
            submenu: [
                {
                    id: "3.1",
                    menu: "Relatório de eleição de conselheiros",
                    rota: "/relatorio",
                    funcionalidades: [1, 2],
                },
            ],
        },
        {
            id: "4",
            menu: "Biblioteca",
            rota: "/",
            funcionalidades: [1, 2, 3],
            submenu: [
                {
                    id: "4.1",
                    menu: "Documentos",
                    rota: "/documentos",
                    funcionalidades: [1, 2],
                },
            ],
        },
        {
            id: "5",
            menu: "Administrador",
            rota: "/",
            funcionalidades: [1, 2, 3],
            submenu: [
                {
                    id: "5.1",
                    menu: "Tipo de Eventos",
                    rota: "/administracao/TipoEvento",
                    funcionalidades: [1, 2, 3],
                },
                {
                    id: "5.2",
                    menu: "Eventos",
                    rota: "/administracao/Eventos",
                    funcionalidades: [1, 2, 3],
                },
                {
                    id: "5.3",
                    menu: "Formato de Evento",
                    rota: "/administracao/TipoFormato",
                    funcionalidades: [1, 2, 3],
                },
                {
                    id: "5.4",
                    menu: "Portaria",
                    rota: "/administracao/Portaria",
                    funcionalidades: [1, 2, 3],
                },
            ],
        },
    ];

    static readonly OBSEERVADOR = [
        {
            id: "1",
            menu: "Eventos",
            rota: "/eventos",
            funcionalidades: [1, 2, 3],
            submenu: [
                {
                    id: "1.1",
                    menu: "Conferências e Reuniões",
                    rota: "/eventos",
                    funcionalidades: [1, 2],
                },
            ],
        },
        {
            id: "2",
            menu: "Cadastro de Participantes",
            rota: "/",
            funcionalidades: [1, 2, 3],
            submenu: [
                {
                    id: "2.1",
                    menu: "Delegados",
                    rota: "/delegados",
                    funcionalidades: [1, 2],
                },
                {
                    id: "2.2",
                    menu: "Conselheiros",
                    rota: "/conselheiros",
                    funcionalidades: [2, 3],
                },
                {
                    id: "2.3",
                    menu: "Observadores",
                    rota: "/observadores",
                    funcionalidades: [2, 3],
                },
                {
                    id: "2.4",
                    menu: "Ouvintes",
                    rota: "/ouvintes",
                    funcionalidades: [2, 3],
                },
                {
                    id: "2.5",
                    menu: "Palestrantes",
                    rota: "/palestrantes",
                    funcionalidades: [2, 3],
                },
            ],
        },
        {
            id: "3",
            menu: "Eleição Sociedade Civil",
            rota: "/",
            funcionalidades: [1, 2, 3],
            submenu: [
                {
                    id: "3.1",
                    menu: "Relatório de eleição de conselheiros",
                    rota: "/relatorio",
                    funcionalidades: [1, 2],
                },
            ],
        },
        {
            id: "4",
            menu: "Biblioteca",
            rota: "/",
            funcionalidades: [1, 2, 3],
            submenu: [
                {
                    id: "4.1",
                    menu: "Documentos",
                    rota: "/documentos",
                    funcionalidades: [1, 2],
                },
            ],
        },
        {
            id: "5",
            menu: "Administrador",
            rota: "/",
            funcionalidades: [1, 2, 3],
            submenu: [
                {
                    id: "5.1",
                    menu: "Tipo de Eventos",
                    rota: "/administracao/TipoEvento",
                    funcionalidades: [1, 2, 3],
                },
                {
                    id: "5.2",
                    menu: "Eventos",
                    rota: "/administracao/Eventos",
                    funcionalidades: [1, 2, 3],
                },
                {
                    id: "5.3",
                    menu: "Formato de Evento",
                    rota: "/administracao/TipoFormato",
                    funcionalidades: [1, 2, 3],
                },
                {
                    id: "5.4",
                    menu: "Portaria",
                    rota: "/administracao/Portaria",
                    funcionalidades: [1, 2, 3],
                },
            ],
        },
    ];

    static readonly DELEGADO = [
        {
            id: "1",
            menu: "Eventos",
            rota: "/eventos",
            funcionalidades: [1, 2, 3],
            submenu: [
                {
                    id: "1.1",
                    menu: "Conferências e Reuniões",
                    rota: "/eventos",
                    funcionalidades: [1, 2],
                },
            ],
        },
        {
            id: "2",
            menu: "Cadastro de Participantes",
            rota: "/",
            funcionalidades: [1, 2, 3],
            submenu: [
                {
                    id: "2.1",
                    menu: "Delegados",
                    rota: "/delegados",
                    funcionalidades: [1, 2],
                },
                {
                    id: "2.2",
                    menu: "Conselheiros",
                    rota: "/conselheiros",
                    funcionalidades: [2, 3],
                },
                {
                    id: "2.3",
                    menu: "Observadores",
                    rota: "/observadores",
                    funcionalidades: [2, 3],
                },
                {
                    id: "2.4",
                    menu: "Ouvintes",
                    rota: "/ouvintes",
                    funcionalidades: [2, 3],
                },
                {
                    id: "2.5",
                    menu: "Palestrantes",
                    rota: "/palestrantes",
                    funcionalidades: [2, 3],
                },
            ],
        },
        {
            id: "3",
            menu: "Eleição Sociedade Civil",
            rota: "/",
            funcionalidades: [1, 2, 3],
            submenu: [
                {
                    id: "3.1",
                    menu: "Relatório de eleição de conselheiros",
                    rota: "/relatorio",
                    funcionalidades: [1, 2],
                },
            ],
        },
        {
            id: "4",
            menu: "Biblioteca",
            rota: "/",
            funcionalidades: [1, 2, 3],
            submenu: [
                {
                    id: "4.1",
                    menu: "Documentos",
                    rota: "/documentos",
                    funcionalidades: [1, 2],
                },
            ],
        },
        {
            id: "5",
            menu: "Administrador",
            rota: "/",
            funcionalidades: [1, 2, 3],
            submenu: [
                {
                    id: "5.1",
                    menu: "Tipo de Eventos",
                    rota: "/administracao/TipoEvento",
                    funcionalidades: [1, 2, 3],
                },
                {
                    id: "5.2",
                    menu: "Eventos",
                    rota: "/administracao/Eventos",
                    funcionalidades: [1, 2, 3],
                },
                {
                    id: "5.3",
                    menu: "Formato de Evento",
                    rota: "/administracao/TipoFormato",
                    funcionalidades: [1, 2, 3],
                },
                {
                    id: "5.4",
                    menu: "Portaria",
                    rota: "/administracao/Portaria",
                    funcionalidades: [1, 2, 3],
                },
            ],
        },
    ];
}
