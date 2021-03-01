import { Database } from "../db/Database";

let id = 1
class HamburgerService{
    getAll(){
        return Database.hamburgers
    }

    create(newHamburger){
        newHamburger.id = id++
        Database.hamburgers.push(newHamburger)
        return newHamburger
    }

    delete(id){
        Database.hamburgers = Database.hamburgers.filter(h => h.id !== id)
    }
    
    edit(editedHamburger, id){
        const foundHamburger = Database.hamburgers.find(h => h.id == id)
        Object.keys(editedHamburger).forEach(key => {
            foundHamburger[key] = editedHamburger[key]
        })
        return foundHamburger
    }

    getOne(id){
        const foundHamburger = Database.hamburgers.find(h => h.id == id)
        return foundHamburger
    }

}


export const hamburgerService = new HamburgerService();