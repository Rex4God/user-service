"use strict";

class BaseRepository {
    constructor(Model) {
        this.Model = Model;
    }

    getModel() {
        return this.Model;
    }

    create(payload) {
        return this.Model.create(payload);
    }

    findById(id) {
        return this.Model.findByPk(id);
    }

    findOne(condition) {
        return this.Model.findOne({where: condition});
    }

    update(condition, payload) {
        return this.Model.update(payload, {where: condition});
    }

    destroy(condition = {}){
        return this.Model.destroy({where: condition});
    }

    findAll(condition, limit, offset) {
        return this.Model.findAll({
            where: condition,
            limit,
            offset
        });
    }

    count(condition) {
        return this.Model.count({where: condition});
    }
}

module.exports = BaseRepository;
