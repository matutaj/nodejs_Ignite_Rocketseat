"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriaRouter = void 0;
const express_1 = require("express");
const CategoriaRepository_1 = require("../Repository/CategoriaRepository");
const categoriaRouter = (0, express_1.Router)();
exports.categoriaRouter = categoriaRouter;
const categoriaRepositories = new CategoriaRepository_1.CategoriaRepository();
categoriaRouter.post("/", (req, res) => {
    const { name, description } = req.body;
    const categoriaExist = categoriaRepositories.findByName(name);
    if (categoriaExist) {
        return res.status(401).json({ messenger: "Já existe está categoria!" });
    }
    categoriaRepositories.create({ name, description });
    return res.status(201).json(categoriaRepositories);
});
categoriaRouter.get("/", (req, res) => {
    const todosCategorias = categoriaRepositories.list();
    return res.status(202).json(todosCategorias);
});
