const Service = require('../services/Service.js')

class Controller{
    static async pegaTodos(req, res){
        try {
            const listaDeRelatos = await Service.pegaTudo()
            res.status(200).json(listaDeRelatos)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
}

module.exports = Controller