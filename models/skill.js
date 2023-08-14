const skills = [
    { id: 1, name: 'Brainstorming',  },
    { id: 2, name: 'JS', },
    { id: 3, name: 'WebDev', },
    { id: 4, name: 'Expressapp', }
  ];

module.exports = {
    
    getAll, 
    getOne, 
    create, 
        destroy: deleteOne,
    update: updateOne


};

function getAll() {
    return skills;



    }

    function getOne(id) {
    id = Number(id)
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    console.log(skill.id) 
    skill.name = skill.skill
    skills.push(skill)


}


    function deleteOne(id) {
    const skillPosition = skills.findIndex(function(skill) {
        return skill.id === id;
    })
    console.log(skillPosition)
    skills.splice(skillPosition, 1)



}


function updateOne(id, data) {
    
    
        console.log(id, data)
    let index = skills.findIndex(s=>s.id == id)
    const updateData = {...data }
      
        let updatedSkill = {...skills[index], ...updateData}
    skills.splice(index, 1, updatedSkill)
    updatedSkill.name = updatedSkill.skill
    
    console.log("Skills index", updatedSkill)
    console.log(skills[1])

    return updatedSkill;
}