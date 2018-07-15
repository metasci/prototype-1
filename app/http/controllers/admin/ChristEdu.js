const root 		= require('app-root-path');
const models 	= require(root + '/database/models');



module.exports = {

    index: (req, res, next) => {
        models.ChristianEdu.getChristianEdu().then(christEdu => {
            res.locals.christedu = christEdu;
            res.render('pages/admin/education');
        });
    },


    create: (req, res, next) => {
        let newChristEdu = {
            title: req.body.title,
            description: req.body.description
        }

        models.ChristianEdu.create(newChristEdu).then(()=>{
            res.sendStatus(200);
        });
    },
	

	destroy: (req, res, next) => {
		models.ChristianEdu.destroy({where:{title:req.body.title}}).then(()=>{
			res.sendStatus(200);
		});
	}
}
