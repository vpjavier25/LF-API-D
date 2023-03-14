const axios = require("axios")
const { where } = require("sequelize")
const { Recipe, Diet, recipe_diet } = require('../db')
const {API_KEY} = process.env


const filterId = async (id, source) => {

} 

const getAllName = async () => {  
  
}

const allDiets = async () => {

}

const createFood = async (name, image, description, healthScore, steps, diets) => {
    
}



module.exports = {
    allDiets,
    filterId,
    createFood,
    getAllName,
}