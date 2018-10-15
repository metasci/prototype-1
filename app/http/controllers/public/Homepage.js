const root 		= require('app-root-path');
const models 	= require(root + '/database/models');
const sequelize = require('sequelize');
const logger    = require(root + '/libs/logger/logger');


module.exports = {
	

	index: (req, res, next) => {
        getData()
            .then(data => {
                res.locals = data;
                res.locals.headerClass = 'alt';
            })
            .catch(err => {
                logger.error("(public) homepage.index: " + err);
            })
            .then(() => {
                res.render('pages/public/index');
            });
	}
};

function getData() {
    let highlightQuery = getHighlightQuery();

    let promises = [
        models.Highlight.findAll(highlightQuery),
        models.File.findOne({attributes: ['newsletter']}),
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

            data.newsletter = values[1].get().newsletter;

            data.mission = values[2].get().mission;
            data.pastorQuote = values[2].get().pastor_quote;
            data.annualMsg = decodeURI(values[2].get().annual_msg);

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