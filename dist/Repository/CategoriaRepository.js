"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaRepository = void 0;
const Categoria_1 = require("../model/Categoria");
class CategoriaRepository {
    constructor() {
        this.categorias = [];
    }
    create({ name, description }) {
        const categoria = new Categoria_1.ModelCategoria();
        Object.assign(categoria, {
            name,
            description,
            created_at: new Date()
        });
        this.categorias.push(categoria);
    }
    list() {
        return this.categorias;
    }
    findByName(name) {
        const categoria = this.categorias.find(cate => cate.name === name);
        return categoria;
    }
}
exports.CategoriaRepository = CategoriaRepository;
