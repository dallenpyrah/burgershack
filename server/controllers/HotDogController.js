import { Database } from "../db/Database";
import { hotDogService } from "../services/HotDogService";
import BaseController from "../utils/BaseController";

export class HotDogController extends BaseController{
    constructor(){
        super("api/hotdogs")
        this.router
        .get("", this.getAll)
        .post("", this.create)
        .delete("/:id", this.delete)
        .put("/:id", this.edit)
    }

    async getAll(req,res,next){
        try {
            const hotdogs = hotDogService.getAll()
            res.send(hotdogs)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next){
        try {
            let newHotDog = req.body
            const hotdog = hotDogService.create(newHotDog)
            res.status(201).send({data: hotdog, message: "Hot Dog Created", count: Database.hotdogs.length})
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next){
        try {
            const id = req.params.id
            hotDogService.delete(id)
            res.send("Hot Dog Deleted")
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next){
        try {
            let editedHotDog = req.body
            editedHotDog.id = req.params.id
            const hotdog = hotDogService.edit(editedHotDog, req.params.id)
            res.send(hotdog)
        } catch (error) {
            next(error)
        }
    }
}