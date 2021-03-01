import { Database } from "../db/Database";
import { hamburgerService } from "../services/HamburgerService";
import BaseController from "../utils/BaseController";


export class HamburgerController extends BaseController{

    constructor(){
        super("api/hamburgers")
        this.router
        .get("", this.getAll)
        .get("/:id", this.getOne)
        .post("", this.create)
        .delete("/:id", this.delete)
        .put("/:id", this.edit)
        
    }

    async getAll(req, res, next){
        try {
            const hamburgers = hamburgerService.getAll()
            res.send(hamburgers)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next){
        try {
            let newHamburger = req.body
            const hamburger = hamburgerService.create(newHamburger)
            res.status(201).send({data: hamburger, message: "Hamburger Created", count: Database.hamburgers.length})
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next){
        try {
            const id = req.params.id
            hamburgerService.delete(id)
            res.send("Hambuger Deleted")
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next){
        try {
            let editedHamburger = req.body
            editedHamburger.id = req.params.id
            const hamburger = hamburgerService.edit(editedHamburger, req.params.id)
            res.send(hamburger)
        } catch (error) {
            next(error)
        }
    }

    async getOne(req, res, next){
        try {
            res.send(hamburgerService.getOne(req.params.id))
        } catch (error) {
            next(error)
        }
    }

}