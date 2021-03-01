import { Database } from "../db/Database";

let id = 1
class HotDogService{
    getAll(){
        return Database.hotdogs
    }

    create(newHotDog){
        newHotDog.id = id++
        Database.hotdogs.push(newHotDog)
        return newHotDog
    }

    delete(id){
       Database.hotdogs = Database.hotdogs.filter(hot => hot.id !== id)
    }

    edit(editedHotDog, id){
        const foundHotDog = Database.hotdogs.find(hot => hot.id == id)
        Object.keys(editedHotDog).forEach(key => {
            foundHotDog[key] = editedHotDog[key]
        })
        return foundHotDog
    }

}

export const hotDogService = new HotDogService();