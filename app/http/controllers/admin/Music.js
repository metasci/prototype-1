


module.exports = {
	
	index: (req, res, next) => {
        
        res.locals.musicItem = {
            "Choir Rehearsal": decodeURI("%3Cp%3EAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.%3C/p%3E"),
            "Organ": decodeURI("%3Cp%3EAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.%3C/p%3E")
        }

        res.render('pages/admin/music');
    },

    /**
	 * respond to post
	 * add new music to database
	 */
	create: (req, res, next) => {
		let newMusicItem = {
			title: req.body.title,
			description: req.body.description
		}
		// add new music item to database here
        console.log(newMusicItem);
        
		res.sendStatus(200);
	},
	

	destroy: (req, res, next) => {
		console.log(req.body.title);

		// delete ministry by title

		res.sendStatus(200);
	}
}
