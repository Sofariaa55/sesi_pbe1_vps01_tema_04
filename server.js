const express = require("express")
const cors = require("cors") // 1. Corrigido "cons" para "cors"
const dados = require("./dados.json") // 2. Renomeado para "dados" para coincidir com o resto do código

function avaliaConsumo() {
    dados.forEach(item => {
        // 3. Corrigido para "consumo_kwh", propriedade real do dados.json
        if (item.consumo_kwh > 150) {
            item.status = "Consumo elevado"
        } else {
            item.status = "Normal"
        }
    })
}

function autoIncrement() {
    if (dados.length === 0) return 1
    return Number(dados[dados.length - 1].id) + 1
}

const rotaInicial = (req, res) => {
    res.json("Back-end respondendo - Rastreamento de Consumo de Energia") // 4. Corrigido "res.jason" para "res.json"
}

const createEquipamento = (req, res) => {
    const item = req.body
    item.id = autoIncrement()
    dados.push(item)
    res.status(201).json(item)
}

const readEquipamentos = (req, res) => {
    avaliaConsumo()
    res.json(dados)
}

const buscaEquipamento = (req, res) => {
    avaliaConsumo()
    const id = req.params.id
    const item = dados.find(e => e.id == Number(id))
    if (item) res.json(item) // 4. Corrigido "res.jason" para "res.json"
    else res.status(404).json("Id não encontrado")
}

const buscaPorEquipamento = (req, res) => {
    avaliaConsumo()
    // 5. Corrigido "res.params" para "req.params" e nome do parâmetro
    const nomeEquipamento = req.params.equipamento.toLowerCase()
    // 6. Corrigido "e.equipamentos" para "e.equipamento"
    const resultados = dados.filter(e => e.equipamento.toLowerCase().includes(nomeEquipamento))
    res.json(resultados)
}

// 8. Criada a função de busca por local que faltava no código
const buscaPorLocal = (req, res) => {
    avaliaConsumo()
    const localBusca = req.params.local.toLowerCase()
    const resultados = dados.filter(e => e.local.toLowerCase().includes(localBusca))
    res.json(resultados)
}

const updateEquipamento = (req, res) => {
    const id = req.params.id
    const novosDados = req.body
    novosDados.id = Number(id)
    let status = 0 // 7. Corrigido "stutus" para "status"

    dados.forEach((item, indice) => {
        if (item.id == id) {
            dados[indice] = novosDados
            status = 1
        }
    })

    if (status == 1) {
        res.status(202).json(novosDados)
    } else {
        res.status(404).send("Equipamento/local não encontrado")
    }
}

const deleteEquipamento = (req, res) => {
    const id = req.params.id
    let status = 0

    dados.forEach((item, indice) => {
        if (item.id == id) {
            dados.splice(indice, 1)
            status = 1
        }
    })

    if (status == 1) {
        res.json("Registro excluído com sucesso")
    } else {
        res.status(404).send("Equipamento/local não encontrado")
    }
}

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const porta = 3000

// Rotas REST
app.get('/', rotaInicial)
app.post('/equipamentos', createEquipamento)
app.get('/equipamentos', readEquipamentos)
app.get('/equipamentos/:id', buscaEquipamento)
app.get('/equipamentos/nome/:equipamento', buscaPorEquipamento)
app.get('/equipamentos/local/:local', buscaPorLocal)
app.put('/equipamentos/:id', updateEquipamento)
app.delete('/equipamentos/:id', deleteEquipamento)

app.listen(porta, () => {
    console.log(`Servidor respondendo em: http://localhost:${porta}`)
})