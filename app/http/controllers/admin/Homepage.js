const root 		= require('app-root-path');
const models 	= require(root + '/database/models');
const sequelize = require('sequelize');
const logger    = require(root + '/libs/logger/logger');

module.exports = {
	
	index: (req, res, next) => {

        getData()
            .then(data => {
                res.locals.data = data;
            })
            .catch(err => {
                logger.error("(admin) homepage.index: " + err);
            })
            .then(() => {
                res.render('pages/admin/homepage');
            });
	},


	addHighlight: (req, res, next) => {

		let datetime = new Date(req.body.date + "T" + req.body.time + "Z").toISOString();
		let newHighlight = {
			date: datetime,
			description: req.body.description 
		};
		models.Highlight.create(newHighlight)
            .catch(err => {
                logger.error("(admin) homepage.addHighlight: " + err);
            })
            .then(()=>{
                logger.info("(admin) homepage.addHighlight: Highlight successfully added.");
                res.redirect('/admin/homepage');
            });
	},

	updateAnnual: (req, res, next) => {
		// console.log(req.body.description);
		models.Homepage.findOne()
            .then(homepage =>{
                homepage.update({annual_msg: req.body.description})
                    .then(()=>{
                        logger.info("(admin) homepage.updateAnnual: Annual Message successfully updated");
                        res.sendStatus(200);
                    });
            })
            .catch(err => {
                logger.error("(admin) homepage.updateAnnual: " + err);
            });
	},

	updatePastorQuote: (req, res, next) => {
		models.Homepage.findOne().then(homepage =>{
			homepage.update({pastor_quote: req.body.quote})
				.then(()=>{
                    logger.info("(admin) homepage.updatePastorQuote: Pastor Quote successfully updated");
                    res.redirect('/admin/homepage');
				});
		});
	},

	updateMission: (req, res, next) => {

		models.Homepage.findOne().then(homepage =>{
			homepage.update({mission: req.body.mission})
				.then(()=>{
                    logger.info("(admin) homepage.updateMission: Mission Statement successfully updated");
                    res.redirect('/admin/homepage');
				});
		});
	},

	deleteHighlight: (req, res, next) => {

		models.Highlight.destroy({where: {id: req.body.id}})
            .catch(err => {
                logger.error("(admin) homepage.deleteHighlight: " + err);
            })
			.then(()=>{
                logger.info("(admin) homepage.deleteHighlight: Highlight successfully deleted");
                res.redirect('/admin/homepage');
			});
	}
}

function getData() {
    let highlightQuery = getHighlightQuery();

    let promises = [
        models.Highlight.findAll(highlightQuery),
        models.Homepage.findOne({attributes: ['mission', 'annual_msg', 'pastor_quote']})
    ];

    return Promise.all(promises)
        .then(values => {
            let data = {};

            let highlights = [];
            values[0].forEach(item => {
                highlights.push(item.get())
            });
            data.highlights = highlights;

            data.mission = values[1].get().mission;
            data.pastorQuote = values[1].get().pastor_quote;
            data.annualMsg = decodeURI(values[1].get().annual_msg);

            return data;
        });
}

function getHighlightQuery() {
    return {
        attributes: ['id',
            [sequelize.fn('date_format', sequelize.col('date'), '%m-%d-%Y'), 'date'],
            [sequelize.fn('date_format', sequelize.col('date'), '%h:%i %p'), 'time'],
            'description'
        ],
        order:[['date','ASC']]
    };
}