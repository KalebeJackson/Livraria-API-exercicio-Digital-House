const { Livro } = require("../models");

const livrosController = {
    index: async (req, res) => {
        const livros =  await Livro.findAll()
        return res.json(livros)
    },
    store: async (req, res) => {
        const {titulo, quantidade_paginas, autor, ano_lancamento, estoque} = req.body
        const livro = await Livro.create({
            titulo, quantidade_paginas, autor, ano_lancamento, estoque
        })
        return res.json(livro)
    },
    update: async (req, res) => {
        const {id} = req.params
        const {titulo, quantidade_paginas, autor, ano_lancamento, estoque} = req.body
        
        const atualizar = await Livro.update({
            titulo, quantidade_paginas, autor, ano_lancamento, estoque
        },{
        where: {
                id
        }
        }
        )

        return res.json(atualizar)
    },
    destroy: async (req, res) => {
        const {id} = req.params

        const deletar = await Livro.destroy({where: {id}})
        if(!deletar){
            return res.status(404).json({mensagem: "Livro não encontrado"})
        }

        return res.status(204).send()
    },
    show: async (req, res) => {
        const {id} =  req.params
        const livro =  await Livro.findOne({
            where: {
                id
            }
        })
       if (livro == null){
           return res.status(404).json({mensagem: "Livro não encontrado"})
       }
       res.json(livro)
    }
}

module.exports = livrosController;