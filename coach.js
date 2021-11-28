class Coach{
    constructor(id, name) {
        this.id = id
        this.name = name


    }
    getCoach(){
        return [this.id, this.name]
    }
    setCoach(id, name){
        this.id = id
        this.name = name

    }
    checkUser(user){
        return user.level()

    }
}